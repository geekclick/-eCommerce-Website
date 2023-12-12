import ProductImgSection from "./ProductImgSection";
import ClothingAccessoriesSection from "./ClothingAccessoriesSection";
import ActionFiguresSection from "./ActionFiguresSection";

export default function ProductSection({ buttonState }) {
  return (
    <div>
      <ProductImgSection active={buttonState} />
      <ClothingAccessoriesSection active={buttonState} />
      <ActionFiguresSection active={buttonState} />
    </div>
  );
}
