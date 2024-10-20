export const Rules = () => {
  const rules = [
    "YOU CAN PARTICIPATE IN A TEAM OF UP TO THREE PEOPLE, OR INDIVIDUALLY.",
    "YOU SHOULD REGISTER YOUR TEAM AND PARTICIPATE OFFLINE TO BE ELIGIBLE FOR THE PRIZE",
    "ONLY ONE LAPTOP IS ALLOWED PER TEAM! WE DO NOT PROVIDE LAPTOPS.",
    "YOU CAN BRING YOUR SUPERVISOR TO THE EVENT (IN THAT CASE PLEASE WRITE TO ACMSC@NU.EDU.KZ), BUT HE/SHE IS NOT ALLOWED TO HELP YOU DURING THE CONTEST.",
    "YOU ARE PROHIBITED TO USE CHATGPT, STACKOVERFLOW, AND ANY OTHER INTERNET RESOURCES OR WEB-SITES RATHER THAN CODEFORCES."
  ];

  return (
    <div className="py-12 w-full">
      <div className="text-center max-w-screen-lg mx-auto">
        <h2 className="text-[#ff0414] text-4xl font-bold mb-8 uppercase tracking-wider">Rules</h2>
        <div className="flex flex-col gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-center text-white p-0 border border-[#ff0414] text-sm"
              style={{
                backgroundColor: '#000051',
                borderTopLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
                height: '4rem',  // Ensure the container's height matches the content
              }}
            >
              <div
                className="bg-[#ff0414] text-[#000051] font-bold px-4 py-1 text-2xl flex items-center justify-center"
                style={{
                  borderTopLeftRadius: '1rem',  // Round only top-left corner
                  borderBottomLeftRadius: '0',   // Remove bottom-left rounding
                  minWidth: '4rem',              // Adjust the width of the number box
                  height: '100%',                // Make the red box fill the height of the parent container
                  display: 'flex',               // Align text vertically in the center
                  alignItems: 'center',
                }}
              >
                {index + 1}
              </div>
              <div className="px-4 py-6 text-justify">{rule}</div> {/* Adjust left padding for spacing */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};