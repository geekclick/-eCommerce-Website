import ImageSlider from "../components/ProductPhysicalPage/ImageSlider";
import ProductInfo from "../components/ProductPhysicalPage/ProductInfo";
import PhysicalProductInfoOption from "../components/ProductPhysicalPage/PhysicalProductInfoOption";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CommentSection from "../components/CommentSection";

export default function PhysicalProductPage() {
  const { product } = useSelector(({ productSlice }) => productSlice);
  const { commentList } = useSelector(({ commentSlice }) => commentSlice);
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
      {commentList.map((item, index) => {
        return (
          <CommentSection
            key={index}
            date={item.date}
            name={item.name}
            comment={item.comment}
          />
        );
      })}
      <Footer />
    </>
  );
}
