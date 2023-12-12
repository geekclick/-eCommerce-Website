function MyBasket(props) {
  return (
    <div className="MyBasket-containerr - flex border-[2.5px] border-[solid] border-[#00D5FF] bg-[rgba(0,_213,_255,_0.06)] justify-between items-center p-[0.7em] mx-[0] my-[1em]">
      <div className="prise-container mybasket flex items-center">
        <div className="toman-persian md:text-[0.7rem] lg:text-[0.9rem] text-[#E6E6E6] text-center text-[0.4rem] not-italic font-normal leading-[3.125rem] tracking-[0.00938rem] pr-[0.3em]">
          تومان
        </div>
        <div className="profit-number cost text-[#E6E6E6] text-center text-[0.5rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.01563rem]">
          999,999,999
        </div>
      </div>
      <div className="number-of-product -  text-[0.5rem] md:text-[0.9rem] lg:text-[0.6rem] text-[#E6E6E6] text-center not-italic font-normal leading-[3.125rem] tracking-[0.01563rem]">
        - 1 +
      </div>
      <div className="product - flex items-center flex-col justify-center">
        <div className="product-name - text-[#E6E6E6] text-[0.4rem] md:text-[0.8rem] lg:text-[0.6rem] not-italic font-normal leading-[3rem] tracking-[0.0125rem]">
          {props.productTitle}
        </div>
        {props.productImg && (
          <img
            src={props.productImg}
            alt=""
            className="product-img w-20 h-20 aspect-square"
          />
        )}
      </div>
    </div>
  );
}

export default MyBasket;
