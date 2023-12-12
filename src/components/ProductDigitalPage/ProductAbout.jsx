import CommentSection from "./CommentSection";
function ProductAbout({ src }) {
  return (
    <div className="product--about - w-2/5 h-full pl-[0.8em] - [@media(max-width:650px)]:order-none [@media(max-width:650px)]:h-auto [@media(max-width:650px)]:w-full [@media(max-width:650px)]:pl-[0em] [@media(max-width:650px)]:mb-[1.5em]">
      <div className="product--about-game-section">
        <img
          src={src}
          alt=""
          className="product-image - w-full max-w-[34.375rem] mb-[1em] - [@media(max-width:650px)]:w-full [@media(max-width:650px)]:max-w-full [@media(max-width:650px)]:mb-[1em]"
        />
        <h2 className="product-name-heading - text-[#e6e6e6] mb-[0.6em] text-center text-[1.7rem] md:text-[1.7rem] lg:text-[1.7rem] not-italic font-extrabold leading-[1.5625rem] tracking-[-0.01406rem]">
          GAME NAME
        </h2>
        <p className="product-short-about product-p-about-style text-[#e6e6e6] text-right  text-[0.7rem] md:text-[0.7rem] lg:text-[1rem] not-italic font-normal leading-6 tracking-[-0.0075rem] [border-bottom-color:#5e5e5e] border-b [border-bottom-style:solid] px-[0] py-[1.2em] mb-[1.1em]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه ومجله درستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <p className="product-long-about product-p-about-style text-[#e6e6e6] text-right  text-[0.7rem] md:text-[0.7rem] lg:text-[1rem] not-italic font-normal leading-6 tracking-[-0.0075rem] [border-bottom-color:#5e5e5e] border-b [border-bottom-style:solid] px-[0] py-[1.2em] mb-[1.1em] pb-[5em]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه ومجله درستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است چاپگرها و متون بلکه روزنامه ومجله درستون و سطرآنچنان که
          لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید
          سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
          متون بلکه روزنامه ومجله درستون و سطرآنچنان که لازم است، و برای شرایط
          فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          ومجله درستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
          نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است چاپگرها و متون بلکه روزنامه ومجله درستون و سطرآنچنان
          که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید
          سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
          متون بلکه روزنامه ومجله درستون و سطرآنچنان که لازم است، و برای شرایط
          فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          ومجله درستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
          نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
      </div>
      <CommentSection />
    </div>
  );
}
export default ProductAbout;
