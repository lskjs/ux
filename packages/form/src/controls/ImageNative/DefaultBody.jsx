import React from 'react';
import If from 'react-if';
import File from 'react-icons2/mdi/file-image';
import Remove from 'react-icons2/mdi/close-circle-outline';
import T from '@lskjs/t';
import Avatar from '@lskjs/avatar';

import {
  Drop,
  DropIcon,
  DropText,
  Overlay,
  RemoveButton,
  PlaceholderFooter,
  IconFooter,
  Footer,
  Button,
  Actions,
  Info,
  Header,
  Block,
} from './ImageNative.styles';

const DefaultBody = ({
  dragged,
  value,
  inputRef,
  onRemoveAll,
  // onRemoveFiles,
  validationState,
  showPreview = true,
  removable = false,
  type = 'image',
  avatar,
}) => {
  const open = () => {
    if (inputRef) {
      inputRef.click();
    }
  };
  return (
    <React.Fragment>
      <If condition={dragged}>
        <Drop>
          <DropText>
            <T name="upload.dropImage" />
          </DropText>
          <DropIcon>
            <File />
          </DropIcon>
        </Drop>
      </If>
      <If condition={!dragged}>
        <Block
          validationState={validationState}
          type={type}
        >
          <Header>
            <Info>
              <T name="upload.infoImage" />
            </Info>
            <Actions>
              <Button
                type="button"
                onTouchStart={open}
                onClick={open}
              >
                <T name="upload.buttonImage" />
              </Button>
            </Actions>
          </Header>
          <If condition={showPreview}>
            <Footer
              style={(value && type === 'image') ? {
                backgroundImage: `url(${value})`,
              } : {}}
            >
              <If condition={!value || type === 'avatar'}>
                <IconFooter>
                  <If condition={type === 'image'}>
                    <File />
                  </If>
                  <If condition={type === 'avatar'}>
                    <Avatar size={116} src={value} title={avatar.title} id={avatar.id} />
                  </If>
                </IconFooter>
                <PlaceholderFooter>
                  <T name="upload.placeholderImage" />
                </PlaceholderFooter>
              </If>
              {removable && value && (
                <React.Fragment>
                  <Overlay />
                  <RemoveButton
                    type="button"
                    onClick={onRemoveAll}
                  >
                    <Remove />
                  </RemoveButton>
                </React.Fragment>
              )}
            </Footer>
          </If>
        </Block>
      </If>
    </React.Fragment>
  );
};

export default DefaultBody;
