import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GoStop } from "react-icons/go";

export default function DiscountCode({ status }) {
  return (
    <div className="flex xl:space-x-28 md:space-x-20 space-x-4 space-y-4">
      <div className="flex flex-col xl:space-y-3 space-y-1">
        <div
          className={`xl:w-[3] xl:h-[3] w-[1.5rem] h-[1.5rem] mt-3 flex-shrink-0`}
        >
          {status === "expired" ? (
            <GoStop className="w-full h-full text-red-500" />
          ) : (
            <FiCheckCircle className="w-full h-full text-green-500" />
          )}
        </div>
        <p>{status === "expired" ? "منقضی شده" : "فعال"}</p>
      </div>
      <div>
        <div className="w-[1rem] h-[1rem] opacity-[0.5] bg-[#FFF]"></div>
        <p>C35QYHT6S</p>
      </div>
      <p>انقضا 22/2/1223</p>
      <div>
        <div className="w-[1rem] h-[1rem] opacity-[0.5] bg-[#FFF]"></div>
        <p>
          شرح کد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه سل
        </p>
      </div>
    </div>
  );
}
