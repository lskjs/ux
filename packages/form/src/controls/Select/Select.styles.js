import { css } from '@emotion/core';

const globalStyles = css`
  .lsk-form-select .react-select__control.react-select__control--is-focused {
    border: solid 1px var(--colors-primary, #7070ff) !important;
    box-shadow: none !important;
  }

  .lsk-form-select .react-select__control {
    border-radius: 3px;
    background-color: var(--colors-white, #fff);
    border: solid 1px var(--colors-border, #e3e3e3);
    color: var(--colors-main, #4a4a4a);
    font-family: 'Gotham Pro', Helvetica, Arial;
    font-size: 13px;
    line-height: 1.43;
    text-align: left;
    padding: 3px 6px 3px 3px;
    outline: none;
    cursor: pointer;
  }

  .lsk-form-select .react-select__placeholder,
  .lsk-form-select .react-select__value {
    line-height: 46px !important;
  }

  .lsk-form-select .react-select__value .react-select__value-label {
    font-size: 13px;
    line-height: 1.43;
    text-align: left;
    color: var(--colors-main, #4a4a4a);
    font-family: 'Gotham Pro', Helvetica, Arial;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .lsk-form-select .react-select__indicator-separator {
    display: none !important;
  }

  .lsk-form-select .Select-arrow {
    border-color: rgb(112, 112, 255) transparent transparent !important;
  }

  .lsk-form-select.is-open .Select-arrow {
    border-color: transparent transparent rgb(112, 112, 255) !important;
  }

  .lsk-form-select .Select-arrow-zone {
    padding: 0 !important;
  }

  .lsk-form-select .react-select__menu {
    margin: 0 !important;
    overflow: hidden;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24) !important;
  }

  .lsk-form-select .react-select__option {
    padding: 13px 12px !important;
    font-size: 14px !important;
    line-height: 1.43 !important;
    font-family: 'Gotham Pro', Helvetica, Arial;
  }

  .lsk-form-select .react-select__option.react-select__option--is-focused {
    background-color: var(--colors-lightPrimary, #eff4fa) !important;
    color: var(--colors-main, #4a4a4a) !important;
  }

  .lsk-form-select .react-select__option.react-select__option--is-selected {
    background-color: var(--colors-lighterPrimary, #f0f0ff) !important;
    color: var(--colors-primary, #7070ff) !important;
  }

  .lsk-form-select.react-select__control--is-focused > .react-select__control {
    border-color: var(--colors-border, #B3B3B3);
    box-shadow: none !important;
  }

  .lsk-form-select.has-error .react-select__control {
    border-color: var(--colors-danger, #da4c5a) !important;
    color: var(--colors-danger, #da4c5a) !important;
  }

  .lsk-form-select.has-error .react-select__control {
    border-color: var(--colors-danger, #da4c5a) !important;
  }

  .lsk-form-select .react-select__clear {
    font-size: 22px !important;
  }

  .lsk-form-select .react-select__control--is-disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

export default globalStyles;
