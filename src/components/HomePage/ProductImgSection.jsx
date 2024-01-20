import Image1 from "/src/assets/HomePageImages/ProductImgSection/1.png";
import Image2 from "/src/assets/HomePageImages/ProductImgSection/2.png";
import Image3 from "/src/assets/HomePageImages/ProductImgSection/3.jpg";
import Image4 from "/src/assets/HomePageImages/ProductImgSection/4.jpg";

export default function ProductImgSection({ active }) {
  if (active) {
    return (
      <div className="ProductImgSection">
        <div className="flex flex-col lg:flex-row md:flex-row items-center space-y-4  justify-center mt-6 md:mt-10 lg:mt-16 space-x-3 md:space-x-5 lg:space-x-10">
          <img src={Image1} alt="/" className="w-2/6 md:w-2/6 lg:w-2/6" />
          <img src={Image2} alt="/" className="w-2/6 md:w-2/6 lg:w-2/6" />
        </div>
        <div className="mt-4 md:mt-10 lg:mt-12 w-4/5 h-[1px] bg-[#8c969759] mx-auto"></div>
      </div>
    );
  } else {
    return (
      <div className="ProductImgSection">
        <div className="flex flex-col lg:flex-row md:flex-row items-center space-y-4  justify-center mt-6 md:mt-10 lg:mt-16 space-x-3 md:space-x-5 lg:space-x-10">
          <img src={Image4} alt="/" className="w-2/6 md:w-2/6 lg:w-2/6" />
          <img src={Image3} alt="/" className="w-2/6 md:w-2/6 lg:w-2/6" />
        </div>
        <div className="mt-4 md:mt-10 lg:mt-12 w-4/5 h-[1px] bg-[#8c969759] mx-auto"></div>
      </div>
    );
  }
}
