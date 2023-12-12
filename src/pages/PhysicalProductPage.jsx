import ImageSlider from "../components/ProductPhysicalPage/ImageSlider";
import ProductInfo from "../components/ProductPhysicalPage/ProductInfo";
import PhysicalProductInfoOption from "../components/ProductPhysicalPage/PhysicalProductInfoOption";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function PhysicalProductPage() {
  const { product } = useSelector(({ productSlice }) => productSlice);
  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row flex-col mt-16">
        <div className="flex flex-col">
          <ImageSlider product={product} />
          <ProductInfo />
        </div>
        <PhysicalProductInfoOption product={product} />
      </div>
      <Footer />
    </>
  );
}
