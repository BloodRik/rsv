import React, { useState } from "react";
import TitleInfoAndroid from "./TitleInfoAndroid";

export default function BtnAndroid({ activeButton, setActiveButton }) {
  const [showComponent, setShowComponent] = useState(false);

  const activet = () => {
    setActiveButton(1)
  }

  const handleAddComponent = () => {
    setShowComponent(true);
    setActiveButton(1);
    console.log('fdffdffdf')
  };

  return (
    <>
      <button
        className={`border-[1px] border-[#d4d7df] text-[#606981] p-3 hover:text-btnVtb rounded-[8px] w-[120px] h-[59px] transition-all duration-300 ${
          activeButton === 1
            ? "border-blue-500 bg-[#ffffff] text-[#30498f] "
            : "border-transparent"
        }`}
        onClick={handleAddComponent}
      >
        Android
      </button>

      <div className="absolute top-[100px]">
      {/* {showComponent && <TitleInfoAndroid />} */}
        {/* <button onClick={handleAddComponent}>cLick</button> */}
      </div>
    </>
  );
}
