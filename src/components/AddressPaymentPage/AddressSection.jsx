import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function AddressSection() {
  const { addressList } = useSelector(({ addressSlice }) => addressSlice);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="MyBasket-container">
      <div className="flex justify-end items-center bg-[#3A3A3A] p-[0.3em]">
        <p className="mybasket-label - text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
          آدرس
        </p>
        <FaSquareFull />
      </div>
      <div className="ItemsInMyBasket - bg-[#2E2E2E] lg:p-1 md:p-1 p-[0.4em] lg:mb-[1.5em] md:mb-[1.5em] mb-[1em]">
        <div className="flex flex-col lg:p-3 md:p-3 p-[0.2em]">
          <div className="flex justify-center items-center border-[2px] border-[#00d5ff]">
            <p className="text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
              افزودن آدرس جدید
            </p>
            <FaSquareFull />
          </div>
          {/* adress 1 */}
          {addressList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                className={`flex-col border-[2px] lg:mt-4 md:mt-3 mt-2 lg:p-2 md:p-2 p-2 ${
                  selectedItem === index
                    ? "text-[#E6E6E6] border-[#00d5ff]"
                    : "text-[#999] border-[#999]"
                }`}
              >
                <div className="flex flex-row-reverse justify-between items-center">
                  <p className=" text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
                    {`${item.firstName} ${item.lastName}`}
                  </p>
                  <div className="flex flex-row-reverse">
                    <p className="text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
                      {item.phoneNumber}
                    </p>
                    <FaSquareFull />
                  </div>
                </div>
                <p className="text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
                  {item.description}
                  <span className="lg:mr-11 md:mr-11 mr-10">
                    <Link
                      to={"/profile"}
                      rel="noopener noreferrer"
                      className=" border-[#E6E6E6] border-b-[1px]"
                    >
                      ویرایش ادرس
                    </Link>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
