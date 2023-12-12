import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const [editProfilepic, setEditProfilepic] = useState(false);

  return (
    <div className="bg-bg bg-cover w-full md:h-fit min-h-screen lg:px-24 lg:py-16 px-2 py-4">
      <div
        onMouseOver={() => setEditProfilepic(true)}
        onMouseLeave={() => setEditProfilepic(false)}
        className="lg:w-[7.5rem] lg:h-[7.5rem] w-[4rem] h-[4rem] flex-shrink-0] border opacity-[1] rounded-lg bg-white m-auto relative"
      >
        <CgProfile className="w-full h-full text-black" />
        {editProfilepic && (
          <button className="w-full h-full bg-black opacity-[0.8] rounded-lg absolute top-0 flex items-center">
            <FaRegEdit className="w-1/3 h-1/3 m-auto" />
          </button>
        )}
      </div>
      <div className="w-full lg:h-fit min-h-screen flex-shrink-0 opacity-[1] bg-[#00000094] bg-no-repeat pb-20">
        <div className=" opacity-[1]">
          <h1 className="p-2 text-[#E6E6E6] lg:text-[3.625rem] text-lg font-[400] leading-normal tracking-[0.18125rem] text-center not-italic">
            EYMUR ID
          </h1>
          <div className="lg:w-[3.9375rem] lg:h-[2.9375rem]  w-[100%] h-[1.5rem] flex space-x-2 flex-shrink-0 lg:mx-[3rem] mx-4 md:mx-[2rem]">
            <button className="mb-1">
              <Link to={"/"}>
                <FaHome className="w-fit lg:h-full " />
              </Link>
            </button>
            <button className="mb-1">
              <Link to={"/profile"}>
                <FaArrowLeft className="w-fit lg:h-[70%]" />
              </Link>
            </button>
          </div>
          <div className="w-[95%] m-auto h-[0.0625rem] bg-[#999]"></div>
          <div className=" opacity-100 lg:pt-[4rem] pt-8">
            <div className="flex flex-col justify-center items-center space-y-20 w-full pr-2">
              <div className="flex lg:flex-row flex-col items-end lg:space-x-4 xl:ml-32">
                <p className="text-[#999] lg:text-[0.875rem] text-[11px]">
                  {" "}
                  1402 خـرداد 8
                </p>
                <div className="lg:w-[45rem] lg:h-[10.375rem] w-[90%] border border-[#707070] flex flex-col">
                  <h1 className="text-right lg:text-[1.75rem] text-[1.3rem] text-[#00D5FF] mx-2">
                    EYMUR ID
                  </h1>
                  <p className="lg:text-[1.1rem] text-[12px] text-[#E6E6E6] m-auto text-center">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است چاپگر
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col-reverse items-end space-x-4 xl:mr-32">
                <div className="lg:w-[45rem] lg:h-[10.375rem] w-[90%] border border-[#707070] flex flex-col">
                  <h1 className="text-left lg:text-[1.75rem] text-[1.3rem] text-[#00D5FF] mx-2">
                    نام بخش پاسخ دهنده
                  </h1>
                  <p className="lg:text-[1.1rem] text-[12px] text-[#E6E6E6] m-auto text-center">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است چاپگر
                  </p>
                </div>
                <p className="text-[#999] text-[0.875rem]"> 1402 خـرداد 8</p>
              </div>
              <div className="flex lg:flex-row flex-col items-end space-x-4 lg:ml-30 xl:ml-32">
                <p className="text-[#999] text-[0.875rem]">1402 خـرداد 8</p>
                <div className="lg:w-[45rem] lg:h-[100%] w-[90%] border border-[#707070] flex flex-col">
                  <h1 className="text-right lg:text-[1.75rem] text-[1.3rem] text-[#00D5FF] mx-2">
                    EYMUR ID
                  </h1>
                  <p className="lg:text-[1.1rem] text-[10px] text-[#E6E6E6] m-auto text-center">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است چاپگر
                  </p>
                  <div className="flex space-x-2 px-16 py-4">
                    <button className="lg:w-[1.875rem] lg:h-[1.875rem] bg-[#00D5FF]"></button>
                    <button className="lg:w-[1.875rem] lg:h-[1.875rem] bg-[#00D5FF]"></button>
                  </div>
                </div>
              </div>
              <div className="xl:w-[60rem] lg:w-[40rem] lg:h-[100%] w-[90%] bg-black opacity-[0.8] relative px-2">
                <textarea
                  className="bg-transparent w-full text-right p-2"
                  cols="30"
                  rows="10"
                  placeholder="... پاسخ"
                ></textarea>
                <div className="flex justify-between lg:px-8 px-2 absolute bottom-4 w-full">
                  <div className="flex space-x-4">
                    <button className="w-[4rem] h-[2rem] bg-[#00D5FF] text-[#2E2E2E] text-center lg:text-[1rem] text-sm leading-[1.875rem] border-[#00D5FF] hover:border-2 hover:text-white hover:bg-transparent transition-all">
                      ثبت
                    </button>
                    <button>لغو</button>
                  </div>
                  <button className="w-[2rem] h-[2rem] bg-[#00D5FF] text-black text-[12px] mr-4">
                    لغو
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
