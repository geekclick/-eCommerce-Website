import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "./Logo";
import "../../assets/CSS/LogoSlider.css";
import { useEffect, useState } from "react";

let logoSliderData = [
  {
    src: "/src/assets/HomePageImages/LogoSlider/1.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/LogoSlider/2.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/LogoSlider/3.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/LogoSlider/4.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/LogoSlider/5.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/LogoSlider/6.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/LogoSlider/7.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/HomePageImages/LogoSlider/7.png",
    alt: "/",
    link: "",
  },
];

export default function LogoSlider() {
  const [slidesPerView, setSlidesPerView] = useState(7);
  useEffect(() => {
    if (window.innerWidth < 426) {
      setSlidesPerView(4);
    }
  }, []);
  return (
    <div className="LogoSlider mt-2 md:mt-4 lg:mt-6">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation
        spaceBetween={0}
        slidesPerView={slidesPerView}
      >
        {logoSliderData.map((logo, index) => {
          return (
            <SwiperSlide key={index}>
              <Logo
                LogoAlt={logo.alt}
                LogoSrc={logo.src}
                LogoLink={logo.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
