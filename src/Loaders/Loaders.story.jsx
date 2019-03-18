import React from 'react';
import Story from '../Story';
import { Row, Col } from '../Grid';

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
import Box from '../UI/molecules/Box';

// const Box = ({ children }) => <div style={{ border: '1px black dotted', width: 100, height: 100 }}>{children}</div>;
const Name = 'div';
const color = '#1890ff';
const styles = {
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 0,
  height: 200,
  alignItems: 'center',
  justifyContent: 'center',
};
export default ({ storiesOf }) => (
  storiesOf('Loaders', module)
    .add('default', () => (
      <Story>
        <Row>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <LineSpin color={color} />
              </div>
            </Box>
            <Name>
              {'<LineSpin />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <ScaleRipple color={color} type="rapid" />
              </div>
            </Box>
            <Name>
              {'<ScaleRipple type="rapid" />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <ScaleRippleMulti color={color} />
              </div>
            </Box>
            <Name>
              {'<ScaleRippleMulti />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <LineScaleRandom color={color} />
              </div>
            </Box>
            <Name>
              {'<LineScaleRandom />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <LineScale color={color} />
              </div>
            </Box>
            <Name>
              {'<LineScale />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <LinePulseOut color={color} type="default" />
              </div>
            </Box>
            <Name>
              {'<LinePulseOut type="default" />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <LinePulseOut color={color} type="rapid" />
              </div>
            </Box>
            <Name>
              {'<LinePulseOut type="rapid" />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallsZigZagDeflect color={color} />
              </div>
            </Box>
            <Name>
              {'<BallsZigZagDeflect />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallsZigZag color={color} />
              </div>
            </Box>
            <Name>
              {'<BallsZigZag />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallsTriangleTrace color={color} />
              </div>
            </Box>
            <Name>
              {'<BallsTriangleTrace />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallSpin color={color} />
              </div>
            </Box>
            <Name>
              {'<BallSpin />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallScaleRandom color={color} />
              </div>
            </Box>
            <Name>
              {'<BallScaleRandom />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallScaleMulti color={color} />
              </div>
            </Box>
            <Name>
              {'<BallScaleMulti />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallScale color={color} />
              </div>
            </Box>
            <Name>
              {'<BallScale />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallRotate color={color} />
              </div>
            </Box>
            <Name>
              {'<BallRotate />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallPulseSync color={color} />
              </div>
            </Box>
            <Name>
              {'<BallPulseSync />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallPulseRise color={color} />
              </div>
            </Box>
            <Name>
              {'<BallPulseRise />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallPulse color={color} />
              </div>
            </Box>
            <Name>
              {'<BallPulse />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallGridPulse color={color} />
              </div>
            </Box>
            <Name>
              {'<BallGridPulse />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallGridPulse color={color} type="beat" />
              </div>
            </Box>
            <Name>
              {'<BallGridPulse type="beat" />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallClipRotatePulse color={color} />
              </div>
            </Box>
            <Name>
              {'<BallClipRotatePulse />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallClipRotateMultiple color={color} />
              </div>
            </Box>
            <Name>
              {'<BallClipRotateMultiple />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallClipRotate color={color} />
              </div>
            </Box>
            <Name>
              {'<BallClipRotate />'}
            </Name>
          </Col>
          <Col md={2}>
            <Box>
              <div style={styles}>
                <BallBeat color={color} />
              </div>
            </Box>
            <Name>
              {'<BallBeat />'}
            </Name>
          </Col>
        </Row>
      </Story>
    ))
);
