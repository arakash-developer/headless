import { useEffect, useState } from "react";
const [timeLeft, setTimeLeft] = useState(20);
function CountDown() {
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);
  return timeLeft;
}
export default CountDown;