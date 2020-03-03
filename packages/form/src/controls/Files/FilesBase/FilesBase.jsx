/** @jsx jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { jsx } from '@emotion/core';
import autobind from '@lskjs/autobind';
import isFunction from 'lodash/isFunction';
import Dropzone from 'react-dropzone';
import zoneStyle from './FilesBase.styles';

const DEBUG = 1;

@inject('uapp')
class FilesBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: props.value,
      dragged: false,
      image: null,
    };
    this.zone = React.createRef();
  }

  @autobind
  onDragged(dragged) {
    this.setState({ dragged });
  }

  @autobind
  async onDrop(files = []) {
    const { onSubmit, hasCropper } = this.props;
    const state = { dragged: false };
    if (!hasCropper) {
      const value = await this.onUpload(files);
      if (onSubmit) onSubmit(value);
    } else {
      const [image] = files;
      state.image = image;
    }
    this.setState(state);
  }

  @autobind
  async onCrop(blob) {
    const { onSubmit, hasCropper } = this.props;
    if (!blob) return;
    if (hasCropper) {
      const value = await this.onUpload([blob]);
      if (onSubmit) onSubmit(value);
      this.setState({ image: null });
    }
  }

  @autobind
  async onUpload(files) {
    const { onError, multiple, uapp } = this.props;
    const upload = await uapp.module('upload');
    if (!upload) throw '!upload';
    let value = null;
    try {
      const res = await upload.uploadFiles(files);
      if (multiple) value = res.map(e => e.url);
      else value = res[0] && res[0].url;
    } catch (err) {
      if (uapp.onError) {
        uapp.onError(err);
      } else {
        console.error('Files.onDrop', '!onError', onError, err);
      }
    }
    return value;
  }

  @autobind
  remove({ src } = {}) {
    if (DEBUG) console.log('remove', { src });
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit({
        // хуйня, но что поделать?
        type: 'remove',
        src,
      });
    }
  }

  @autobind
  removeAll() {
    if (DEBUG) console.log('removeAll');
    const { onSubmit } = this.props;
    if (onSubmit) onSubmit(null);
  }

  render() {
    const { dragged, image } = this.state;
    const { value2 } = this.props;
    const {
      info,
      dropText,
      buttonText,
      validationState,
      multiple,
      showPreview,
      className,
      children,
      footer,
      type,
      id,
      title,
      hasCropper,
      CropperComponent,
      ...otherProps
    } = this.props;
    const childrenProps = {
      validationState,
      refZone: this.zone,
      dragged,
      value: value2,
      info,
      buttonText,
      onRemoveAll: this.removeAll,
      onRemove: this.remove,
      dropText,
      multiple,
      showPreview,
      type,
      avatar: {
        id,
        title,
      },
    };
    return (
      <>
        {hasCropper && CropperComponent && image && <CropperComponent src={image} onSubmit={this.onCrop} />}
        <Dropzone
          {...otherProps}
          css={[zoneStyle, className]}
          disableClick
          multiple={multiple}
          ref={this.zone}
          onDrop={this.onDrop}
          onDragEnter={() => this.onDragged(true)}
          onDragLeave={() => this.onDragged(false)}
        >
          {isFunction(children) ? children(childrenProps) : children}
        </Dropzone>
        {isFunction(footer) ? footer(childrenProps) : footer}
      </>
    );
  }
}

FilesBase.propTypes = {
  // uapp: PropTypes.objectOf(Object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  value2: PropTypes.any,
  dropText: PropTypes.string,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
  validationState: PropTypes.oneOf(['success', 'warning', 'error']),
  info: PropTypes.string,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  multiple: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.func,
  footer: PropTypes.func,
  type: PropTypes.string,
  hasCropper: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  showPreview: PropTypes.any,
  CropperComponent: PropTypes.elementType,
};

FilesBase.defaultProps = {
  className: null,
  multiple: false,
  onSubmit: null,
  onError: null,
  value: null,
  value2: null,
  info: null,
  dropText: null,
  buttonText: null,
  placeholder: null,
  validationState: null,
  id: null,
  title: null,
  children: null,
  footer: null,
  type: undefined,
  hasCropper: false,
  CropperComponent: undefined,
  showPreview: null,
};

export default FilesBase;
