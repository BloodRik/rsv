import React from "react";

export default function BtnISO({activeButton, setActiveButton}) {
  return (
    <>
      <button
        className={`border-[1px] border-[#d4d7df] text-[#606981] p-3 hover:text-btnVtb relative right-[1px] rounded-[8px] w-[75px] h-[59px] transition-all duration-300 ${
          activeButton === 2
            ? "border-blue-500 bg-[#ffffff] text-[#30498f] "
            : "border-transparent"
        }`}
        onClick={() => setActiveButton(2)}
      >
        IOS
      </button>
    </>
  );
}
