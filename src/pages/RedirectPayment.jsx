import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Order from "../components/ProfilePage/Order";
import OrderProgress from "../components/OrderProgress";
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
          </div>
          <div className="w-[95%] m-auto h-[0.0625rem] bg-[#999] md:mb-32"></div>
          <OrderProgress />
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
          </div>
        </div>
      </div>
    </div>
  );
}
