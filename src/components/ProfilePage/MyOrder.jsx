import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function MyOrder() {
  return (
    <div className="flex xl:space-x-28 lg:space-x-14 lg:text-lg md:text-base space-x-4 text-[10px]">
      <Link to={"my-orders"}>
        <Button
          text={"جزییات"}
          moreClasses={
            "xl:w-[8rem] xl:h-[2rem] h-[2.6rem] w-[3rem] xl:text-sm text-[10px] h-fit"
          }
        />
      </Link>
      <p>مبلغ سفارش تومان999,999,999</p>
      <p>تاریخ 1402/7/2</p>
      <div className="h-fit md:flex items-end space-x-2">
        <input type="checkbox" name="check" id="check" />
        <p>وضعیت درحال انجام</p>
      </div>
      <p className="md:block hidden">کد سفارش 3112001</p>
    </div>
  );
}
