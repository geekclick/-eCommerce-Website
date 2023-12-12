// adding rubik font family
import Product from "./Product";
import { useSelector } from "react-redux";

export default function ActionFiguresSection({ active }) {
  const { physicalProductList, digitalProductList } = useSelector(
    ({ productSlice }) => productSlice
  );

  if (active) {
    return (
      <div className="ActionFiguresSection mt-4 md:mt-5 lg:mt-10">
        <div className="flex flex-col lg:flex-row md:flex-row  justify-center items-center lg:items-stretch md:items-stretch space-x-2 md:space-x-6 lg:space-x-10">
          <div className="order-2 md:order-1 lg:order-1 grid grid-cols-4 justify-items-center gap-x-4 gap-y-5 md:gap-y-10 lg:gap-y-20 w-3/5">
            {physicalProductList.ActionFiguresSectionData.map((img) => {
              return (
                <Product
                  imgAlt={img.alt}
                  imgSrc={img.src}
                  imgLink={img.link}
                  id={img.id}
                  category={img.category}
                  key={img.id}
                  imgClass={"h-fit w-auto"}
                  productList={physicalProductList.ActionFiguresSectionData}
                />
              );
            })}
          </div>
          <div className="order-1  md:order-2 lg:order-2 flex flex-col justify-evenly items-center  mb-5 md:mb-0 lg:mb-0">
            <h1 className="text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6]">
              ActionFigures
            </h1>
            <span className="leading-5 md:leading-8 lg:leading-10 text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              هیروها تو داستان ها نیستن
              <br className="hidden md:block lg:block" />
              !میان روی میزت
            </span>
            <button className="border-[1px] md:border-[1px] lg:border-1  border-[#00d5ff] bg-black text-center text-[0.5rem] text-[#E6E6E6] md:text-[0.9rem] lg:text-[1.1rem] w-3/5 py-1 mt-4 md:mt-0 lg:mt-0 hidden md:block lg:block">
              مشاهده همه
            </button>
          </div>
          <button className="order-3 border-[1px] md:border-[1px] lg:border-1  border-[#00d5ff] bg-black text-center text-[0.5rem] text-[#E6E6E6] md:text-[0.9rem] lg:text-[1.1rem] w-20 py-1 mt-4 md:mt-0 lg:mt-0  black md:hidden lg:hidden">
            مشاهده همه
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ActionFiguresSection mt-4 md:mt-5 lg:mt-10">
        <div className="flex flex-col lg:flex-row md:flex-row  justify-center items-center lg:items-stretch md:items-stretch space-x-2 md:space-x-6 lg:space-x-10">
          <div className="order-2 md:order-1 lg:order-1 grid grid-cols-4 justify-items-center gap-x-4 gap-y-5 md:gap-y-10 lg:gap-y-20 w-3/5">
            {digitalProductList.PCGamesImages.map((img) => {
              return (
                <Product
                  imgAlt={img.alt}
                  imgSrc={img.src}
                  imgLink={img.link}
                  id={img.id}
                  category={img.category}
                  key={img.id}
                  imgClass={"h-fit w-auto rounded-full aspect-square"}
                  productList={digitalProductList.PCGamesImages}
                />
              );
            })}
          </div>
          <div className="order-1  md:order-2 lg:order-2 flex flex-col justify-evenly items-center  mb-5 md:mb-0 lg:mb-0">
            <h1 className="text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6]">
              PC Games
            </h1>
            <span className="leading-5 md:leading-8 lg:leading-10 text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] text-center  text-[#E6E6E6]">
              هیروها تو داستان ها نیستن
              <br className="hidden md:block lg:block" />
              !میان روی میزت
            </span>
            <button className="border-[1px] md:border-[1px] lg:border-1  border-[#00d5ff] bg-black text-center text-[0.5rem] text-[#E6E6E6] md:text-[0.9rem] lg:text-[1.1rem] w-3/5 py-1 mt-4 md:mt-0 lg:mt-0 hidden md:block lg:block">
              مشاهده همه
            </button>
          </div>
          <button className="order-3 border-[1px] md:border-[1px] lg:border-1  border-[#00d5ff] bg-black text-center text-[0.5rem] text-[#E6E6E6] md:text-[0.9rem] lg:text-[1.1rem] w-20 py-1 mt-4 md:mt-0 lg:mt-0  black md:hidden lg:hidden">
            مشاهده همه
          </button>
        </div>
      </div>
    );
  }
}
