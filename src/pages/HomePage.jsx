import ImageSlider from "../components/HomePage/ImageSlider";
import LogoSlider from "../components/HomePage/LogoSlider";
import ButtonSection from "../components/HomePage/ButtonSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductSection from "../components/HomePage/ProductSection";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { buttonState } = useSelector(({ commonSlice }) => commonSlice);
  return (
    <div className="HomePage lg:mt-16 mt-16 bg-black">
      <Navbar />
      <ImageSlider />
      <LogoSlider />
      <ButtonSection buttonState={buttonState} />
      <ProductSection buttonState={buttonState} />
      <Footer />
    </div>
  );
}
