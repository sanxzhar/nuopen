export const Sponsors = () => {
    return (
      <div className="bg-black py-12 w-full overflow-hidden">
        <div className="text-center max-w-screen-lg mx-auto">
          {/* Title */}
          <h2 className="text-red-500 text-4xl font-bold mb-8 uppercase tracking-wider">Sponsors</h2>
  
          {/* Sponsors Grid */}
          <div className="flex justify-center flex-wrap gap-8 px-8">
            {/* First Row */}
            <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
              <img src="/path/to/umag-logo.png" alt="Umag" />
            </div>
            <div className=" p-4 sponsor-box flex justify-center items-center text-white font-bold">
              <img src="/path/to/zapis-logo.png" alt="Zapis" />
            </div>
            <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
              <img src="/path/to/bts-digital-logo.png" alt="BTS Digital" />
            </div>
            <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
              <img src="/path/to/meta-logo.png" alt="Meta" />
            </div>
  
            {/* Second Row */}
            <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
              <img src="/path/to/acm-logo.png" alt="ACM Chapter" />
            </div>
            <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
              <img src="/path/to/redbull-logo.png" alt="RedBull" />
            </div>
            <div className="p-4 sponsor-box flex justify-center items-center text-white font-bold">
              <img src="/path/to/tassay-logo.png" alt="Tassay" />
            </div>
          </div>
        </div>
      </div>
    );
  };