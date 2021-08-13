import findLast from 'lodash/findLast';
import reduce from 'lodash/reduce';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

interface LandingSlide {
  type: string;
  data: Record<string, unknown>;
}

interface LandingProps {
  markup: LandingSlide[];
  id: string;
  [type: string]: any;
}

interface Slides {
  [name: string]: any;
}

interface LandingFC<T> extends React.FC<T> {
  defaultAcceptableSlides: Slides;
}

const Landing: LandingFC<LandingProps> = ({ id, markup, slides }) => {
  const [page, setPage] = useState(id);
  useEffect(() => {
    setPage(id);
  }, [id]);
  let acceptableSlides: Slides | undefined = Landing.defaultAcceptableSlides;
  if (slides) {
    if (typeof slides === 'function') {
      acceptableSlides = slides(Landing.defaultAcceptableSlides);
    } else {
      acceptableSlides = slides;
    }
  }
  const acceptableSlidesKeys = Object.keys(acceptableSlides || {});
  // console.log({ acceptableSlides, acceptableSlidesKeys });
  if (!(markup && Array.isArray(markup))) {
    console.log('Landing: markup is empty'); // eslint-disable-line no-console
    return null;
  }
  if (!acceptableSlidesKeys.length) {
    console.log('Landing: slides is empty'); // eslint-disable-line no-console
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
    <main id={`landing-${page}`}>
      {arr.map((obj) => {
        const slide = acceptableSlidesKeys.find((key) => obj.type.includes(key));
        if (!slide || !acceptableSlides) return false;
        const Component = acceptableSlides[slide];
        return <Component key={obj.type} {...obj.data} />;
      })}
    </main>
  );
};

Landing.defaultAcceptableSlides = {};

Landing.propTypes = {
  markup: PropTypes.arrayOf<LandingSlide>(Object).isRequired,
  id: PropTypes.string.isRequired,
  slides: PropTypes.func,
};

Landing.defaultProps = {
  slides: undefined,
};

export default Landing;
