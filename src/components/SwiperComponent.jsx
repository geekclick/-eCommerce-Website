import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../assets/CSS/ImageSlider.css";
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperComponent({ image, imgList }) {
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
        {imgList.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
