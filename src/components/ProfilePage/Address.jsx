import React from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../store/reducers/addressSlice";

export default function Address({ name, phoneNumber, desc, onClick, edit }) {
  const dispach = useDispatch();
  const { addressList } = useSelector(({ addressSlice }) => addressSlice);
  const editAddress = () => {
    edit();
    const address = addressList?.find((x) => x.phoneNumber === phoneNumber);
    dispach(setAddress(address));
  };
  return (
    <div className="flex lg:space-x-28 md:space-x-14 xl:text-xl md:text-base text-xs space-x-4 px-4 py-2 xl:py-4 items-center justify-center">
      <div className="flex flex-col xl:space-y-4 space-y-1 justify-center items-center">
        <button
          onClick={onClick}
          className="xl:w-[2rem] xl:h-[2rem] w-[1rem] h-[1rem]"
        >
          <FiEdit className="w-full h-full" onClick={() => editAddress()} />
        </button>
        <p>ویرایش</p>
      </div>
      <p>{name}</p>
      <p>{phoneNumber}</p>
      <p>{desc}</p>
    </div>
  );
}
