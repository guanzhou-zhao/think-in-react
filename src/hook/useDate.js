import React, { useState, useEffect } from 'react';

function useDate() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timeoutId = setTimeout(()=>setDate(new Date()), 1000)

    return () => {
      clearTimeout(timeoutId);
    }
  })

  return date

}

export default useDate;
