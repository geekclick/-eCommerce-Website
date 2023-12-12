import React from "react";
import ProductImage from "../../assets/ProfilePageImages/productImage.png";

export default function Order({ noEndLine }) {
  return (
    <div>
      <div className="flex xl:p-8 xl:px-28 w-full justify-between items-center space-x-4 mt-10">
        <div className="flex flex-col items-center space-y-2">
          <div className="xl:w-[2.5rem] xl:h-[2.5rem] w-[1.5rem] h-[1.5rem] border"></div>
          <p className="text-[10px] xl:text-base">تحویل شده</p>
        </div>
        <div className="flex xl:flex-row flex-col-reverse justify-center xl:space-x-2">
          <p className="text-[10px] xl:text-base">نظرت رو بگو</p>
          <div className="xl:w-[2rem] xl:h-[2rem] w-[1rem] h-[1rem] border"></div>
        </div>
        <p className="text-[10px] xl:text-base">999,999,999 تومان</p>
        <div className="flex space-x-3 items-center justify-center w-fit">
          <div className="flex flex-col text-right">
            <h2 className="text-[10px] xl:text-base">Product Name</h2>
            <p className="text-[#999] text-[9px] xl:text-base">
              تعداد <span className="text-white">عدد12</span>
            </p>
            <p className="text-[#999] text-[9px] xl:text-base">
              سایز <span className="text-white">لارج</span>
            </p>
          </div>
          <div className="w-[4rem] h-[4rem]">
            <img className="w-full h-full" src={ProductImage} alt="" />
          </div>
        </div>
      </div>
      {!noEndLine && (
        <div className="w-[90%] h-[0.0625rem]  bg-[#999] m-auto mt-4"></div>
      )}
    </div>
  );
}

Order.defaultProps = {
  noEndLine: false,
};
