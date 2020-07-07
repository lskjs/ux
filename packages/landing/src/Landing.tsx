import React, { memo } from 'react';
import PropTypes from 'prop-types';
import reduce from 'lodash/reduce';
import findLast from 'lodash/findLast';

import Header from './slides/Header';
import CustomSlide2 from './slides/CustomSlide2';

interface LandingSlide {
  type: string;
  data: object;
}

interface LandingProps {
  markup: LandingSlide[];
  slides?: (arg0: Slides) => Slides;
  id: string;
}

interface Slides {
  [name: string]: React.ComponentType<any>;
}

interface LandingFC<T> extends React.FC<T> {
  defaultAcceptableSlides: Slides;
}

const Landing: LandingFC<LandingProps> = ({ id, markup, slides }) => {
  let acceptableSlides: Slides | undefined = Landing.defaultAcceptableSlides;
  if (slides && typeof slides === 'function') {
    acceptableSlides = slides(Landing.defaultAcceptableSlides);
  }
  const acceptableSlidesKeys = Object.keys(acceptableSlides || {});
  // console.log({ acceptableSlides, acceptableSlidesKeys });
  if (!(markup && Array.isArray(markup)) || !acceptableSlidesKeys.length) {
    return null;
  }
  const arr = reduce<LandingSlide[], LandingSlide[]>(
    markup,
    (sum, n: LandingSlide) => {
      const sim = findLast(sum, (o) => (o.type ? o.type.includes(n.type) : false));
      if (sim) {
        const { type } = sim;
        const re = /-(\d+)/.exec(type);
        if (Array.isArray(re) && re[1]) {
          const number = re[1];
          // eslint-disable-next-line no-param-reassign
          n.type = `${n.type}-${Number(number) + 1}`;
        }
      } else if (n.type) {
        // eslint-disable-next-line no-param-reassign
        n.type = `${n.type}-1`;
      }
      sum.push(n);
      return sum;
    },
    [],
  );
  return (
    <main id={`landing-${id}`}>
      {arr.map((obj) => {
        const slide = acceptableSlidesKeys.find((key) => obj.type.includes(key));
        if (!slide || !acceptableSlides) return false;
        const Component = acceptableSlides[slide];
        return <Component key={obj.type} {...obj.data} />;
      })}
    </main>
  );
};

Landing.defaultAcceptableSlides = {
  header: Header,
  customSlide2: CustomSlide2,
};

Landing.propTypes = {
  markup: PropTypes.arrayOf<LandingSlide>(Object).isRequired,
  id: PropTypes.string.isRequired,
  slides: PropTypes.func,
};

Landing.defaultProps = {
  slides: undefined,
};

export default memo(Landing, (prevProps, nextProps) => prevProps.id === nextProps.id);
