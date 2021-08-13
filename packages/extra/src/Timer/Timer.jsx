import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

const Timer = ({ seconds, updateFrequency, children, autoStart, autoReset, restartOnEnded, onEnded }) => {
  const [sec, setSec] = useState(seconds);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const refSec = useRef(sec);
  const refCountdown = useRef();
  refSec.current = sec;

  function handlePause() {
    if (isStarted) {
      clearInterval(refCountdown.current);
      setIsPaused(true);
    }
  }

  function handleReset() {
    setSec(seconds);
  }

  function handleStop() {
    if (isStarted) {
      clearInterval(refCountdown.current);
      if (onEnded) onEnded();
      handleReset();
      setIsStarted(false);
    }
  }

  function handleStart() {
    function setNewSec() {
      setSec((refSec.current - updateFrequency / 1000).toFixed(2));
    }
    if (!isStarted) {
      setIsStarted(true);
    }
    setNewSec();
    refCountdown.current = setInterval(() => {
      setNewSec();
      if (refSec.current <= 0) {
        clearInterval(refCountdown.current);
        setTimeout(() => {
          if (onEnded) onEnded();
          if (autoReset) {
            handleReset();
            setIsStarted(false);
            if (restartOnEnded) {
              handleStart();
            }
          }
        }, updateFrequency);
      }
    }, updateFrequency);
  }

  function handleResume() {
    if (isStarted) {
      setIsPaused(false);
      handleStart();
    }
  }

  useEffect(() => {
    if (seconds && autoStart) handleStart();
    return () => clearInterval(refCountdown.current);
  }, []);

  const percent = ((sec / seconds) * 100).toFixed(2);
  if (children && typeof children !== 'function') {
    return false;
  }
  return (
    <>
      {children({
        handlePause,
        handleResume,
        handleStart,
        handleStop,
        handleReset,
        isPaused,
        isStarted,
        total: seconds,
        current: sec,
        percent,
      })}
    </>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number,
  updateFrequency: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  autoStart: PropTypes.bool,
  autoReset: PropTypes.bool,
  restartOnEnded: PropTypes.bool,
  onEnded: PropTypes.func,
};

Timer.defaultProps = {
  updateFrequency: 1000,
  children: null,
  seconds: null,
  autoStart: false,
  autoReset: false,
  restartOnEnded: false,
  onEnded: null,
};

export default Timer;
