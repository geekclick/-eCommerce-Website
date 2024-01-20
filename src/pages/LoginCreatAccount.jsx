export default function LoginCreatAccount() {
  return (
    <div className=" bg-LoginBackgroundImage min-h-screen h-screen bg-cover ">
      <div className="login-creat-account-container - h-auto absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2  [@media(max-width:500px)]:w-full w-[90%] max-w-[37.5rem] text-[#e6e6e6] bg-[#000] pt-[2.44em] pr-[2.86em] pb-[0.62em] pl-[4.88em] [font-family:inherit]  flex flex-col justify-center items-center">
        <div className="login-creat-account-links - inline-block mb-[1em]">
          <a
            href="#"
            rel="noopener noreferrer"
            className="login-link - no-underline px-[0.3em] py-[0] text-[#00d5ff] text-center [font-family:inherit]  text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] not-italic font-normal leading-[2.9375rem] focus:text-[#e6e6e6] hover:text-[#e6e6e6] "
          >
            ورود
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className="creat-account-link -  no-underline px-[0.3em] py-[0] text-[#00d5ff] text-center [font-family:inherit] text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] not-italic font-normal leading-[2.9375rem] focus:text-[#e6e6e6] hover:text-[#e6e6e6] [border-right-style:solid] border-r-2 [border-right-color:#00d5ff] "
          >
            ثبت نام
          </a>
        </div>
        <form className="login-creat-account-form - flex flex-col justify-center items-center w-full">
          <label
            htmlFor="phone-number"
            className="enter-phone-number - mb-[1.5em] text-right w-full  text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-extralight leading-[1.5rem] tracking-[0.05313rem]"
          >
            .لطفا شماره موبایل خود را وارد کنید
          </label>
          <input
            type="tel"
            name="phone-number"
            className="phone-number-input-[@media(max-width:400px)]:w-[120%] text-[#e6e6e6] text-[1rem] not-italic font-normal [font-family:inherit] outline-none px-[1em] py-[0] max-w-[27.8125rem] w-[88%] h-[3.4375rem] block mb-[2em] bg-[#5e5e5e] border-[none]  outline-[none] focus:outline-[none] active:outline-[none]"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <input
            type="submit"
            value="ارسال کد تائید"
            className="verification-code-button - px-[1.3em] py-[0.3em] [font-family:inherit] text-[#2e2e2e] text-center  text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-8 tracking-[-0.045rem] bg-[#00d5ff] border-[1px] border-[solid] border-[#00d5ff] mb-[1em] [transition:all_0.3s_ease] cursor-pointer hover:scale-[1.01] hover:bg-transparent hover:text-[#00d5ff] focus:scale-[1.01] focus:bg-transparent focus:text-[#00d5ff]"
          />
        </form>
        <p className="conditions - text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem]  text-right w-full  not-italic font-extralight leading-[2rem] tracking-[0.05313rem]">
          .ورود به منزله قبول{" "}
          <a
            href="#"
            rel="noopener noreferrer"
            className="aimor-conditions - no-underline text-[#00d5ff] relative pb-[0.3em] hover:[border-bottom-style:solid] hover:[border-bottom-color:#00d5ff] hover:border-b hover:pb-[0.5em] [transition:all_300ms_ease-in-out]"
          >
            شرایط اِیمور
          </a>{" "}
          و{" "}
          <a
            href="#"
            rel="noopener noreferrer"
            className="privacy-policy - no-underline text-[#00d5ff] relative pb-[0.3em]   hover:[border-bottom-style:solid] hover:[border-bottom-color:#00d5ff] hover:border-b hover:pb-[0.5em] [transition:all_300ms_ease-in-out]"
          >
            قوانین حریم‌خصوصی
          </a>{" "}
          است{" "}
        </p>
      </div>
    </div>
  );
}
