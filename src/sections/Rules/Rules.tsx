export const Rules = () => {
  const rules = [
    "YOU CAN PARTICIPATE IN A TEAM OF UP TO THREE PEOPLE, OR INDIVIDUALLY.",
    "YOU SHOULD REGISTER YOUR TEAM AND PARTICIPATE OFFLINE TO BE ELIGIBLE FOR THE PRIZE",
    "ONLY ONE LAPTOP IS ALLOWED PER TEAM! WE DO NOT PROVIDE LAPTOPS.",
    "YOU CAN BRING YOUR SUPERVISOR TO THE EVENT (IN THAT CASE PLEASE WRITE TO ACMSC@NU.EDU.KZ), BUT HE/SHE IS NOT ALLOWED TO HELP YOU DURING THE CONTEST.",
    "YOU ARE PROHIBITED TO USE CHATGPT, STACKOVERFLOW, AND ANY OTHER INTERNET RESOURCES OR WEB-SITES RATHER THAN CODEFORCES.",
  ];

  return (
    <div id="rules" className="py-12 w-full">
      <div className="text-center max-w-[1200px] mx-auto">
        <h2 className="text-[#ff0414] md:text-6xl text-4xl font-bold mb-8 uppercase tracking-wider font-formula1">
          Rules
        </h2>
        <div className="flex flex-col gap-6 md:mx-[80px] mx-[50px]">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex text-white p-0 border border-[#ff0414] text-sm"
              style={{
                backgroundColor: "#000051",
                borderTopLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
              }}
            >
              <div
                className="bg-[#ff0414] text-[#000051] font-bold px-4 py-1"
                style={{
                  borderTopLeftRadius: "1rem", // Round only top-left corner
                  borderBottomLeftRadius: "0", // Remove bottom-left rounding
                }}
              >
                <div className="h-full w-full flex justify-center items-center text-3xl font-formula1">
                  {index + 1}
                </div>
              </div>
              <div className="px-4 py-6 text-justify font-ubuntu">{rule}</div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
