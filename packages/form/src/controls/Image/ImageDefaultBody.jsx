import React from 'react';
import File from 'react-icons2/mdi/file-image';
import Remove from 'react-icons2/mdi/close-circle-outline';
import T from '@lskjs/t';
import Avatar from '@lskjs/avatar';
// import DEV from '@lskjs/dev';

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
} from './Image.styles';

const ImageDefaultBody = ({
  dragged,
  value,
  refZone,
  onRemoveAll,
  showPreview,
  validationState,
  type = 'image',
  avatar,
}) => {
  return (
    <>
      {/* <DEV json={{ value, showPreview, type }} /> */}
      {!!dragged && (
        <Drop>
          <DropText>
            <T name="upload.dropImage" />
          </DropText>
          <DropIcon>
            <File />
          </DropIcon>
        </Drop>
      )}
      {!dragged && (
        <Block validationState={validationState} type={type}>
          <Header>
            <Info>
              <T name="upload.infoImage" />
            </Info>
            <Actions>
              <Button type="button" onClick={() => refZone.current && refZone.current.open()}>
                <T name="upload.buttonImage" />
              </Button>
            </Actions>
          </Header>
          {showPreview !== false && (
            <>
              <Footer
                style={
                  value && type === 'image'
                    ? {
                        backgroundImage: `url(${value})`,
                      }
                    : {}
                }
              >
                {(!value || type === 'avatar') && (
                  <>
                    <IconFooter>
                      {type === 'image' && <File />}
                      {type === 'avatar' && <Avatar size={116} src={value} title={avatar.title} id={avatar.id} />}
                    </IconFooter>
                    <PlaceholderFooter>
                      <T name="upload.placeholderImage" />
                    </PlaceholderFooter>
                  </>
                )}
                {type === 'image' && value && (
                  <>
                    <Overlay />
                    <RemoveButton type="button" onClick={onRemoveAll}>
                      <Remove />
                    </RemoveButton>
                  </>
                )}
              </Footer>
            </>
          )}
        </Block>
      )}
    </>
  );
};

export default ImageDefaultBody;
