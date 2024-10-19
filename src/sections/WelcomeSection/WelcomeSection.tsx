import { Timer } from "./components/Timer";
import baigeImg from "./assets/baige.webp";
import ornekImg from "./assets/ornek.webp";

export const WelcomeSection = () => {
  return (
    <div className="w-full md:p-[80px] p-[50px] h-full flex justify-center items-center flex-col">
      <div className="text-white max-h-full max-w-[1200px] w-full relative">
        <img
          className="absolute md:right-0 z-[-1] md:top-0 top-16 right-[-40px] "
          width="900px"
          src={baigeImg}
        />
        <h1 className="font-formula1 md:text-8xl text-[56px]">
          2024 <br /> NUOPEN
        </h1>
        <div className="font-ubuntu md:text-xl text-[15px] uppercase md:mt-8 md:mb-11 mt-5 mb-5 ">
          Fifth ICPC styled programming Competition by NU ACM sc{" "}
          <br className="md:block hidden" /> sponsored by{" "}
          <span className="text-custom-red">UMAG, ZAPIS</span>
        </div>
        <Timer />
        <button className="font-ubuntu text-xl px-10 py-5 bg-[#FF0013] rounded-[15px] font-bold uppercase md:mt-11 mt-[18px]">
          Register
        </button>
      </div>
      <img
        className="md:mt-[70px] mt-[155px] md:w-[100px] w-[50px]"
        src={ornekImg}
      />
    </div>
  );
};
