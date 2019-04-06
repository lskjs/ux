import React, { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';
import Remove from 'react-icons2/mdi/close-circle-outline';
import fileTypes from '../../../../utils/fileTypes';
import Box from '../Box';
import { Row, Col } from '../../../../Grid/index';
import Typography from './Typography';
import { containerStyle, typeStyle, urlStyle, PrewImage, RemoveButton, CenterFile, ReSizeIcon } from './File.styles';

class File extends Component {
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
        <Row>
          <Col xs={7} md={5} sm={5} className={CenterFile}>
            { urlImage ? <PrewImage src={url} alt={fileName} /> : <Icon size={70} className={ReSizeIcon} />}
          </Col>
          <Col xs={5} md={7} sm={7}>
            <Typography
              color="#9b9b9b"
              variant="caption"
              className={typeStyle}
            >
              {type}
            </Typography>
            <Typography className={urlStyle}>{fileName}</Typography>
            <RemoveButton>
              <Remove onClick={this.removeFile} />
            </RemoveButton>
          </Col>
        </Row>
      </Box>
    );
  }
}

export default File;

