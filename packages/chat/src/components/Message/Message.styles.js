import styled from '@emotion/styled';

export const ContentWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: auto;
  animation: fadeIn 1s ease-in;
  /* max-width: max-content; */
`;
export const AvatarWrapper = styled('div')`
  width: 42px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-top: ${({ showTitle }) => (showTitle ? '26px' : '0')};
`;

export const Avatar = styled('img')`
  width: 42px;
  height: 42px;
  background-color: #ced4da;
  border-radius: 21px;
  object-fit: cover;
  position: sticky;
  bottom: 0;
  z-index: 1;
`;

export const Text = styled('div')`
  display: block;
  color: #333;
  padding: 10px 14px;
  font-size: 16px;
  min-width: 42px;
  min-height: 42px;
  text-align: left;

  /* hyphens: auto; перенос слов */
`;

export const Title = styled('div')`
  display: block;
  /* text-transform: uppercase; */
  font-size: 12px;
  color: #a2aab3;
  /* opacity: 0; // прозрачность имени изменяется при наведении */
  transition: opacity 0.5s cubic-bezier(0.39, 0.58, 0.57, 1);
  padding: ${({ isRightDir }) => (isRightDir ? '0 9px 0 0' : '0 0 0 9px')};
`;
export const Time = styled('div')`
  color: #adb5bd;
  font-size: 10px;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.39, 0.58, 0.57, 1);
`;

export const Media = styled('div')``;

export const Message = styled('div')`
  width: 100%;
`;

export const Wrapper = styled('div')`
  display: flex;
  max-width: 90%;
  align-items: stretch;
  margin: ${({ isRightDir }) =>
    isRightDir ? '0 0 20px auto' : '0 auto 20px 0'};
  /* margin-top: 20px; */
  &:hover {
    ${Time}, ${Title} {
      opacity: 1;
    }
  }
  ${AvatarWrapper} {
    margin: ${({ isRightDir }) => (isRightDir ? '0 0 0 6px' : '0 6px 0 0')};
    order: ${({ isRightDir }) => (isRightDir ? '1' : '-1')};
  }

  /* text-align: right; */
  ${ContentWrapper} {
    justify-content: ${({ isRightDir }) =>
      isRightDir ? 'flex-end' : 'flex-start'};
  }
  ${Title}, ${Time} {
    text-align: ${({ isRightDir }) => (isRightDir ? 'right' : 'left')};
  }
  ${Text} {
    background-color: ${({ isRightDir }) =>
      isRightDir ? '#2dce89' : '#e9ecef'};
    color: ${({ isRightDir }) => (isRightDir ? '#ffffff' : '#333333')};
    border-radius: ${({ isRightDir }) =>
      isRightDir ? '18px 18px 0 18px' : '18px 18px 18px 0'};
  }

  ${Time} {
    order: ${({ isRightDir }) => (isRightDir ? '-1' : '1')};
    margin: ${({ isRightDir }) => (isRightDir ? '0 24px 0 0' : '0 0 0 24px')};
  }
`;
