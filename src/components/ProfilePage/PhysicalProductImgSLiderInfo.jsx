import ProductImgSLider from "../ProductPhysicalPage/ProductImgSLider";
import ProductInfo from "../ProductPhysicalPage/ProductInfo";

function PhysicalProductImgSLiderInfo() {
  return (
    <div className="PhysicalProductImgSLiderInfo w-full lg:w-3/4 md:w-3/4">
      <div className="flex-col">
        <ProductImgSLider />
        <ProductInfo />
      </div>
    </div>
  );
}

export default PhysicalProductImgSLiderInfo;
