import React, { Component } from 'react';
import autobind from '@lskjs/autobind';
import Remove from 'react-icons2/mdi/close-circle-outline';
import fileTypes from '../fileTypes';
import Box from '../Box';
import Typography from '../Typography';
import {
  containerStyle,
  typeStyle,
  urlStyle,
  PreviewImage,
  RemoveButton,
  PreviewContainer,
  Info,
  centerFile,
} from './GridFile.styles';

class GridFile extends Component {
  static determineType(url) {
    let [, ext] = url.match(/.+\.(\w+)\??.*$/) || [];
    const isType = Object.keys(fileTypes).includes(ext);
    if (!isType) ext = 'other';
    return ext;
  }
  shouldComponentUpdate(nextProps) {
    return this.props.url !== nextProps.url;
  }

  @autobind
  removeFile() {
    const { value, item } = this.props;
    value.splice(item, 1);
  }

  render() {
    const { url } = this.props;
    const type = this.constructor.determineType(url);
    const Icon = fileTypes[type];
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const urlImage = url.match(/[^/]+(jpg|jpeg|exif|bmp|png|gif|tiff|webp|heif)$/);
    return (
      <Box
        componentClass="div"
        className={containerStyle}
      >
        <PreviewContainer>
          { urlImage
            ? (
              <PreviewImage
                src={url}
                alt={fileName}
              />
            )
            : (
              <Icon
                size={64}
                className={centerFile}
              />
            )}
        </PreviewContainer>
        <Info>
          <Typography
            color="#9b9b9b"
            variant="caption"
            className={typeStyle}
          >
            {type}
          </Typography>
          <Typography className={urlStyle}>{fileName}</Typography>
        </Info>
        <RemoveButton>
          <Remove onClick={this.removeFile} />
        </RemoveButton>
      </Box>
    );
  }
}

export default GridFile;
