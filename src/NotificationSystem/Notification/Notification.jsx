import React, { Component } from 'react';
import If from 'react-if';
import T from '../../T';
import ErrorIcon from './svg/error';
import WarningIcon from './svg/warning';
import InfoIcon from './svg/info';
import SuccessIcon from './svg/success';
import NotifyItem from './NotifyItem';

class Notification extends Component {
  getDefaultImage() {
    const { type } = this.props;
    if (type === 'notify.error') {
      return <ErrorIcon size={20} />;
    }
    if (type === 'notify.success') {
      return <SuccessIcon size={20} />;
    }
    if (type === 'notify.warning') {
      return <WarningIcon size={20} />;
    }
    if (type === 'notify.info') {
      return <InfoIcon size={20} />;
    }
    // @TODO: Сделать иконку вопроса
    return <InfoIcon size={20} />;
  }

  render() {
    const {
      href, onClick, type, title, text, image,
    } = this.props;

    return (
      <div aria-hidden onClick={onClick}>
        <NotifyItem
          // unread
          // unread={transparent ? false : !(item.viewedAt)}
          href={href}
          type={type}
        >
          <div className="notify-item">
            <div className="notify-avatar">
              {image || this.getDefaultImage()}
            </div>
            <div className="notify-info">
              <div className="notify-content">
                <span className="notify-info-entity">
                  <If condition={title}>
                    <span className="notify-title">
                      {title}
                    </span>
                  </If>
                  <If condition={!title && type === 'error'}>
                    <T name="common.error" />
                  </If>
                  <If condition={!title && type !== 'error'}>
                    <T name="common.success" />
                  </If>
                  <If condition={text}>
                    <div className="notify-text">
                      {text}
                    </div>
                  </If>
                </span>
              </div>
            </div>
          </div>
        </NotifyItem>
      </div>
    );
  }
}

export default Notification;
