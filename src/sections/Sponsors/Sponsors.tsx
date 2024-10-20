import "./sponsorsStyles.css";
import umag from "../../../public/umagLogo.webp";
import zapis from "../../../public/zapisLogo.webp";


export const Sponsors = () => {
  return (
    <div className="py-12 w-full overflow-hidden">
      <div className="text-center max-w-screen-lg mx-auto">
        {/* Title */}
        <h2 className="text-[#ff0414] md:text-6xl text-4xl font-bold mb-8 uppercase tracking-wider font-formula1">
          Sponsors
        </h2>

        {/* Sponsors Grid */}
        <div className="flex justify-center flex-wrap gap-8 px-8">
          {/* First Row */}
          <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
            <img src={umag} alt="Umag" />
          </div>
          <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
            <img src={zapis} alt="Zapis" />
          </div>
        </div>
      </div>
    </div>
  );
};
