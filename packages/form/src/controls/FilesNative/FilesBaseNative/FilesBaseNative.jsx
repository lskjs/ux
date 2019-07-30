import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import autobind from '@lskjs/autobind';
import Promise from 'bluebird';
import isFunction from 'lodash/isFunction';
import cx from 'classnames';
import zoneStyle, { Loader, LoaderWrapper, Overlay } from './FilesBaseNative.styles';

@inject(s => ({
  upload: s.uapp.modules.upload,
  uapp: s.uapp,
  i18: s.i18,
}))
@observer
class Files extends Component {
  static propTypes = {
    value: PropTypes.any,
    dropText: PropTypes.string,
    buttonText: PropTypes.string,
    placeholder: PropTypes.string,
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    info: PropTypes.string,
    onSubmit: PropTypes.func,
    onError: PropTypes.func,
    upload: PropTypes.object.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
    multiple: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.func,
    footer: PropTypes.func,
    type: PropTypes.string,
    maxSize: PropTypes.number,
    i18: PropTypes.object.isRequired,
  }
  static defaultProps = {
    className: null,
    multiple: false,
    onSubmit: null,
    onError: null,
    value: null,
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
    maxSize: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      // value: props.value,
      dragged: false,
      input: null,
      loader: false,
    };
    this.input = null;
  }
  componentDidMount() {
    const { name } = this.props;
    console.log(name);
    if (typeof window !== 'undefined') {
      const input = document.getElementById(`${name}-input`);
      this.setState({ input });
    }
  }
  // componentWillReceiveProps(next) {
  //   const { value } = this.props;
  //   if (value !== next.value) {
  //     this.setState({ value: next.value });
  //   }
  // }
  @autobind
  async onDrop(files = []) {
    const {
      onSubmit,
      upload,
      onError,
      multiple,
      maxSize,
      i18,
      uapp,
    } = this.props;
    if (!upload) return;
    let value = null;
    try {
      this.setState({ loader: true });
      const res = await Promise.map(files, (file) => {
        if (maxSize) {
          const fileSize = file.size / 1024 / 1024;
          if (fileSize > maxSize) {
            throw i18.t('error.fileSize');
          }
        }
        return upload.uploadFile(file);
      });
      if (multiple) value = res.map(e => e.url);
      else value = res[0] && res[0].url;
      if (onSubmit) onSubmit(value);
      this.setState({ loader: false });
    } catch (err) {
      this.setState({ loader: false });
      if (uapp.onError) {
        uapp.onError(err);
      } else {
        console.error('Files.onDrop', '!onError', onError, err);
      }
    }
    this.setState({ dragged: false });
  }
  @autobind
  onDragged(dragged) {
    this.setState({ dragged });
  }
  @autobind
  remove({ src } = {}) {
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit({ // хуйня, но что поделать?
        type: 'remove',
        src,
      });
    }
  }
  @autobind
  removeAll() {
    const { onSubmit } = this.props;
    if (onSubmit) onSubmit(null);
  }

  render() {
    const { dragged, input, loader } = this.state;
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
      name,
      ...otherProps
    } = this.props;
    let open = null;
    // console.log('this.state.input', input);
    const childrenProps = {
      validationState,
      refZone: this.zone,
      open,
      dragged,
      value: value2,
      info,
      inputRef: input,
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
      <React.Fragment>
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
          }}
          {...otherProps}
          className={cx({
            [zoneStyle]: true,
            [className]: className,
          })}
        >
          <input
            id={`${name}-input`}
            multiple={multiple}
            type="file"
            style={{
              outline: 'none',
              opacity: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
            }}
            onChange={(e) => {
              this.onDrop(e.target.files);
            }}
          />
          <div style={{ display: loader ? 'block' : 'none' }}>
            <Overlay />
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          </div>
          {isFunction(children) ? children(childrenProps) : children}
        </div>
        {/* <Dropzone
          {...otherProps}
          
          disableClick
          multiple={multiple}
          ref={this.zone}
          onDrop={this.onDrop}
          onDragEnter={() => this.onDragged(true)}
          onDragLeave={() => this.onDragged(false)}
        >
          {isFunction(children) ? children(childrenProps) : children}
        </Dropzone> */}
        {isFunction(footer) ? footer(childrenProps) : footer}
      </React.Fragment>
    );
  }
}

export default Files;
