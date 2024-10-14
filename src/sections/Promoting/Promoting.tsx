import code_box from "./assets/code-box.svg";
import group from "./assets/group.svg";
import timer from "./assets/timer.svg";

export default function Promoting(){
  return (
    <div className="text-white flex flex-col items-center max-h-full p-[80px] gap-[50px]">
      <h1 className="text-4xl md:text-5xl font-formula1 uppercase text-center max-w-[1000px]">
      We Promote Competitive Programming in <span className="text-custom-red">Kazakhstan</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-[20px] lg:h-[240px]">
        <FeatureBox title="Algo and DS Problems" img={code_box}/>
        <FeatureBox title="Five Hours" img={timer}/>
        <FeatureBox title="Team Up to Three People" img={group}/>
      </div>
    </div>
  );
}

const FeatureBox: React.FC<{ title: string, img:string }> = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center gap-[12px] h-full min-w-[300px] max-w-[379px] justify-center bg-dark-blue text-white py-2 px-4 rounded-2xl border-[4px] border-custom-red">
      <img src={img} className="h-[100px]" />
      <p className="text-center font-semibold text-lg md:text-2xl font-bold uppercase">{title}</p>
    </div>
  );
};