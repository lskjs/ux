/* eslint-disable react/jsx-wrap-multilines */
import { ClassNames } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import NavigateNextIcon from '../icons/NavigateNextIcon';
import NavigatePrevIcon from '../icons/NavigatePrevIcon';
import nativeStyles from './Paginator.styles';

const Paginator = ({
  pageCount,
  onChange,
  initialPage,
  nextLabel,
  prevLabel,
  outerStyle,
  marginPagesDisplayed,
  pageRangeDisplayed,
  breakLabel,
  nextTitle,
  prevTitle,
  mobileNextTitle,
  mobilePrevTitle,
  showLessPages,
  customStyles,
  ...props
}) => {
  const [active, setActive] = useState(initialPage);
  const styles = customStyles || nativeStyles;
  let total = pageCount;
  if (showLessPages && total <= pageCount) {
    total = active + pageRangeDisplayed - 1;
  }
  if (active < 2 && pageCount > pageRangeDisplayed) {
    total = 5;
  }
  if (pageCount < 5) {
    total = pageCount;
  }
  const {
    containerStyle,
    pageStyle,
    activeStyle,
    breakStyle,
    disabledStyle,
    wrapperStyle,
    nextStyle,
    prevStyle,
    nextDesktopTitleStyle,
    prevDesktopTitleStyle,
    nextMobileTitleStyle,
    prevMobileTitleStyle,
  } = styles;
  return (
    <ClassNames>
      {({ css }) => (
        <div className={css(wrapperStyle)} style={{ ...outerStyle }}>
          <ReactPaginate
            pageCount={total <= pageCount ? total : pageCount}
            containerClassName={css(containerStyle)}
            pageLinkClassName={css(pageStyle)}
            activeLinkClassName={css(activeStyle)}
            breakClassName={css(breakStyle)}
            disabledClassName={css(disabledStyle)}
            breakLabel={breakLabel}
            initialPage={initialPage}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            nextLabel={
              nextLabel || (
                <div className={css(nextStyle)}>
                  <div className={css(nextDesktopTitleStyle)}>
                    {nextTitle}
                    <NavigateNextIcon style={{ marginLeft: 14, marginTop: 2 }} />
                  </div>
                  <div className={css(nextMobileTitleStyle)}>{mobileNextTitle}</div>
                </div>
              )
            }
            previousLabel={
              prevLabel || (
                <div className={css(prevStyle)}>
                  <div className={css(prevDesktopTitleStyle)}>
                    <NavigatePrevIcon style={{ marginRight: 14, marginTop: 2 }} />
                    {prevTitle}
                  </div>
                  <div className={css(prevMobileTitleStyle)}>{mobilePrevTitle}</div>
                </div>
              )
            }
            onPageChange={({ selected }) => {
              if (onChange) {
                onChange({ selected });
              }
              setActive(selected);
            }}
            {...props}
          />
        </div>
      )}
    </ClassNames>
  );
};

Paginator.propTypes = {
  pageCount: PropTypes.number,
  onChange: PropTypes.func,
  initialPage: PropTypes.number,
  nextLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  prevLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  outerStyle: PropTypes.objectOf(Object),
  customStyles: PropTypes.objectOf(Object),
  marginPagesDisplayed: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  breakLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  nextTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  prevTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  mobilePrevTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  mobileNextTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showLessPages: PropTypes.bool,
};
Paginator.defaultProps = {
  pageCount: 0,
  onChange: null,
  initialPage: 0,
  nextLabel: null,
  prevLabel: null,
  outerStyle: null,
  customStyles: null,
  marginPagesDisplayed: 1,
  pageRangeDisplayed: 2,
  breakLabel: '•••',
  nextTitle: null,
  prevTitle: null,
  mobilePrevTitle: null,
  mobileNextTitle: null,
  showLessPages: false,
};

export default Paginator;
