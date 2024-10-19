import { FC } from "react";

type TimerItemProps = {
  time: number;
};

export const TimerItem: FC<TimerItemProps> = ({ time }) => {
  const formatedTime = time < 10 ? "0" + time : time;

  return (
    <div
      className="md:px-[7px] md:py-[23px] px-[4px] py-[12px] flex justify-center content-center bg-[#FF0013] text-white font-timer md:text-3xl text-lg"
      style={{
        clipPath:
          "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%)",
      }}
    >
      {formatedTime}
    </div>
  );
};
