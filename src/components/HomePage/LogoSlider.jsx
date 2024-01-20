import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "./Logo";
import "../../assets/CSS/LogoSlider.css";
import { useEffect, useState } from "react";
import Image1 from "/src/assets/HomePageImages/LogoSlider/1.png";
import Image2 from "/src/assets/HomePageImages/LogoSlider/2.png";
import Image3 from "/src/assets/HomePageImages/LogoSlider/3.png";
import Image4 from "/src/assets/HomePageImages/LogoSlider/4.png";
import Image5 from "/src/assets/HomePageImages/LogoSlider/5.png";
import Image6 from "/src/assets/HomePageImages/LogoSlider/6.png";
import Image7 from "/src/assets/HomePageImages/LogoSlider/7.png";

let logoSliderData = [
  {
    src: Image1,
    alt: "/",
    link: "",
  },
  {
    src: Image2,
    alt: "/",
    link: "",
  },
  {
    src: Image3,
    alt: "/",
    link: "",
  },
  {
    src: Image4,
    alt: "/",
    link: "",
  },
  {
    src: Image5,
    alt: "/",
    link: "",
  },
  {
    src: Image6,
    alt: "/",
    link: "",
  },
  {
    src: Image7,
    alt: "/",
    link: "",
  },
  {
    src: Image7,
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
