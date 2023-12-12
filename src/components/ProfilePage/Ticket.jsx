import React from "react";
import Input from "./Input";
import Button from "./Button";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Ticket({ newTicket }) {
  if (!newTicket) {
    return (
      <div className="flex xl:space-x-28 md:space-x-8 md:px-4 space-x-4 xl:text-lg md:text-lg text-[10px] xl:py-4 p-2 items-center">
        <button className="xl:w-[3.4rem] xl:h-[3rem] w-[2rem] h-[2rem]">
          <Link to={"tickets"}>
            <GrFormView className="w-full h-full" />
          </Link>
        </button>
        <div className="h-fit flex items-end space-x-2">
          <input type="checkbox" name="check" id="check" />
          <p>condition is 1=1</p>
        </div>
        <p>تاریخ 1402/7/2</p>
        <p>عنوان عنوان عنوان عنوان عنوان عنوان عنوان</p>
        <p className="md:block hidden">شماره تیکت 3112001</p>
      </div>
    );
  } else {
    return (
      <div>
        <Input placeholder={"بخش"} />
        <Input placeholder={"عنوان"} />
        <textarea cols="30" rows="10" placeholder="توضیحات"></textarea>
        <div>
          <Button />
          <Button />
        </div>
      </div>
    );
  }
}
