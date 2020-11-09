// TODO: JSDoc like this
// https://github.com/logux/server/blob/master/server/index.d.ts

export interface MessageProps {
  image?: string;
  authorName?: string;
  time?: string;
  text?: string;
  isRightDir?: boolean;
  showTitle?: boolean;
  showAvatar?: boolean;
  avatar?: string;
};
