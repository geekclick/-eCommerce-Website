import { Link } from "react-router-dom";

export default function ShoppingCartCost2() {
  return (
    <div className="w-[80%] md:w-[30%] lg:w-[35%] p-[1em] border-[1px] border-[solid] border-[#707070] bg-[#0F0F0F] order-2 lg:order-1 md:order-1 mt-3 lg:mt-0">
      <div className="flex justify-between items-center">
        <div className="prise-container - flex items-center">
          <div className="toman-persian - text-[#E6E6E6] text-center text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] not-italic font-normal leading-[3.125rem] tracking-[0.00938rem] pr-[0.3em]">
            تومان
          </div>
          <div className="totalShopping-number cost - text-[#E6E6E6] text-center text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.01563rem]">
            999,999,999
          </div>
        </div>
        <p className="ShoppingCartCost-text - text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
          جمع کل سبد خرید
        </p>
      </div>
      <div className="profit-container calculate-style - border-b-[1px_solid_#707070] pb-[0.3em] - flex justify-between items-center">
        <div className="prise-container - flex items-center ">
          <div className="toman-persian - text-[#00D5FF] text-center text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] not-italic font-normal leading-[3.125rem] tracking-[0.00938rem] pr-[0.3em]">
            تومان
          </div>
          <div className="profit-number cost - text-[#00D5FF] text-center text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.01563rem]">
            999,999,999
          </div>
        </div>
        <p className="ShoppingCartCost-text blue -  text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem] - text-[#00D5FF]">
          سود شما از خرید
        </p>
      </div>
      <div className="totalCost prise-container - flex items-center">
        <div className="toman-persian - text-[#E6E6E6] text-center text-[0.6rem] md:text-[0.7rem] lg:text-[0.9rem] not-italic font-normal leading-[3.125rem] tracking-[0.00938rem] pr-[0.3em]">
          تومان
        </div>
        <div className="cost - text-[#E6E6E6] text-center text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.01563rem]">
          999,999,999
        </div>
      </div>
      <Link to={"/redirect-payment"}>
        <button className="ShoppingCartCost-bule-button - w-[90%] px-[1em] py-[0.2em] cursor-pointer bg-[#00D5FF] text-[#2E2E2E] text-center [font-family:inherit] outline-[none] text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[2.75rem] mb-[1em] border-[1px] border-[solid] border-[#00D5FF] [transition:all_ease-in-out] hover:bg-transparent hover:border-[1px] hover:border-[solid] hover:border-[#00D5FF] hover:text-[#00D5FF]">
          پرداخت
        </button>
      </Link>
    </div>
  );
}
