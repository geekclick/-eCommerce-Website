import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

function TopFooter() {
  return (
    <div className="TopFooter mt-20">
      <div className="flex flex-col justify-center items-center  text-center gap-y-2">
        <h1 className="text-white text-right text-[1rem] md:text-[1.3rem] lg:text-[2rem]">
          راه حل مشکلت رو پیدا نکردی؟
        </h1>
        <FontAwesomeIcon
          icon={faSquareFull}
          className="text-[#E6E6E6] text-[1rem] md:text-[1.3rem] lg:text-[2rem] p-[4px] flex justify-center items-center"
        />
        <span className="text-white text-right text-[1rem] md:text-[1.3rem] lg:text-[1.5rem]">
            تیکت بزار
        </span>
      </div>
    </div>
  );
}

export default TopFooter;
