import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Image from "../Image";
import Button from "../ProfilePage/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import { addComment } from "../../store/reducers/commentSlice";
let ProductInfo = [
  {
    src: "/src/assets/PhysicalPageImages/ProductImg/2.png",
    name: "Product Name Product Name",
    price: "100,000,000",
  },
  {
    src: "/src/assets/PhysicalPageImages/ProductImg/1.png",
    name: "Product Name Product Name",
    price: "100,000,000",
  },
  {
    src: "/src/assets/PhysicalPageImages/ProductImg/2.png",
    name: "Product Name Product Name",
    price: "100,000,000",
  },
];

let commentData = {
  date: "",
  name: "",
  email: "",
  comment: "",
};
export default function PhysicalProductInfoOption({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(commentData);
  const onClick = () => {
    dispatch(addProduct([product]));
    navigate("/cart");
  };

  const options = ["Gozine 1", "Gozine 2", "Gozine 3"];
  const defaultOption = options[0];
  return (
    <div className="p-3 mt-8 xl:px-16 lg:px-8 xl:w-[25%] lg:w-[50%] w-[90%] mx-auto">
      <h2 className="text-[12px] md:text-[20px] lg:text-[12px] text-right ">
        فیزیکال &gt; رسته &gt; نام شرکت سازنده و محصول
      </h2>
      <div className="flex flex-col mt-2">
        <h1 className="text-[#00D5FF] text-[1rem] md:text-[2rem] lg:text-[1.2rem]">
          Product Name Product Name
        </h1>
        <p className="text-[12px] md:text-[20px] lg:text-[12px]">
          Product Description Product Description{" "}
        </p>
        <p className="text-[12px] md:text-[20px] lg:text-[12px]">
          Product Description
        </p>
        <p>
          <span className="text-[8px]">تومان </span>
          <span className="text-[1.3rem]">100,000,000</span>
        </p>
        <ul className="text-[10px] list-disc text-right list-inside my-8">
          <li
            dir="rtl"
            className="text-[0.5rem] md:text-[0.9rem] lg:text-[0.8rem] text-[#3A3A3A] text-center md:text-start lg:text-start mb-2 md:mb-1"
          >
            <span className="text-[0.7rem] md:text-[1rem] lg:text-[.8rem]  text-[#CFCFCF]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
            </span>
          </li>
          <li
            dir="rtl"
            className="text-[0.5rem] md:text-[0.9rem] lg:text-[0.8rem] text-[#3A3A3A] text-center md:text-start lg:text-start mb-2 md:mb-1"
          >
            <span className="text-[0.7rem] md:text-[1rem] lg:text-[.8rem]  text-[#CFCFCF]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
            </span>
          </li>{" "}
          <li
            dir="rtl"
            className="text-[0.5rem] md:text-[0.9rem] lg:text-[0.8rem] text-[#3A3A3A] text-center md:text-start lg:text-start mb-2 md:mb-1"
          >
            <span className="text-[0.7rem] md:text-[1rem] lg:text-[.8rem]  text-[#CFCFCF]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
            </span>
          </li>
        </ul>
        <div className="my-8 space-y-4">
          <div className="relative border w-[70%] m-auto">
            <Dropdown
              options={options}
              value={defaultOption}
              controlClassName="bg-black text-white border-0"
              arrowClassName="hidden"
              menuClassName="text-white w-[70%] m-auto"
            />
            <span className="text-[#00D5FF] absolute right-4 md:right-10 lg:right-4 top-2">
              &#11167;
            </span>
          </div>
          <div className="relative border w-[70%] m-auto">
            <Dropdown
              options={options}
              value={defaultOption}
              controlClassName="bg-black text-white border-0"
              arrowClassName="hidden"
              menuClassName="text-white w-[70%] m-auto"
            />
            <span className="text-[#00D5FF] absolute right-4 md:right-10 lg:right-4 top-2">
              &#11167;
            </span>
          </div>
        </div>
        <p className="text-[1rem] my-4 text-center">پیشنهادات دیگر</p>
        <div className="my-8 space-y-4 m-auto">
          {ProductInfo.map((img, index) => {
            return (
              <div key={index} className="flex space-x-4">
                <Image
                  imgAlt={img.alt}
                  imgSrc={img.src}
                  key={index}
                  imgClass={"h-fit w-auto"}
                />
                <div>
                  <h2>{img.name}</h2>
                  <p>
                    <span>تومان</span>
                    <span>{img.price}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-8">
          <div className="flex space-x-2 justify-end">
            <h2 className="text-[12px] md:text-[20px] lg:text-[12px]">
              .تحویل اکسپرس اِیمور را رایگان تجربه کنید
            </h2>
            <div className="w-4 h-4 bg-white"></div>
          </div>
          <p className="text-[#999] text-right">ارسال بازه __ تا __ نام ماه</p>
        </div>
        <Button
          onClick={() => onClick()}
          text={"افزودن به سبد خرید"}
          moreClasses={"w-[80%] md:w-[50%] lg:w-[80%] lg:p-2 m-auto"}
        />
        <div className="my-8">
          <div className="flex justify-between my-4">
            <p className="text-[12px] md:text-[20px] underline lg:text-[12px]">
              مشاهده نظرات دیگران
            </p>
            <p className="text-[12px] md:text-[20px] lg:text-[12px]">نظرات</p>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(value);
                dispatch(addComment({ ...value, date: `${new Date()}` }));
                setValue(commentData);
              }}
            >
              <input
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
                type="text"
                className="w-full bg-[#5E5E5E] text-white p-2 my-2 text-right"
                placeholder="نام"
              />
              <input
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
                type="text"
                className="w-full bg-[#5E5E5E] text-white p-2 my-2 text-right"
                placeholder="ایمیل"
              />
              <textarea
                value={value.comment}
                onChange={(e) =>
                  setValue({ ...value, comment: e.target.value })
                }
                type="text"
                cols={8}
                className="w-full bg-[#5E5E5E] text-white p-2 pb-20 my-2 text-right"
                placeholder="نظر شما"
              />
              <Button
                text={"ثبت نظر"}
                type={"submit"}
                moreClasses={"w-[40%] m-auto"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
