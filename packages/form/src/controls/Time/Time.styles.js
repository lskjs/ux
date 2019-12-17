import { injectGlobal } from 'emotion';

export default () => injectGlobal`
  .ant-calendar-picker-container {
    z-index: 1;
  }
  .ant-calendar-picker-container-clear,
  .ant-calendar-picker-container-icon {
    z-index: 0;
  }
  form .has-feedback .ant-calendar-picker-icon,
  form .has-feedback .ant-time-picker-icon,
  form .has-feedback .ant-calendar-picker-clear,
  form .has-feedback .ant-time-picker-clear {
    right: 28px;
  }
 .time-picker-panel-inner {
    position: relative;
    left: -2px;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    outline: none;
  }
 .time-picker-panel-input {
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: normal;
    border: 0;
    outline: 0;
    cursor: auto;
  }
 .time-picker-panel-input-wrap {
    position: relative;
    box-sizing: border-box;
    padding: 7px 2px 7px ;
  }
 .time-picker-panel-select {
  position: relative;
  float: left;
  box-sizing: border-box;
  max-height: 192px;
  overflow: hidden;
}
 .time-picker-panel-select:hover {
  overflow-y: auto;
}
 .time-picker-panel-select:first-child {
  margin-left: 0;
  border-left: 0;
}
 .time-picker-panel-select:last-child {
  border-right: 0;
}
 .time-picker-panel-select:only-child {
  width: 100%;
}
 .time-picker-panel-select ul {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0 0 160px;
  list-style: none;
}
 .time-picker-panel-select li {
  box-sizing: content-box;
  width: 100%;
  height: 32px;
  margin: 0;
  padding: 0 0 0 ;
  line-height: 32px;
  text-align: left;
  list-style: none;
  cursor: pointer;
  transition: background 0.3s;
  user-select: none;
}
 li.time-picker-panel-select-option-disabled:hover {
  background: transparent;
  cursor: not-allowed;
}
 .time-picker-panel-addon {
  padding: 8px;
}
 .time-picker-panel.slide-up-enter.slide-up-enter-active.time-picker-panel-placement-topLeft, .time-picker-panel.slide-up-enter.slide-up-enter-active.time-picker-panel-placement-topRight, .time-picker-panel.slide-up-appear.slide-up-appear-active.time-picker-panel-placement-topLeft, .time-picker-panel.slide-up-appear.slide-up-appear-active.time-picker-panel-placement-topRight {
  animation-name: antSlideDownIn;
}
 .time-picker-panel.slide-up-enter.slide-up-enter-active.time-picker-panel-placement-bottomLeft, .time-picker-panel.slide-up-enter.slide-up-enter-active.time-picker-panel-placement-bottomRight, .time-picker-panel.slide-up-appear.slide-up-appear-active.time-picker-panel-placement-bottomLeft, .time-picker-panel.slide-up-appear.slide-up-appear-active.time-picker-panel-placement-bottomRight {
  animation-name: antSlideUpIn;
}
 .time-picker-panel.slide-up-leave.slide-up-leave-active.time-picker-panel-placement-topLeft, .time-picker-panel.slide-up-leave.slide-up-leave-active.time-picker-panel-placement-topRight {
  animation-name: antSlideDownOut;
}
 .time-picker-panel.slide-up-leave.slide-up-leave-active.time-picker-panel-placement-bottomLeft, .time-picker-panel.slide-up-leave.slide-up-leave-active.time-picker-panel-placement-bottomRight {
  animation-name: antSlideUpOut;
}
 .time-picker {
  position: relative;
  display: inline-block;
  width: 128px;
  outline: none;
  cursor: text;
  transition: opacity 0.3s;
}
 .time-picker-open {
  opacity: 0;
}
 .time-picker-icon, .time-picker-clear {
  position: absolute;
  top: 50%;
  right: - 1px;
  z-index: 0;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  line-height: 14px;
  transition: all 0.3s ;
  user-select: none;
}
 .time-picker-icon .time-picker-clock-icon, .time-picker-clear .time-picker-clock-icon {
  display: block;
  line-height: 1;
}
 .time-picker-clear {
  opacity: 0;
  pointer-events: none;
}
 .time-picker:hover .time-picker-clear {
  opacity: 1;
  pointer-events: auto;
}
 .time-picker-small .time-picker-icon, .time-picker-small .time-picker-clear {
  right: - 1px;
}
  .ant-time-picker-icon {
    position: absolute;
    top: 50%;
    right: 11px;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    color: #BFBFBF;
    line-height: 14px;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .anticon .anticon-clock-circle .ant-time-picker-clock-icon {
    display: block;
    color: #BFBFBF;
    line-height: 1;
  }
  .ant-time-picker-icon, .ant-time-picker-clear {
    position: absolute;
    top: 50%;
    right: 11px;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    color: #BFBFBF;
    line-height: 14px;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
  .ant-time-picker-clear {
    opacity: 0;
  }
  .ant-time-picker:hover .ant-time-picker-clear {
    opacity: 1;
    margin-right: 18px;
    cursor: pointer;
  }
  .ant-time-picker-panel-select {
    position: relative;
    float: left;
    width: 56px;
    max-height: 192px;
    overflow: hidden;
    font-size: 14px;
    border-left: 1px solid #e8e8e8;
    @media screen and (max-width: 991px) {
      overflow: scroll;
    }
}
`;
