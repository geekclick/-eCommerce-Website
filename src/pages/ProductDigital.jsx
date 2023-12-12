import ProductDetails from "../components/ProductDigitalPage/ProductDetails";
import ProductAbout from "../components/ProductDigitalPage/ProductAbout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function ProductDigital() {
  const { product } = useSelector(({ productSlice }) => productSlice);

  return (
    <div className="product-digital-container mt-16 bg-[#0f0f0f] bg-[url('/src/assets/DigitalPageImages/bg.png')] bg-no-repeat md:bg-contain md:h-auto h-screen bg-cover">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="product-digital-box mt-10 [@media(max-width:650px)]:h-auto [@media(max-width:650px)]:w-[95%] [@media(max-width:650px)]: - h-auto w-4/5 max-w-[91.25rem] max-h-[auto] bg-[hsla(0,0%,6%,1)] p-[1.38em]   ">
          <h1 className="product--tags - text-[#e6e6e6] text-right  text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] not-italic [font-family:inherit] font-normal leading-[1.6rem] mb-[1em]">
            دیجیتال &gt; رشته &gt; نام شرکت سازنده &gt; نام محصول
          </h1>
          <div className="product--details--about-container - flex - [@media(max-width:650px)]:flex-col">
            <ProductDetails product={product} />
            <ProductAbout src={product.src} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
