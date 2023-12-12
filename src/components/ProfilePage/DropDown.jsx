import React from "react";
import "../../App.css";
import { SlArrowDown } from "react-icons/sl";

export default function DropDown({ title, content, iconName }) {
  return (
    <div>
      <div className="border broder-[#707070] w-[95%] m-auto flex-shrink-0 xl:mx-[2.19rem] xl:px-[4.69rem] md:px-[2rem] px-[0.5rem]">
        <details>
          <summary>
            <div className="xl:h-[6.25rem] flex items-center justify-between">
              <div
                className={`xl:w-[2.9375rem] xl:h-[2.9375rem] xl:scale-150 flex-shrink-0 hover:translate-y-2 transition-all`}
              >
                <SlArrowDown className="relative xl:-bottom-3 bottom-1" />
              </div>
              <div>
                <div className="flex space-x-4 items-center">
                  <h2 className="text-[#E6E6E6] text-center xl:text-[2.5rem] font-[400] leading-[2.75rem] hover:text-[#00D5FF]">
                    {title}
                  </h2>
                  <div className="xl:w-[2.9375rem] xl:h-[2.9375rem] w-[1.5rem] h-[1.5rem] flex-shrink-0">
                    {iconName}
                  </div>
                </div>
              </div>
            </div>
          </summary>
          <div>{content}</div>
        </details>
      </div>
    </div>
  );
}
