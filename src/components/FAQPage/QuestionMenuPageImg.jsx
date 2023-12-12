import { FaRegQuestionCircle } from "react-icons/fa";

function QuestionMenuPageImg() {
  return (
    <div className="QuestionMenuPageImg  bg-black mt-16">
      <div className="bg-[url('/src/assets/QuestionPage/1.png')] bg-cover h-20 lg:h-44 flex items-center justify-center  md:h-32 m-auto">
        <h1 className="text-[0.9rem] md:text-[1.3rem]  flex  items-center gap-x-4 lg:text-[3rem] text-center text-white font-bold drop-shadow-lg">
        <FaRegQuestionCircle /> FAQ
        </h1>
      </div>
    </div>
  );
}

export default QuestionMenuPageImg;
