import React, { useEffect, useState } from "react";

interface CountUpNumberProps {
  end: number;
  duration?: number; // in ms
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps approx
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
};
export default CountUpNumber;