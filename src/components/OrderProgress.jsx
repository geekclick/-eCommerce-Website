import { IoSquareOutline } from "react-icons/io5";
let productState =3;
let stateInfo = [
  { accepted: true, text: "تائید شده", index: 0 },
  {
    doing: false,
    text: " در حال انجام",
    index: 1,
  },
  {
    posted: false,
    text: " ارسال شده",
    index: 2,
  },
  {
    delivered: false,
    text: " تحویل شده",
    index: 3,
  },
];
export default function OrderProgress() {
  return (
    <div className="OrderProgress flex  justify-center items-center mt-5 md:mt-8 lg:mt-10">
      <div className="flex flex-col justify-end items-end rounded border-[1px] border-[#999] w-[90%] p-5">
        <div className="flex flex-row-reverse justify-center items-center align-center gap-x-2">
          <h1 className="text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6]">
            پرداخت موفق
          </h1>
          <IoSquareOutline className="text-[2rem] md:text-[3rem] lg:text-[5rem] mt-0 md:mt-0 lg:mt-1 text-[#0dfca0]" />
        </div>
        <p className="text-[0.7rem] md:text-[1rem] lg:text-[1.5rem]  mt-5 md:mt-8 lg:mt-10">
          پرداخت شما با موفقیت انجام شد. کد پیگیری پرداخت شما 123456789 می باشد
        </p>

        <div className="flex flex-row-reverse justify-center w-full   mt-5 md:mt-8 lg:mt-10 mb-3 md:mb-6 lg:mb-6 ">
          {stateInfo.map((state, index) => {
            return (
              <span key={index} className="flex flex-row-reverse">
                <div
                  className={
                    state.index <= productState
                      ? "relative w-7 lg:w-10 md:w-8 h-7 lg:h-10  md:h-8 bg-[#0dfca0]  border-[1px] border-[#0dfca0] rounded-full  text-[#0dfca0]"
                      : "relative w-7 lg:w-10 md:w-8 h-7 lg:h-10 md:h-8  bg-transparent  border-[1px] border-[#0dfca0]  rounded-full"
                  }
                >
                  <p className="text-[0.6rem] md:text-[0.9rem] lg:text-[1rem] absolute w-20 top-8 md:top-10  lg:top-10 md:right-[-30px] lg:right-[-20px] right-[-45px]">
                    {state.text}
                  </p>
                </div>
                {renderLine()}
              </span>
            );
            function renderLine() {
              if (state.index == 3) {
                return (
                  <div
                    className={
                      state.index <= productState
                        ? " h-[1px] w-[1em] md:w-[3em] lg:w-[4em] mt-3 md:mt-4 lg:mt-5 bg-[#0dfca0]  border-[1px] border-[#0dfca0]  "
                        : "bg-gray-600 h-[1px] w-[1em] md:w-[3em] lg:w-[4em] mt-3 md:mt-4 lg:mt-5"
                    }
                  ></div>
                );
              } else {
                return (
                  <div
                    className={
                      state.index <= productState
                        ? "h-[1px] w-[2em] md:w-[4em] lg:w-[5em] mt-3 md:mt-4 lg:mt-5 bg-[#0dfca0]  border-[1px] border-[#0dfca0]  "
                        : "bg-gray-600 h-[1px] w-[2em] md:w-[4em] lg:w-[5em] mt-3 md:mt-4 lg:mt-5"
                    }
                  ></div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}
