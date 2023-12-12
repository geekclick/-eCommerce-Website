function QuestionMenu() {
  return (
    <div className="QuestionMenu  bg-black flex justify-center items-center my-12">
      <span className="text-center  flex flex-row-reverse justify-center lg:space-x-10 md:space-x-5  items-center border-b-[1px] border-[#E6E6E6] w-11/12 md:w-3/4 lg:w-4/5 py-3">
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] border-l-[1px] border-[#E6E6E6] lg:px-4 px-2">
            حریم خصوصی
          </span>
        </a>
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] border-l-[1px] border-[#E6E6E6] lg:px-4 px-2">
            شرایط استفاده
          </span>
        </a>
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] border-l-[1px] border-[#E6E6E6] lg:px-4 px-2">
            رویه ثبت و تحویل سفارش
          </span>
        </a>
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem]  lg:px-4 px-2">
            گزارش باگ
          </span>
        </a>
      </span>
    </div>
  );
}

export default QuestionMenu;
