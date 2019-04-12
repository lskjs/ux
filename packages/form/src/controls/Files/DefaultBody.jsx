import React from 'react';
import If from 'react-if';
import FileIcon from 'react-icons2/mdi/file-image';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
import { Actions, Block, Drop, DropIcon, DropText, Header, Info } from './Files.styles';

const DefaultBody = ({
  dragged,
  value,
  refZone,
  validationState,
}) => (
  <React.Fragment>
    <If condition={dragged}>
      <Drop>
        <DropText>
          <T name="upload.dropFiles" />
        </DropText>
        <DropIcon>
          <FileIcon />
        </DropIcon>
      </Drop>
    </If>
    <If condition={!dragged}>
      <Block
        validationState={validationState}
      >
        <Header>
          <Info>
            <T name="upload.infoFiles" />
          </Info>
          <Actions>
            <If condition={!value}>
              <Button
                type="button"
                paint="primary"
                bordered
                onClick={() => refZone.current && refZone.current.open()}
              >
                <T name="upload.buttonFiles" />
              </Button>
            </If>
            <If condition={value && value.length}>
              <Button
                type="button"
                paint="primary"
                onClick={() => refZone.current && refZone.current.open()}
              >
                <T name="upload.buttonFiles" />
              </Button>
            </If>
            <If condition={value && value.length === 0}>
              <Button
                type="button"
                paint="primary"
                onClick={() => refZone.current && refZone.current.open()}
              >
                <T name="upload.buttonFiles" />
              </Button>
            </If>
          </Actions>
        </Header>
      </Block>
    </If>
  </React.Fragment>
);

export default DefaultBody;
