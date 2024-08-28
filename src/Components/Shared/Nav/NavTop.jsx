import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const NavTop = () => {
  return (
    <div className=" bg-[#061A3A]  w-full flex items-center">
      <div className="max-w-7xl container mx-auto text-white py-2 md:py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <ul className="flex flex-col md:flex-row items-start md:items-center md:gap-3  lg:gap-10 pl-4 md:pl-0">
          <li className="font-bold text-sm flex items-center gap-2">
            <FaPhone /> (+880)1605336997
          </li>
          <li className="font-bold text-sm flex items-center gap-2">
            <FaEnvelope /> sohagislambd1998@gmail.com
          </li>
          <li className="font-bold text-sm flex items-center gap-2">
            <FaLocationDot /> Dhaka, Bangladesh
          </li>
        </ul>
        <ul className="flex items-center md:gap-2 lg:gap-5">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
