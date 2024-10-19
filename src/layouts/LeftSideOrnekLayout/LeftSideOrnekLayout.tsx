import { ReactNode, FC } from "react";

type LeftSideOrnekLayoutProps = {
  children: ReactNode;
};

export const LeftSideOrnekLayout: FC<LeftSideOrnekLayoutProps> = (props) => {
  return (
    <div className="relative">
      <div className="absolute md:left-[10px] md:w-[69px] h-full bg-leftOrnek bg-repeat md:bg-[length:69px_255px] w-[34.5px] bg-[length:34.5px_127.5px] left-[5px]" />
      <div>{props.children}</div>
    </div>
  );
};
