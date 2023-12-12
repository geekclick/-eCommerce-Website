import { useDispatch } from "react-redux";
import { toggleState } from "../../store/reducers/commonSlice";

export default function ButtonSection({ buttonState }) {
  const dispatch = useDispatch();
  const setCurrentState = (state) => {
    dispatch(toggleState(state));
  };
  return (
    <div className="ButtonSection">
      <div className="mt-4 md:mt-10 lg:mt-12 w-4/5 h-[1px] bg-[#8c969759] mx-auto"></div>
      <div className="flex justify-center mt-4 md:mt-5 lg:mt-10">
        <button
          onFocus={() => {
            !buttonState
              ? setCurrentState(!buttonState)
              : setCurrentState(buttonState);
          }}
          className={`text-center text-[0.6rem] md:text-[1rem] lg:text-[1.2rem] w-1/5 rounded-s border-[1px] border-[#00d5ff] py-1.5 transition-all ${
            buttonState ? "bg-[#00d5ff] text-white" : "bg-black text-[#00d5ff]"
          }`}
        >
          Physical
        </button>
        {/* </button> */}
        <button
          onFocus={() => {
            buttonState
              ? setCurrentState(!buttonState)
              : setCurrentState(buttonState);
          }}
          className={`text-center text-[0.6rem] md:text-[1rem] lg:text-[1.2rem] w-1/5 rounded-e border-[1px] border-[#00d5ff] py-1.5 transition-all ${
            !buttonState ? "bg-[#00d5ff] text-white" : "bg-black text-[#00d5ff]"
          }`}
        >
          Digital
        </button>
      </div>
    </div>
  );
}
