import React, { Component } from "react";
import Slider from "react-slick";
import Image1 from "/src/assets/PhysicalPageImages/ProductImgSLider/1.png";
import Image2 from "/src/assets/PhysicalPageImages/ProductImgSLider/2.png";
import Image3 from "/src/assets/PhysicalPageImages/ProductImgSLider/3.png";
import Image4 from "/src/assets/PhysicalPageImages/ProductImgSLider/4.png";
import Image5 from "/src/assets/PhysicalPageImages/ProductImgSLider/5.png";
import Image6 from "/src/assets/PhysicalPageImages/ProductImgSLider/6.png";
import Image7 from "/src/assets/PhysicalPageImages/ProductImgSLider/7.png";

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function (i = 3) {
        return (
          <a>
            <img src={`Image${i + 1}`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={`Image${1}`} />
          </div>
          <div>
            <img src={`Image${2}`} />
          </div>
          <div>
            <img src={`Image${3}`} />
          </div>
          <div>
            <img src={`Image${4}`} />
          </div>
        </Slider>
      </div>
    );
  }
}
