/* eslint-disable react/prop-types */
import React from 'react';
import Timer from './Timer';

const renderContent = ({ updateFrequency = 1000 } = { updateFrequency: 1000 }) => ({
  isPaused,
  isStarted,
  handleStart,
  handlePause,
  handleStop,
  handleResume,
  handleReset,
  current,
  percent,
  total,
}) => (
  <div className="App">
    <div>{`updateFrequency: ${updateFrequency}ms`}</div>
    <div>{`total: ${total}s`}</div>
    <div>{`current: ${current}s`}</div>
    <div>{`percent: ${percent}%`}</div>
    <div>{`isPaused: ${String(isPaused)}`}</div>
    <div>{`isStarted: ${String(isStarted)}`}</div>
    <button type="button" onClick={handleStart}>
      Start
    </button>
    <button type="button" onClick={handleStop}>
      Stop
    </button>
    <button type="button" onClick={handleReset}>
      Reset
    </button>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div
        style={{
          width: 16,
          height: 300,
          background: 'lightgray',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            height: `${percent}%`,
            background: 'gray',
            position: 'absolute',
            bottom: 0,
            transition: `height ${updateFrequency}ms linear`,
            willChange: 'height',
          }}
        />
      </div>
      <div
        style={{
          width: 100,
          height: 100,
          background: isPaused ? 'gray' : 'lightgray',
          margin: '0 0 0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: 'default',
        }}
        onFocus={() => {
          if (!isPaused) handlePause();
        }}
        onMouseOver={() => {
          if (!isPaused) handlePause();
        }}
        onBlur={() => {
          if (isPaused) handleResume();
        }}
        onMouseOut={() => {
          if (isPaused) handleResume();
        }}
      >
        Наведи для паузы
      </div>
    </div>
  </div>
);

export default ({ storiesOf }) =>
  storiesOf('extra/Timer', module)
    .add('default', () => {
      return <Timer seconds={10}>{renderContent()}</Timer>;
    })
    .add('custom seconds', () => {
      return <Timer seconds={60}>{renderContent()}</Timer>;
    })
    .add('custom frequency', () => {
      return (
        <Timer seconds={10} updateFrequency={100}>
          {renderContent({ updateFrequency: 100 })}
        </Timer>
      );
    })
    .add('autoStart', () => {
      return (
        <Timer autoStart seconds={10}>
          {renderContent()}
        </Timer>
      );
    })
    .add('autoReset', () => {
      return (
        <Timer autoReset seconds={10}>
          {renderContent()}
        </Timer>
      );
    })
    .add('autoReset & restartOnEnded', () => {
      return (
        <Timer autoReset restartOnEnded seconds={10}>
          {renderContent()}
        </Timer>
      );
    })
    .add('autoStart & onEnded', () => {
      return (
        <Timer autoStart seconds={5} onEnded={() => alert('ended')}>
          {renderContent()}
        </Timer>
      );
    });
