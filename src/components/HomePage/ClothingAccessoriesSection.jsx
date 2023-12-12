import Product from "./Product";
import { useSelector } from "react-redux";

export default function ClothingAccessoriesSection({ active }) {
  const { physicalProductList, digitalProductList } = useSelector(
    ({ productSlice }) => productSlice
  );
  if (active) {
    return (
      <div className="ClothingAccessoriesSection mt-4 md:mt-5 lg:mt-10">
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-5 md:space-x-16 lg:space-x-16">
          <div className="order-2 md:order-1 lg:order-1  grid grid-cols-4 justify-items-center gap-x-4 w-3/5">
            {physicalProductList.ClothingAccessoriesSectionData.map((img) => {
              return (
                <Product
                  imgAlt={img.alt}
                  imgSrc={img.src}
                  imgLink={img.link}
                  id={img.id}
                  key={img.id}
                  imgClass={"h-fit w-auto"}
                  productList={
                    physicalProductList.ClothingAccessoriesSectionData
                  }
                />
              );
            })}
          </div>
          <h1 className="order-1  md:order-2 lg:order-2 text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6] flex flex-col justify-center mb-5 lg:mb-0 md:mb-0">
            Clothing <br className="hidden md:block lg:block" /> &
            <br className="hidden md:block lg:block" />
            Accessories
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ClothingAccessoriesSection mt-4 md:mt-5 lg:mt-10">
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-5 md:space-x-16 lg:space-x-16">
          <div className="order-2 md:order-1 lg:order-1  grid grid-cols-4 justify-items-center gap-x-4 w-3/5">
            {digitalProductList.XboxGameData.map((img) => {
              return (
                <Product
                  imgAlt={img.alt}
                  imgSrc={img.src}
                  imgLink={img.link}
                  id={img.id}
                  category={img.category}
                  key={img.id}
                  imgClass={"h-fit w-auto rounded-full aspect-square"}
                  productList={digitalProductList.XboxGameData}
                />
              );
            })}
          </div>
          <h1 className="order-1  md:order-2 lg:order-2 text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6] flex flex-col justify-center mb-5 lg:mb-0 md:mb-0">
            Playstation <br className="hidden md:block lg:block" /> &
            <br className="hidden md:block lg:block" />
            Xbox
          </h1>
        </div>
      </div>
    );
  }
}
