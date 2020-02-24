import React from 'react';
import useDate from './useDate';

function TimerInCustomizedHook() {
  const date = useDate();

  return <p>{date.toLocaleTimeString()} <br/>Time showed with custom Hook</p>
}

export default TimerInCustomizedHook;
