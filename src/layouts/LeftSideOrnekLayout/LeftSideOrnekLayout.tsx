import { ReactNode, FC } from "react";

type LeftSideOrnekLayoutProps = {
  children: ReactNode;
};

export const LeftSideOrnekLayout: FC<LeftSideOrnekLayoutProps> = (props) => {
  return (
    <div className="w-full h-full">
      <div className="absolute left-[10px] w-[69px] h-full bg-leftOrnek bg-repeat bg-[length:69px_255px]" />
      <div>{props.children}</div>
    </div>
  );
};
