import Image from "./Image";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

let FooterData = [
  {
    src: "/Footer/1.png",
    alt: "/",
    link: "",
  },
  {
    src: "/Footer/2.png",
    alt: "/",
    link: "",
  },
  {
    src: "/Footer/3.png",
    alt: "/",
    link: "",
  },
  {
    src: "/Footer/4.png",
    alt: "/",
    link: "",
  },
];

export default function Footer() {
  return (
    <div className="Footer bg-[#2e2a2aa8] mt-20 md:mt-60 lg:mt-80 lg:pb-10 md:pb-10 pb-3">
      <div className="flex justify-around items-center">
        {/* call us section */}
        <div className="flex flex-col justify-evenly space-y-10 lg:space-y-20 md:space-y-20">
          <div className="flex flex-col">
            <span className="text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              تماس با ما
            </span>
            <span className="text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              چطور خرید کنم؟
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[0.4rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              Copyright © 2023 Eymur Inc.
            </span>
            <span className="text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              All rights reserved.
            </span>
          </div>
        </div>

        {/* midde section */}
        <div className="flex flex-col justify-evenly space-y-2 lg:space-y-4 md:space-y-4">
          <h1 className=" text-[2rem] md:text-[4rem] lg:text-[6rem] text-center  text-[#00d5ff]">
            trendyol
          </h1>
          {/* media icon */}
          <div className="flex justify-evenly">
            <FaTelegram />
            <FaInstagram />
            <FaTwitter />
          </div>
          {/* peyment icon */}
          <div className="flex space-x-1 lg:space-x-3 md:space-x-3">
            {FooterData.map((img, index) => {
              return (
                <Image
                  imgAlt={img.alt}
                  imgSrc={img.src}
                  imgLink={img.link}
                  key={index}
                  imgClass={"w-7 md:w-20 lg:w-32"}
                />
              );
            })}
          </div>
        </div>

        {/* about us section */}
        <div className="flex flex-col justify-evenly space-y-10 lg:space-y-20 md:space-y-20">
          <div className="flex flex-col">
            <span className="text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              درباره ما
            </span>
            <span className="text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              خدمات مشتریان
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              info@eymur.com
            </span>
            <span className="text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              044 - 21052
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
