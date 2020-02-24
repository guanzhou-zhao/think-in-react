import React, { useState, useEffect } from 'react';

function TimerInHook() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timeoutId = setTimeout(()=>setDate(new Date()), 1000)

    return () => {
      clearTimeout(timeoutId);
    }
  })

  return <p>{date.toLocaleTimeString()}</p>

}

export default TimerInHook;
