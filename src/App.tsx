import "./App.css";
import { LeftSideOrnekLayout, SectionOrnekLayout } from "./layouts";
import nuLogo from "./assets/nuLogo.png";
import {
  Sponsors,
  Rules,
  Promoting,
  Agenda,
  OnlineOfflineTable,
  WelcomeSection,
  FAQ,
} from "./sections";
function App() {
  return (
    <LeftSideOrnekLayout>
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
      <div className="relative md:h-[120px] h-[80px]"></div>
      <SectionOrnekLayout isTop={false}>
        <WelcomeSection />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Promoting />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Agenda />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <OnlineOfflineTable />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Sponsors />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Rules />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <FAQ />
      </SectionOrnekLayout>
    </LeftSideOrnekLayout>
  );
}

export default App;
