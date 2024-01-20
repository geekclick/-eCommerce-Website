import ShoppingCartCost2 from "../components/AddressPaymentPage/ShoppingCartCost2";
import AddressPaymentSection from "../components/AddressPaymentPage/AddressPaymentSection";

export default function AddressPaymentPage() {
  return (
    <div className="AddressPaymentPage bg-black">
      <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-center text-[#00d5ff] mb-5 lg:mb-1 md:mb-5">
        trendyol
      </h1>
      <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center lg:items-start md:items-start lg:space-x-2 md:space-x-2 space-x-0 lg:mt-20 md:mt-10">
        <ShoppingCartCost2 />
        <AddressPaymentSection />
      </div>
    </div>
  );
}
