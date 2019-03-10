import styled from 'react-emotion';

export const Left = styled('div')`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 10px;
`;

export const Right = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Item = styled('div')`
  padding: 16px 32px 16px 8px;
  transition: .3s ease;
  will-change: opacity;
  cursor: pointer;
  display: flex;
  /* width: 100%; */
  border-radius: 8px;
  line-height: 1.2;
  text-decoration: none;
  align-items: flex-start;
  font-family: ${p => p.theme.fontFamily};
 
  * {
    color: ${p => p.theme.colors.white} !important;
  }
  .notify-title {
    font-size: 13px !important;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: -0.1px;
  }
  .notify-avatar {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${p => (p.type === 'error' && 'padding: 1px 3px 4px 3px')};
  }
  .notify-text {
    font-size: 11px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: -0.1px;
    overflow: hidden;
    word-break: break-word;
    width: 215px;
  }
  .notify-item {
    display: flex;
  }
  .notify-info {
    padding-left: 10px;

  }

  .notify-timeline {
    width: 100%;
    height: 4px;
    background-image: linear-gradient(to right, rgba(75, 134, 198, 0.0), #7070ff),
                      linear-gradient(#f0f5fa, #f0f5fa);

    animation-name: notifyTime;
    animation-duration: 4s;
  }

  @keyframes notifyTime {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none
  }
  &:active {
    text-decoration: none;
  }
  ${(p) => {
    switch (p.type) {
      case 'error':
        return `
          background-color: #ee1e31 !important;
          color: white !important;
          &:hover {
            background-color: #ee1e31 !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      case 'warning':
        return `
          background-color: #fe9902 !important;
          color: white !important;
          &:hover {
            background-color: #fe9902 !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      case 'success':
        return `
          background-color: #50cc58 !important;
          color: white !important;
          &:hover {
            background-color: #50cc58 !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      case 'info':
        return `
          background-color: #7070ff !important;
          color: white !important;
          &:hover {
            background-color: #7070ff !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      default: return '';
    }
  }}
  ${p => (p.unread && `
    background-color: #ddebf9;
  `)}
  
`;

