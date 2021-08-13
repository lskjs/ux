import Avatar from '@lskjs/avatar';
import Link from '@lskjs/link';
import React from 'react';

import { Sider } from '../Sider';
import { ImageWrapper, TextWrapper } from './ChipItem.styles';

export const ChipItem = ({ link, item = {}, size = 40, children: content }) => {
  const children = (
    <Sider
      verticalAlign="center"
      gap={12}
      left={
        <ImageWrapper>
          <Avatar
            id={item.id || item._id}
            name={item.title || item.name}
            src={item.image || item.avatar}
            size={size}
            style={{ flexShrink: 0 }}
          />
        </ImageWrapper>
      }
      // style={{ marginRight: 10, padding: '5px 0' }}
      right={
        <TextWrapper>
          {item.title || item.name}
          <div>{content}</div>
        </TextWrapper>
      }
    />
  );

  if (!link) return children;
  return <Link href={item.link}>{children}</Link>;
};

export default ChipItem;
