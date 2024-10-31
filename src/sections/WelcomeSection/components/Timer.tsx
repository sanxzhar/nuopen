import { useEffect, useState } from "react";
import { TimerItem } from "./TimerItem";

export const Timer = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const registrationDeadline = "November, 1, 2024";

  const getTime = (deadline: string) => {
    const leftTime = Date.parse(deadline) - Date.now();

    setDays(Math.floor(leftTime / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((leftTime / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((leftTime / 1000 / 60) % 60));
    setSeconds(Math.floor((leftTime / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(registrationDeadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex md:gap-4 gap-1">
      <TimerItem time={days} />
      <TimerItem time={hours} />
      <TimerItem time={minutes} />
      <TimerItem time={seconds} />
    </div>
  );
};
