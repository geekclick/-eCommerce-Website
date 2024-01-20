import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../store/reducers/cartSlice";
import GameDetails from "./GameDetails";
import BlueIcon from "/src/assets/DigitalPageImages/blue-icon.png";

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(addProduct([product]));
    navigate("/cart");
  };
  return (
    <div className="product--details - w-3/5 bg-[#222222] h-full - [@media(max-width:650px)]:h-auto [@media(max-width:650px)]:w-full mb-3">
      <GameDetails />
      <div className="detail-user-account">
        <div className="detail-label - pr-[0.6em] flex justify-end items-center bg-[#3a3a3a]">
          <h4 className="detail--label - text-[#e6e6e6] text-right text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem] not-italic font-light leading-10 tracking-[0.01875rem] pr-[0.7em]">
            اطلاعات حساب کاربری
          </h4>
          <img src={BlueIcon} alt="" className="detail--icon - w-4 h-4" />
        </div>
        <div className="detail-personal-information - flex flex-col justify-center items-center bg-[#2e2e2e]">
          <input
            type="text"
            placeholder="Username"
            name=""
            className="detail-personal-information-input-style - outline-[none] border-[none] block bg-[#5e5e5e] text-left font-[Inter] text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem] not-italic font-light leading-8 tracking-[0.09375rem] w-[67%] text-[#e6e6e6] mx-[0] my-[1em] px-[0.6em] py-[0] "
          />
          <input
            type="password"
            placeholder="Password"
            name=""
            className="detail-personal-information-input-style - outline-[none] border-[none] block bg-[#5e5e5e] text-left font-[Inter] text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem] not-italic font-light leading-8 tracking-[0.09375rem] w-[67%] text-[#e6e6e6] mx-[0] my-[1em] px-[0.6em] py-[0] "
          />
        </div>
      </div>
      <div className="detail-shopping-basket--cost - [@media(max-width:600px)]:flex-col [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:items-center  - flex justify-evenly items-center bg-[#3a3a3a] px-[0] py-[1em]">
        <button
          onClick={() => onClick()}
          className="detail-shopping-basket-button -  [@media(max-width:600px)]:order-1 cursor-pointer outline-[none] border-[1px] border-[solid] border-[#00d5ff] bg-[#00d5ff] text-[#2e2e2e] text-center  text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] not-italic font-normal px-[1em] py-[0.5em] [transition:0.3s] hover:text-[#00d5ff] hover:bg-[#2e2e2e] focus:text-[#00d5ff] focus:bg-[#2e2e2e]"
        >
          افزودن به سبد خرید
        </button>
        <div className="detail-cost flex items-center justify-center  [@media(max-width:600px)]:order-0">
          <div className="persian--cost - text-[#e6e6e6] text-center [font-family:inherit] text-[0.5rem] md:text-[0.6rem] lg:text-[1rem] not-italic font-normal leading-[2rem] tracking-[0.07813rem] inline-block pr-[0.2em]">
            تومان
          </div>
          <div className="english-cost - text-[#e6e6e6] text-center font-[Inter] text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] not-italic font-normal leading-[3rem] tracking-[0.14063rem] inline-block pr-[0.2em]">
            10,000,000
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
