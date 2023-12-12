import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../store/reducers/addressSlice";

export default function Input({ placeholder, name }) {
  const dispatch = useDispatch();
  const { address } = useSelector(({ addressSlice }) => addressSlice);
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    dispatch(setAddress({ ...address, [name]: value }));
  }, [value]);
  return (
    <input
      value={address[name]}
      onChange={handleChange}
      className="xl:w-full xl:h-[3.5rem] lg:h-[2.5rem] w-full h-[2rem] opacity-[0.8] bg-black text-white xl:text-2xl text-xs md:px-4 px-2 text-right"
      type="text"
      placeholder={placeholder}
    />
  );
}
