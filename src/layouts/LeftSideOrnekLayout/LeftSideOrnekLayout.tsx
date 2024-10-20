import { ReactNode, FC } from "react";
import nuLogo from "../../assets/nuLogo.png";

type LeftSideOrnekLayoutProps = {
  children: ReactNode;
};

export const LeftSideOrnekLayout: FC<LeftSideOrnekLayoutProps> = (props) => {
  return (
    <div className="relative">
      <div className="absolute md:left-[10px] md:w-[69px] h-full bg-leftOrnek bg-repeat md:bg-[length:69px_255px] w-[34.5px] bg-[length:34.5px_127.5px] left-[5px] z-[-1]]" />
      <div className="top-[25px] fixed w-full flex z-[2] justify-center content-center px-[20px]">
        <div className=" w-full max-w-[1400px] bg-[#15151F] md:px-[105px] px-[30px] py-[15px] rounded-[15px] flex items-center justify-between	">
          <img className="w-[60px] md:w-[120px]" src={nuLogo} />
          <div className=" text-white font-ubuntu text-2xl gap-6 md:flex hidden">
            <a href="#about">
              <div>About</div>
            </a>
            <div>|</div>
            <a href="#agenda">
              <div>Agenda</div>
            </a>
            <div>|</div>
            <a href="#rules">
              <div>Rules</div>
            </a>
          </div>

          <a href="https://registration.nuacm.kz/">
            <button className="font-ubuntu md:text-xl text-base md:px-10 md:py-5 bg-[#FF0013] text-white md:rounded-[15px] rounded-[5px] px-4 py-2 font-bold uppercase">
              Register
            </button>
          </a>
        </div>
      </div>
      <div className="md:mt-[80px] mt-[100px]">{props.children}</div>
    </div>
  );
};
