import "./sponsorsStyles.css";
import umagLogo from "./assets/Logo Umag_fixued 1.svg";
import zapisLogo from "./assets/Logo Zapis_fixed.svg"

export const Sponsors = () => {
  return (
    <div className="bg-black py-12 w-full overflow-hidden">
      <div className="text-center max-w-screen-lg mx-auto">
        {/* Title */}
        <h2 className="text-[#ff0414] text-4xl font-bold mb-8 uppercase tracking-wider">
          Sponsors
        </h2>

        {/* Sponsors Grid */}
        <div className="flex justify-center flex-wrap gap-8 px-8">
          {/* First Row */}
          <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
            <img src={umagLogo} alt="Umag" />
          </div>
          <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
            <img src={zapisLogo} alt="Zapis" />
          </div>
        </div>
      </div>
    </div>
  );
};
