import { ReactNode, FC } from "react";

import ornek from './assets/leftOrnek.webp'

type LeftSideOrnekLayoutProps = {
  children: ReactNode;
};

export const LeftSideOrnekLayout: FC<LeftSideOrnekLayoutProps> = (props) => {
  return (
    <div className="w-full h-full">
      <div className=" absolute"><img width="69px" height="255px" src={ornek} /></div>
      <div>{props.children}</div>
    </div>
  );
};
