import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Gozine 1", "Gozine 2"];

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (item) => {
    // Do something with the selected item
    setIsOpen(false);
  };

  return (
    <ul className="dropdown">
      <button
        type="button"
        onClick={handleDropdownClick}
        className="border w-[70%]"
      >
        <span>Gozine 1</span>
        <span>&gt;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-items">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleDropdownItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </ul>
  );
};

export default Dropdown;
