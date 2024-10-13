import { FC, ReactNode } from "react";

import SectionOrnek from "./assets/SectionOrnek.webp";

type SectionOrnekLayoutProps = {
  children: ReactNode;
};

export const SectionOrnekLayout: FC<SectionOrnekLayoutProps> = (props) => {
  return (
    <div className="relative">
      <img
        width={110}
        height={110}
        src={SectionOrnek}
        className="absolute right-[10px] bottom-[10px]"
      />
      <div>{props.children}</div>
      <img
        width={110}
        height={110}
        src={SectionOrnek}
        className="absolute right-[10px] top-[10px] rotate-[270deg]"
      />
    </div>
  );
};
