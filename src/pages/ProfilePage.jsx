import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/ProfilePage/DropDown";
import Input from "../components/ProfilePage/Input";
import Button from "../components/ProfilePage/Button";
import MyOrder from "../components/ProfilePage/MyOrder";
import DiscountCode from "../components/ProfilePage/DiscountCode";
import Address from "../components/ProfilePage/Address";
import Ticket from "../components/ProfilePage/Ticket";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiIdentification } from "react-icons/hi2";
import { FaTruck } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { GiPathDistance } from "react-icons/gi";
import { BiSolidDiscount } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  addAddress,
  setAddress,
  updateAddressList,
} from "../store/reducers/addressSlice";

export default function MainBox() {
  const dispach = useDispatch();
  const [editProfilepic, setEditProfilepic] = useState(false);
  const [newTicket, setNewTicket] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const [edit, setEdit] = useState(false);

  const { address, addressList } = useSelector(
    ({ addressSlice }) => addressSlice
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      dispach(updateAddressList(address));
      console.log(address);
    } else {
      dispach(addAddress({ ...address, id: addressList.length }));
      console.log(addressList);
    }
    setNewAddress(false);
  };

  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
    dispach(setAddress({ ...address, description: e.target.value }));
  };

  return (
    <div className=" bg-bg bg-cover w-full md:h-fit min-h-screen md:px-24 px-2 lg:py-24 py-8">
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
          <Link to={"/"}>
            <button className="xl:w-[2.9375rem] xl:h-[2.9375rem]  w-[1.5rem] h-[1.5rem] flex-shrink-0 xl:my-[1rem] xl:mx-[3rem] my-[.5rem] mx-[1rem] md:mx-[2rem]">
              <FaHome className="w-full h-full" />
            </button>
          </Link>
          <div className="w-[95%] m-auto h-[0.0625rem] bg-[#999]"></div>
          <div className=" opacity-100 xl:pt-[4rem] pt-8">
            <DropDown
              title={"سفارشات من"}
              iconName={
                <HiIdentification className="w-full h-full text-purple-600" />
              }
              content={
                <div
                  className={`flex flex-row xl:space-x-[4.38rem] md:space-x-[5rem] space-x-2 xl:pb-[1.87rem] pb-4`}
                >
                  <div className="flex flex-col space-y-2 w-[50%]">
                    <Input placeholder={"نام خانوداگی"} />
                    <Input placeholder={"کد ملی"} />
                    <input
                      className="xl:w-[32.25rem] xl:h-[3.5rem] lg:h-[2.5rem] w-full h-8 opacity-[0.8] bg-black text-white xl:text-2xl text-xs px-2 md:px-4"
                      type="text"
                      placeholder="EYMUR ID"
                    />
                    <div className="xl:pt-4">
                      <Button
                        text={"ثبت"}
                        moreClasses={"w-full xl:w-[14rem] xl:h-[2.5rem]"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 w-[50%]">
                    <Input placeholder={"نام"} />
                    <Input placeholder={"شماره تماس"} />
                    <Input placeholder={"تاریخ تولد"} />
                    <input
                      className="xl:w-[32.25rem] xl:h-[3.5rem] lg:h-[2.5rem] w-full h-8 opacity-[0.8] bg-black text-white xl:text-2xl text-xs px-2 md:px-4"
                      type="text"
                      placeholder="Email@mail.com"
                    />
                  </div>
                </div>
              }
            />
            <DropDown
              title={"سفارشات من"}
              iconName={<FaTruck className="w-full h-full text-yellow-400" />}
              content={
                <div className="flex flex-col xl:space-y-6 space-y-3 py-2 lg:py-10">
                  <MyOrder />
                  <MyOrder />
                  <MyOrder />
                  <MyOrder />
                </div>
              }
            />
            <DropDown
              title={"کد های تخفیف من"}
              iconName={<TbDiscount2 className="w-full h-full text-blue-600" />}
              content={
                <div className="flex flex-col xl:space-y-3 xl:py-4 xl:text-lg py-2 md:text-sm lg:text-lg md:px-4 px-3 text-[10px]">
                  <DiscountCode status={"active"} />
                  <DiscountCode status={"expired"} />
                  <DiscountCode status={"active"} />
                </div>
              }
            />
            <DropDown
              title={"آدرس های من"}
              iconName={
                <GiPathDistance className="w-full h-full text-red-600" />
              }
              content={
                newAddress ? (
                  <div className="flex flex-col xl:space-y-8 xl:py-4 space-y-4 py-2 px-4">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="flex xl:space-x-20 space-x-4 mb-4">
                        <div className="flex flex-col xl:space-y-8 space-y-3 w-[50%]">
                          <Input
                            placeholder={"نام خانوداگی"}
                            name={"lastName"}
                          />
                          <Input placeholder={"استان"} name={"state"} />
                          <Input placeholder={"کد پستی"} name={"postalCode"} />
                        </div>
                        <div className="flex flex-col xl:space-y-8 space-y-3 w-[50%]">
                          <Input placeholder={"نام"} name={"firstName"} />
                          <Input
                            placeholder={"شماره تماس"}
                            name={"phoneNumber"}
                          />
                          <Input placeholder={"شهر"} name={"city"} />
                        </div>
                      </div>
                      <textarea
                        value={address.description}
                        onChange={handleChange}
                        className="bg-[#000] opacity-75 w-full text-right xl:p-2 xl:my-8 xl:text-lg text-sm"
                        placeholder="شرح آدرس"
                        cols="30"
                        rows="5"
                      ></textarea>
                      <div className="flex xl:space-x-8">
                        <Button
                          text={"ثبت"}
                          type={"submit"}
                          moreClasses={"lg:w-[8rem] w-[50%]"}
                        />
                        <button
                          onClick={() => setNewAddress(false)}
                          className="mx-8"
                        >
                          لغو
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div>
                    <div>
                      <Button
                        onClick={() => {
                          dispach(
                            setAddress({
                              id: addressList.length,
                              firstName: "",
                              lastName: "",
                              phoneNumber: "",
                              state: "",
                              postalCode: "",
                              city: "",
                              description: "",
                            })
                          );
                          setNewAddress(true);
                          setEdit(false);
                        }}
                        moreClasses={
                          "relative xl:bottom-16 xl:left-20 w-[20%] xl:h-[2.3rem] xl:text-sm text-[10px] bottom-9 left-12"
                        }
                        text={"آدرس جدید"}
                      />
                      {addressList.map((address, index) => {
                        return (
                          <Address
                            key={index}
                            name={`${address.firstName} ${address.lastName}`}
                            phoneNumber={address.phoneNumber}
                            desc={address.description}
                            onClick={() => setNewAddress(true)}
                            edit={() => setEdit(true)}
                          />
                        );
                      })}
                    </div>
                  </div>
                )
              }
            />
            <DropDown
              title={"تیکت ها"}
              iconName={
                <BiSolidDiscount className="w-full h-full text-pink-500" />
              }
              content={
                newTicket ? (
                  <div className="flex flex-col  space-y-4 py-4 px-4">
                    <div className="flex md:space-x-20 space-x-4">
                      <Input placeholder={"بخش"} />
                      <Input placeholder={"عنوان"} />
                    </div>
                    <textarea
                      className="bg-[#020607] opacity-75 p-2 text-right text-lg text-white"
                      cols="30"
                      rows="5"
                      placeholder="توضیحات"
                    ></textarea>
                    <div className="flex space-x-8">
                      <Button
                        text={"ثبت"}
                        moreClasses={"lg:w-[8rem] w-[50%]"}
                      />
                      <button onClick={() => setNewTicket(false)}>لغو</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <Button
                        onClick={() => setNewTicket(true)}
                        moreClasses={
                          "relative xl:bottom-16 xl:left-20 w-[20%] xl:h-[2.3rem] xl:text-base text-[10px] bottom-9 left-12"
                        }
                        text={"تیکت جدید"}
                      />
                      <Ticket />
                      <Ticket />
                      <Ticket />
                      <Ticket />
                    </div>
                  </div>
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
