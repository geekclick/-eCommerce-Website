import React from "react";

export default function BillBox({
  firstCell,
  secondCell,
  thirdCell,
  fourthCell,
  fifthCell,
}) {
  return (
    <div className="border p-4 h-fit border-[#999] border-opacity-60 pb-8">
      {firstCell}
      <div className="xl:w-[33.625rem] xl:h-[20.9375rem] w-[90%] h-[10rem] flex flex-col items-center justify-evenly">
        <div className="w-full h-[0.0625rem] bg-[#999] m-auto bg-opacity-40">
          {secondCell}
        </div>
        <div className="w-full h-[0.0625rem] bg-[#999] m-auto bg-opacity-40">{thirdCell}</div>
        <div className="w-full h-[0.0625rem] bg-[#999] m-auto bg-opacity-40">
          {fourthCell}
        </div>
        <div className="w-full h-[0.0625rem] bg-[#999] m-auto bg-opacity-40">{fifthCell}</div>
      </div>
    </div>
  );
}
