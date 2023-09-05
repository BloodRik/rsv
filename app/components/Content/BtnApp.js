"use client";

import { useState } from "react";
import TitleInfoAndroid from "./TitleInfoAndroid";
import TitleInfoISO from "./TitleInfoISO";
import TitleInfoRuSdesk from "./TitleInfoRuSdesk";

function BtnApp() {
  const [activeButton, setActiveButton] = useState(null); // Изменено: начальное значение null
  const [showComponent, setShowComponent] = useState(true);
  const [showComponentSupport, setShowComponentSupport] = useState(false);
  const [showComponentANDROED, setShowComponentANDROED] = useState(false);

  const handleAddComponent = () => {
    setActiveButton(1);
    setShowComponent(true);
    setShowComponentANDROED(false); // Изменено: скрываем другие компоненты
    setShowComponentSupport(false);
  };

  const handleAddComponentTWO = () => {
    setActiveButton(2);
    setShowComponentANDROED(true);
    setShowComponent(false); // Изменено: скрываем другие компоненты
    setShowComponentSupport(false);
  };

  const handleAddComponentTre = () => {
    setActiveButton(3);
    setShowComponentSupport(true);
    setShowComponent(false); // Изменено: скрываем другие компоненты
    setShowComponentANDROED(false);
  };

  return (
    <div className="flex items-center justify-center mt-[-20px]">
      <div className="button-container">
        <button
          className={`border-[1px] border-[#d4d7df] text-[#606981] p-3 hover:text-btnVtb rounded-[8px] w-[120px] h-[59px] transition-all duration-300 ${
            activeButton === 1
              ? "border-blue-500 bg-[#ffffff] text-[#30498f]"
              : "border-transparent"
          }`}
          onClick={handleAddComponent}
        >
          Android
        </button>
        <button
          className={`border-[1px] border-[#d4d7df] text-[#606981] p-3 hover:text-btnVtb relative right-[1px] rounded-[8px] w-[75px] h-[59px] transition-all duration-300 ${
            activeButton === 2
              ? "border-blue-500 bg-[#ffffff] text-[#30498f]"
              : "border-transparent"
          }`}
          onClick={handleAddComponentTWO}
        >
          IOS
        </button>
        <div
          className={`border-highlight  rounded-[8px] ${
            activeButton === 2 ? "right" : "left"
          }`}
        />
      </div>
      <button
        onClick={handleAddComponentTre}
        className={`border absolute top-[424px] mt-[-18px] text-[#606981] border-[#d4d7df]  hover:text-btnVtb left-[400px] rounded-[8px] w-[150px] h-[59px]
        active:bg-violet-700 focus:outline-none focus:ring focus:ring-border_blue focus:bg-white`}
      >
        Поддержка ВТБ
      </button>
      <div className="absolute top-[540px]">
        {showComponent && <TitleInfoAndroid />}
        {showComponentANDROED && <TitleInfoISO />}
        {showComponentSupport && <TitleInfoRuSdesk />}
      </div>
      {/* <div className="border-b-[1px] absolute top-[650px] w-[100%] text-lineVtb "></div> */}

    </div>
  );
}

export default BtnApp;
