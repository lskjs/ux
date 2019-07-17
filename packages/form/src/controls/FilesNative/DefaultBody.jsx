import React from 'react';
import If from 'react-if';
import FileIcon from 'react-icons2/mdi/file-image';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
import { Actions, Block, Drop, DropIcon, DropText, Header, Info } from './FilesNative.styles';

const DefaultBody = ({
  dragged,
  // value, 
  inputRef,
  validationState,
}) => {
  return (
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
              <Button
                type="button"
                paint="primary"
                bordered
                onClick={() => {
                  if (inputRef) {
                    inputRef.click();
                  }
                }}
              >
                <T name="upload.buttonFiles" />
              </Button>
            </Actions>
          </Header>
        </Block>
      </If>
    </React.Fragment>
  );
};

export default DefaultBody;
