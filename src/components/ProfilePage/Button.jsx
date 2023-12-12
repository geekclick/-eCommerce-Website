import React from "react";

export default function Button({ onClick, moreClasses, text, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#00D5FF] text-[#2E2E2E] text-center leading-[1.875rem] border-[#00D5FF] hover:border-2 hover:text-white hover:bg-transparent transition-all ${moreClasses}`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
  moreClasses: null,
  type: "button",
};
