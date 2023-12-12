import { Link } from "react-router-dom";

function ShoppingCartCost() {
  return (
    <div className="ShoppingCartCost-container   w-1/2 p-[1em] max-w-[25rem] border-[1px] border-[solid] border-[#707070] bg-[#0F0F0F] h-full [@media(max-width:900px)]:order-1 [@media(max-width:900px)]:w-full [@media(max-width:900px)]:mx-[auto] [@media(max-width:900px)]:my-[0] [@media(max-width:900px)]:mb-[1em]">
      <div className="totalShopping calculate-style - flex justify-between items-center">
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
      <div className="discount-container">
        <div className="discount-btn - flex items-center justify-between w-3/5">
          <button className="sign-btn - text-[#00D5FF] text-center [font-family:inherit] text-[0.9rem] md:text-[0.7rem] lg:text-[1rem] not-italic font-normal tracking-[0.00938rem] border-[1px] border-[solid] border-[#00D5FF] bg-transparent px-[1em] py-[0.5em] cursor-pointer focus:bg-[#00D5FF] focus:text-[#0F0F0F] hover:bg-[#00D5FF] hover:text-[#0F0F0F]">
            ثبت
          </button>
          <input
            className="sign-input - text-[#E6E6E6] text-[0.9rem] md:text-[0.7rem] lg:text-[1rem] bg-transparent border-[1px] border-[solid] border-[#E6E6E6] outline-[none] p-[0.51em] w-[70%]"
            type="text"
            name=""
            id=""
          />
        </div>
        <p className="ShoppingCartCost-text - text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
          کد تخفیف داری؟
        </p>
      </div>
      <Link to={"/payment"}>
        <button className="ShoppingCartCost-bule-button - w-[90%] px-[1em] py-[0.2em] cursor-pointer bg-[#00D5FF] text-[#2E2E2E] text-center [font-family:inherit] outline-[none] text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[2.75rem] mb-[1em] border-[1px] border-[solid] border-[#00D5FF] [transition:all_ease-in-out] hover:bg-transparent hover:border-[1px] hover:border-[solid] hover:border-[#00D5FF] hover:text-[#00D5FF]">
          انتخاب آدرس و پرداخت
        </button>
      </Link>
    </div>
  );
}

export default ShoppingCartCost;
