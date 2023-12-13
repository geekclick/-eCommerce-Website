import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../store/reducers/addressSlice";
import useOnchange from "../../hooks/useOnchange";

export default function Input({ placeholder, name }) {
  const dispatch = useDispatch();
  const { address } = useSelector(({ addressSlice }) => addressSlice);

  const { value, onChange } = useOnchange(address[name]);

  useEffect(() => {
    dispatch(setAddress({ ...address, [name]: value }));
  }, [value, dispatch, name]);

  return (
    <input
      value={value}
      onChange={onChange}
      className="xl:w-full xl:h-[3.5rem] lg:h-[2.5rem] w-full h-[2rem] opacity-[0.8] bg-black text-white xl:text-2xl text-xs md:px-4 px-2 text-right"
      type="text"
      placeholder={placeholder}
    />
  );
}
