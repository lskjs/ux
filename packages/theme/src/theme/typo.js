import font from './font';
import { multy } from './utils';

const typo = {
  base: {
    size: multy(font.size.base, 1),
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    height: '1.8',
    spacing: '-0.1px',
  },
  h1: {
    size: multy(font.size.base, 2.5),
  },
  h2: {
    size: multy(font.size.base, 2),
  },
  h3: {
    size: multy(font.size.base, 1.75),
  },
  h4: {
    size: multy(font.size.base, 1.5),
  },
  h5: {
    size: multy(font.size.base, 1.25),
  },
  h6: {
    size: multy(font.size.base, 1),
  },
  d1: {
    size: multy(font.size.base, 6),
  },
  d2: {
    size: multy(font.size.base, 5.5),
  },
  d3: {
    size: multy(font.size.base, 4.5),
  },
  d4: {
    size: multy(font.size.base, 3.5),
  },
  lead: {
    size: multy(font.size.base, 1.25),
  },
};

export default typo;


// $headings-margin-bottom:      $spacer / 2 !default;
// $headings-font-family:        null !default;
// $headings-font-style:         null !default;
// $headings-font-weight:        500 !default;
// $headings-line-height:        1.2 !default;
// $headings-color:              null !default;


// $display1-size:               6rem !default;
// $display2-size:               5.5rem !default;
// $display3-size:               4.5rem !default;
// $display4-size:               3.5rem !default;

// $display1-weight:             300 !default;
// $display2-weight:             300 !default;
// $display3-weight:             300 !default;
// $display4-weight:             300 !default;
// $display-line-height:         $headings-line-height !default;

// $lead-font-weight:            300 !default;

// $small-font-size:             .875em !default;

// $sub-sup-font-size:           .75em !default;

// $text-muted:                  $gray-600 !default;

// $initialism-font-size:        $small-font-size !default;

// $blockquote-small-color:      $gray-600 !default;
// $blockquote-small-font-size:  $small-font-size !default;
// $blockquote-font-size:        $font-size-base * 1.25 !default;

// $hr-color:                    inherit !default;
// $hr-height:                   $border-width !default;
// $hr-opacity:                  .25 !default;

// $legend-margin-bottom:        .5rem !default;
// $legend-font-size:            1.5rem !default;
// $legend-font-weight:          null !default;

// $mark-padding:                .2em !default;

// $dt-font-weight:              $font-weight-bold !default;

// $nested-kbd-font-weight:      $font-weight-bold !default;

// $list-inline-padding:         .5rem !default;

// $mark-bg:                     #fcf8e3 !default;

// $hr-margin-y:                 $spacer !default;
