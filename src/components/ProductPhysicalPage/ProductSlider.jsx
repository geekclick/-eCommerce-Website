import React, { Component } from "react";
import Slider from "react-slick";

const baseUrl = "/src/assets/PhysicalPageImages/ProductImgSLider";
export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function (i=3) {
        return (
          <a>
            <img
              src={`/src/assets/PhysicalPageImages/ProductImgSLider/${
                i + 1
              }.png`}
            />
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
            <img src={baseUrl + "/1.png"} />
          </div>
          <div>
            <img src={baseUrl + "/2.png"} />
          </div>
          <div>
            <img src={baseUrl + "/3.png"} />
          </div>
          <div>
            <img src={baseUrl + "/4.png"} />
          </div>
        </Slider>
      </div>
    );
  }
}
