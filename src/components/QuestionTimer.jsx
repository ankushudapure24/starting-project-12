import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeout }){
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    console.log("SET-TIMEOUT");
    const timer = setTimeout(onTimeout, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeout]);


  useEffect(() => {
    console.log("SET-INTERVAL");
    const intterval = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
      }, 100);

      return () => {
        clearInterval(intterval);
      };
  }, []);

  
  return <progress id="question-time" max={timeOut} value={remainingTime} />;
}   