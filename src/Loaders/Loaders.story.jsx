import React from 'react';
import Story from '../Story';
import ScaleRippleMulti from './ScaleRippleMulti';
import ScaleRipple from './ScaleRipple';
import LineSpin from './LineSpin';
import LineScaleRandom from './LineScaleRandom';
import LineScale from './LineScale';
import LinePulseOut from './LinePulseOut';
import BallsZigZagDeflect from './BallsZigZagDeflect';
import BallsZigZag from './BallsZigZag';
import BallsTriangleTrace from './BallsTriangleTrace';
import BallSpin from './BallSpin';
import BallScaleRandom from './BallScaleRandom';
import BallScaleMulti from './BallScaleMulti';
import BallScale from './BallScale';
import BallRotate from './BallRotate';
import BallPulseSync from './BallPulseSync';
import BallPulseRise from './BallPulseRise';
import BallPulse from './BallPulse';
import BallGridPulse from './BallGridPulse';
import BallClipRotatePulse from './BallClipRotatePulse';
import BallClipRotateMultiple from './BallClipRotateMultiple';
import BallClipRotate from './BallClipRotate';
import BallBeat from './BallBeat';


export default ({ storiesOf }) => (
  storiesOf('hz/Loaders', module)
    .add('Default', () => (
      <Story>
        <LineSpin color="#fff" />
      </Story>
    ))
    .add('ScaleRipple', () => (
      <Story>
        <ScaleRipple color="#fff" type="rapid" />
      </Story>
    ))
    .add('ScaleRippleMulti', () => (
      <Story>
        <ScaleRippleMulti color="#fff" />
      </Story>
    ))
    .add('LineScaleRandom', () => (
      <Story>
        <LineScaleRandom color="#fff" />
      </Story>
    ))
    .add('LineScale', () => (
      <Story>
        <LineScale color="#fff" />
      </Story>
    ))
    .add('LinePulseOut', () => (
      <Story>
        <div style={{ padding: 30 }}>
          <LinePulseOut color="#fff" type="default" />
        </div>
        <div style={{ padding: 30 }}>
          <LinePulseOut color="#fff" type="rapid" />
        </div>
      </Story>
    ))
    .add('BallsZigZagDeflect', () => (
      <Story>
        <BallsZigZagDeflect color="#fff" />
      </Story>
    ))
    .add('BallsZigZag', () => (
      <Story>
        <BallsZigZag color="#fff" />
      </Story>
    ))
    .add('BallsTriangleTrace', () => (
      <Story>
        <BallsTriangleTrace color="#fff" />
      </Story>
    ))
    .add('BallSpin', () => (
      <Story>
        <BallSpin color="#fff" />
      </Story>
    ))
    .add('BallScaleRandom', () => (
      <Story>
        <BallScaleRandom color="#fff" />
      </Story>
    ))
    .add('BallScaleMulti', () => (
      <Story>
        <BallScaleMulti color="#fff" />
      </Story>
    ))
    .add('BallScale', () => (
      <Story>
        <BallScale color="#fff" />
      </Story>
    ))
    .add('BallRotate', () => (
      <Story>
        <BallRotate color="#fff" />
      </Story>
    ))
    .add('BallPulseSync', () => (
      <Story>
        <BallPulseSync color="#fff" />
      </Story>
    ))
    .add('BallPulseRise', () => (
      <Story>
        <BallPulseRise color="#fff" />
      </Story>
    ))
    .add('BallPulse', () => (
      <Story>
        <BallPulse color="#fff" />
      </Story>
    ))
    .add('BallGridPulse', () => (
      <Story>
        <div style={{ padding: 30 }}>
          <BallGridPulse color="#fff" />
        </div>
        <div style={{ padding: 30 }}>
          <BallGridPulse color="#fff" type="beat" />
        </div>
      </Story>
    ))
    .add('BallClipRotatePulse', () => (
      <Story>
        <BallClipRotatePulse color="#fff" />
      </Story>
    ))
    .add('BallClipRotateMultiple', () => (
      <Story>
        <BallClipRotateMultiple color="#fff" />
      </Story>
    ))
    .add('BallClipRotate', () => (
      <Story>
        <BallClipRotate color="#fff" />
      </Story>
    ))
    .add('BallBeat', () => (
      <Story>
        <BallBeat color="#fff" />
      </Story>
    ))
);
