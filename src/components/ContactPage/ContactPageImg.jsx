import { BsFillTelephoneFill } from "react-icons/bs";
import ContactPageImage from "/src/assets/ContactPage/1.png";
function ContactPageImg() {
  return (
    <div className="ContactPageImg  bg-black mt-16">
      <div className="bg-ContactPageImage bg-cover h-20 lg:h-44  md:h-32">
        <div className="flex justify-center items-center space-x-2 lg:p-10 md:p-10 p-5">
          <h1 className="text-[0.9rem] md:text-[1.3rem]  flex  items-center gap-x-4 lg:text-[2.2rem] text-center  text-[#E6E6E6]">
            <BsFillTelephoneFill /> Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ContactPageImg;
