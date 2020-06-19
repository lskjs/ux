import React from 'react';
import PropTypes from 'prop-types';

import Header from './slides/Header';
import CustomSlide2 from './slides/CustomSlide2';

interface LandingSlide {
  type: string,
  data: any,
};

interface LandingProps {
  markup: LandingSlide[],
  slides?: (arg0: Slides) => Slides,
};

interface Slides {
  [name: string]: React.ComponentType<any>,
}

interface LandingFC<T> extends React.FC<T> {
  defaultAcceptableSlides: Slides,
}

const Landing: LandingFC<LandingProps> = ({ markup, slides }) => {
  let acceptableSlides: Slides | undefined = Landing.defaultAcceptableSlides;
  if (slides && typeof slides === 'function') {
    acceptableSlides = slides(Landing.defaultAcceptableSlides);
  }
  const acceptableSlidesKeys = Object.keys(acceptableSlides || {});
  // console.log({ acceptableSlides, acceptableSlidesKeys });
  if (!(markup && Array.isArray(markup)) || !acceptableSlidesKeys.length) {
    return null;
  }
  return (
    <>
      {markup.map((obj) => {
        const slide = acceptableSlidesKeys.find(key => key === obj.type);
        if (!slide || !acceptableSlides) return false;
        const Component = acceptableSlides[slide];
        return <Component key={obj.type} {...obj.data} />;
      })}
    </>
  );
};

Landing.defaultAcceptableSlides = {
  header: Header,
  customSlide2: CustomSlide2,
};

Landing.propTypes = {
  markup: PropTypes.array.isRequired,
  slides: PropTypes.func,
};

Landing.defaultProps = {
  slides: undefined,
};

export default Landing;
