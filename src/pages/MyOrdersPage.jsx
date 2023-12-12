import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Order from "../components/ProfilePage/Order";
import BillBox from "../components/ProfilePage/BillBox";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const [editProfilepic, setEditProfilepic] = useState(false);

  return (
    <div className="bg-bg bg-cover w-full md:h-fit min-h-screen xl:px-24 xl:py-16 px-2 py-4">
      <div
        onMouseOver={() => setEditProfilepic(true)}
        onMouseLeave={() => setEditProfilepic(false)}
        className="xl:w-[7.5rem] xl:h-[7.5rem] w-[4rem] h-[4rem] flex-shrink-0] border opacity-[1] rounded-lg bg-white m-auto relative"
      >
        <CgProfile className="w-full h-full text-black" />
        {editProfilepic && (
          <button className="w-full h-full bg-black opacity-[0.8] rounded-lg absolute top-0 flex items-center">
            <FaRegEdit className="w-1/3 h-1/3 m-auto" />
          </button>
        )}
      </div>
      <div className="w-full xl:h-fit min-h-screen flex-shrink-0 opacity-[1] bg-[#00000094] bg-no-repeat pb-20">
        <div className=" opacity-[1]">
          <h1 className="p-2 text-[#E6E6E6] xl:text-[3.625rem] text-lg font-[400] leading-normal tracking-[0.18125rem] text-center not-italic">
            EYMUR ID
          </h1>
          <div className="xl:w-[3.9375rem] xl:h-[2.9375rem]  w-[1.5rem] h-[1.5rem] flex space-x-2 flex-shrink-0 xl:mx-[3rem] mx-[1rem] md:mx-[2rem]">
            <button className="mb-1">
              <Link to={"/"}>
                <FaHome className="w-fit lg:h-full" />
              </Link>
            </button>
            <button className="mb-1">
              <Link to={"/profile"}>
                <FaArrowLeft className="w-fit lg:h-[70%]" />
              </Link>
            </button>
          </div>
          <div className="w-[95%] m-auto h-[0.0625rem] bg-[#999]"></div>
          <div className="opacity-100 xl:pt-[4rem] pt-8 p-2 md:px-16">
            <Order BigBoxColor={"#0DFFA1"} SmallBoxColor={"#00D5FF"} />
            <Order BigBoxColor={"#FFBA19"} SmallBoxColor={"#0DFFA1"} />
            <Order BigBoxColor={"#FF4119"} SmallBoxColor={"#FF4119"} />
            <Order BigBoxColor={"#0DFFA1"} SmallBoxColor={"#0F0F0F"} />
            <Order BigBoxColor={"#FFBA19"} SmallBoxColor={"#FFBA19"} />
            <Order
              BigBoxColor={"#0DFFA1"}
              SmallBoxColor={"#00D5FF"}
              noEndLine={true}
            />
            <div className="flex xl:flex-row flex-col justify-between space-x-2 p-2 mt-32 xl:space-y-0 space-y-8">
              <BillBox
                firstCell={
                  <h1 className="text-[#00D5FF] xl:text-[2rem] text-[1.3rem] text-right">
                    اطلاعات مشتری
                  </h1>
                }
                secondCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="text-[10px] xl:text-base">نام نام خانوادگی</p>
                    <p className="text-[10px] xl:text-base">
                      نام و نام خانوادگی
                    </p>
                  </div>
                }
                thirdCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="text-[10px] xl:text-base">09312345678</p>
                    <p className="text-[10px] xl:text-base">شماره تماس</p>
                  </div>
                }
                fourthCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="text-[10px] xl:text-base">5715859595</p>
                    <p className="text-[10px] xl:text-base">کدپستی</p>
                  </div>
                }
                fifthCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="w-1/2 text-[10px] xl:text-base">
                      شهر- شرح آدرس شرح آدرس شرح
                    </p>
                    <p className="text-[10px] xl:text-base">آدرس</p>
                  </div>
                }
              />
              <BillBox
                firstCell={
                  <div className="flex justify-between items-center">
                    <button
                      className={`xl:w-[8rem] xl:h-[2rem] w-[4rem] h-[2rem]  bg-[#00D5FF] text-[#2E2E2E] text-center xl:text-[1rem] text-[12px] leading-[1.875rem] border-[#00D5FF] hover:border-2 hover:text-white hover:bg-transparent transition-all`}
                    >
                      فاکتور
                    </button>
                    <h1 className="text-[#00D5FF] xl:text-[2rem] text-[1.3rem] text-right">
                      جزئیات پرداخت
                    </h1>
                  </div>
                }
                secondCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="text-[10px] xl:text-base">
                      999,999,999 تومان
                    </p>
                    <p className="text-[10px] xl:text-base">جمع کل</p>
                  </div>
                }
                thirdCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="text-[10px] xl:text-base">
                      999,999,999 تومان
                    </p>
                    <p className="text-[10px] xl:text-base">تومان</p>
                  </div>
                }
                fourthCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="text-[10px] xl:text-base">
                      999,999,999 تومان
                    </p>
                    <p className="text-[10px] xl:text-base">هزینه ارسال</p>
                  </div>
                }
                fifthCell={
                  <div className="flex justify-between xl:m-8 m-3">
                    <p className="text-[10px] xl:text-base">
                      999,999,999 تومان
                    </p>
                    <p className="text-[10px] xl:text-base">نهایی</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
