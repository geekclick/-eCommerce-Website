import { useState } from "react";
import { FaSquareFull } from "react-icons/fa";
import Image1 from "/src/assets/PaymentSection/1.png";
import Image2 from "/src/assets/PaymentSection/2.png";
import Image3 from "/src/assets/PaymentSection/3.png";
import Image4 from "/src/assets/PaymentSection/4.png";

let PaymentSectionData = [
  {
    src: Image1,
    alt: "/",
    link: "",
  },
  {
    src: Image2,
    alt: "/",
    link: "",
  },
  {
    src: Image3,
    alt: "/",
    link: "",
  },
  {
    src: Image4,
    alt: "/",
    link: "",
  },
];

export default function PaymentSection() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="MyBasket-container">
      <div className="flex justify-end items-center bg-[#3A3A3A] p-[0.3em]">
        <p className="mybasket-label - text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
          درگاه پرداخت
        </p>
        <FaSquareFull />
      </div>
      <div className="ItemsInMyBasket  bg-[#2E2E2E] p-[1em] mb-[1.5em]">
        <div className="flex justify-between">
          {PaymentSectionData.map((img, index) => {
            return (
              <img
                src={img.src}
                alt=""
                key={index}
                onClick={() => handleItemClick(index)}
                className={`w-9 md:w-20 lg:w-32 ${
                  selectedItem === index
                    ? "border-4 border-[#00d5ff]"
                    : "border-0"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
