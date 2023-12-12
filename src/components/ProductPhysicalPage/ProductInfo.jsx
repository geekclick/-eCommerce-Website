import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

let ProductInfoData = [
  {
    title: "Title",
    description: "Description Description Description",
  },
  {
    title: "Title",
    description: "Description Description Description",
  },
  {
    title: "Title",
    description: "Description Description Description",
  },
  {
    title: "Title",
    description: "Description Description Description",
  },
  {
    title: "Title",
    description: "Description Description Description",
  },
  {
    title: "Title",
    description: "Description Description Description",
  },
];
export default function ProductInfo() {
  return (
    <div className="ProductInfo mx-2 lg:mx-0 md:mx-0">
      <div className="flex-col bg-[#222222] mt-3 md:mt-10 lg:mt-15 lg:ml-2 md:ml-2 px-5 lg:px-10 md:px-10 py-3 lg:py-10 md:py-5">
        <h1 className="text-[0.8rem] md:text-[1.3rem] lg:text-[1.5rem] text-center  text-[#CFCFCF]">
          مشخصات فنی
        </h1>
        {/* Title section */}

        {ProductInfoData.map((product, index) => {
          return (
            <div className="flex space-x-10 md:space-x-10 lg:space-x-10 mt-3 md:mt-3 lg:mt-5 pb-2 md:pb-2 lg:pb-2  border-b-[2px] border-[#757575]" key={index}>
              <span className="text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]  text-[#CFCFCF]">
                {product.title}
              </span>
              <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem]  text-[#757575]">
                {product.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* more info btn */}
      <div className="flex-col justify-center lg:ml-2 md:ml-2 px-5 py-1 lg:py-1 md:py-1 bg-[#2E2E2E] cursor-pointer">
        <p className="text-[0.5rem] md:text-[0.7rem] lg:text-[0.8rem] text-center  text-[#CFCFCF]">
          مشاهده بیشتر
        </p>
        <button className="text-[0.5rem] md:text-[1rem] lg:text-[1rem] text-center text-[#CFCFCF] w-full">
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-[#00d5ff] text-[0.8rem] md:text-[1rem] lg:text-[1.5rem]"
          />
        </button>
      </div>
    </div>
  );
}
