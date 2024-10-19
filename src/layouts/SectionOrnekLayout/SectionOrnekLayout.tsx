import { FC, ReactNode } from "react";

import SectionOrnek from "./assets/SectionOrnek.webp";

type SectionOrnekLayoutProps = {
  children: ReactNode;
};

export const SectionOrnekLayout: FC<SectionOrnekLayoutProps> = (props) => {
  return (
    <div className="relative">
      <img
        src={SectionOrnek}
        className="absolute right-[10px] bottom-[10px] md:w-[110px] md:h-[110px] w-[55px] h-[55px] z-[-1]"
      />
      <div>{props.children}</div>
      <img
        src={SectionOrnek}
        className="absolute right-[10px] top-[10px] rotate-[270deg] md:w-[110px] md:h-[110px] w-[55px] h-[55px] z-[-1]"
      />
    </div>
  );
};
