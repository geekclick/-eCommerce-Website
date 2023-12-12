import React, { useEffect, useState } from "react";
// import SwiperComponent from "../SwiperComponent";

export default function ImageSlider({ product }) {
  const [image, setImage] = useState(product.src);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-bg1 relative w-full xl:w-[56rem] xl:h-[85vh] flex lg:flex-row flex-col-reverse justify-center lg:p-16 p-8  lg:items-start items-center">
        <div className="flex lg:flex-col lg:space-x-0 lg:space-y-4 space-x-4 absolute left-10">
          {product.sliderImages.map((src, index) => {
            return (
              <img
                src={src}
                alt="not found"
                className="max-w-[3rem] cursor-pointer"
                key={index}
                onClick={() => setImage(src)}
              />
            );
          })}
        </div>
        <div>
          {/* <SwiperComponent image={image} imgList={product.sliderImages} /> */}
          <img src={image} alt="" className="h-[24rem]" />
        </div>
      </div>
    </div>
  );
}
