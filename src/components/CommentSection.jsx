export default function CommentSection({ date, name, comment }) {
  return (
    <div className="CommentSection flex justify-start items-center mb-12 ml-10">
      <div className="flex flex-col justify-center border-[#E6E6E6] border-[1px] w-[55%] md:w-3/4 lg:w-3/4 p-2 md:p-3 lg:p-3">
        <div className="flex flex-row-reverse gap-5">
          <h1 className="text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-[#E6E6E6]">
            {name}
          </h1>
          <h1
            dir="rtl"
            className="text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-[#c3c2c2]"
          >
            {date.match(/\b\w{3} \d{1,2} \d{4}\b/)}
          </h1>
        </div>
        <p className="text-right text-[0.7rem] md:text-[1rem] lg:text-[1rem]  text-[#E6E6E6] mt-4 md:mt-5 lg:mt-5">
          {comment}
        </p>
      </div>
    </div>
  );
}
