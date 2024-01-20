import BlueIcon from "/src/assets/DigitalPageImages/blue-icon.png";
import React, { useState } from "react";
function DetailBox(props) {
  const [changeColor, setChangeColor] = useState(false);
  function handleClick() {
    setChangeColor(!changeColor);
  }
  const detailButtons = props.gameData.buttons.map((button, index) => (
    <button
      key={index}
      onClick={handleClick}
      className={`detail-button  - block border-[none] bg-[#5e5e5e] text-[#e6e6e6] text-center font-[Inter] text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] not-italic font-normal tracking-[0.10938rem] px-[0.2em] py-[0.8em] cursor-pointer ${
        changeColor &&
        "border-[2.5px] border-[solid] border-[#00d5ff] bg-[rgba(0,_213,_255,_0.06)] text-[#00d5ff]"
      }`}
    >
      {button}
    </button>
  ));
  return (
    <div className="detail-box">
      <div className="detail-label - pr-[0.6em] flex justify-end items-center bg-[#3a3a3a]">
        <h4 className="detail--label - text-[#e6e6e6] text-right text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem] not-italic font-light leading-10 tracking-[0.01875rem] pr-[0.7em]">
          {props.gameData.label}
        </h4>
        <img src={BlueIcon} alt="" className="detail--icon - w-4 h-4" />
      </div>
      <div className="detail-buttons - w-full grid grid-cols-[1fr_1fr_1fr] grid-rows-[auto_auto] gap-[2em] bg-[#2e2e2e] h-full p-[1em] mb-[1em]">
        {detailButtons}
      </div>
    </div>
  );
}
export default DetailBox;
