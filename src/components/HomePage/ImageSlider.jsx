import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../../assets/CSS/ImageSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import Image from "../Image";
// fix the img responsive problem so it can fit whole screen when its table or labtop but not for phone and  every picture   you can add and picture fit fit

let ImageSliderData = [
  {
    src: "/src/assets/HomePageImages/ImageSlider/1.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/ImageSlider/2.jpg",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/ImageSlider/3.jpg",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/ImageSlider/4.jpg",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/ImageSlider/5.jpg",
    alt: "/",
    link: "",
  },
];

export default function ImageSlider() {
  return (
    <div className="ImageSlider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {ImageSliderData.map((img, index) => {
          return (
            <SwiperSlide className="w-full h-2/4" key={index}>
              <Image imgAlt={img.alt} imgSrc={img.src} imgClass={"h-fit aspect-[1920/829]"} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
