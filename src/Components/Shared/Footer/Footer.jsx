import { Typography } from '@material-tailwind/react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="max-w-screen-2xl  container mx-auto bg-black/30  text-white  ">
      <footer className=" max-w-7xl mx-auto p-10">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center ">
            <div className="text-3xl flex flex-col text-center items-center font-bold text-light-blue-600">
              <img
                className="w-32 h-24 rounded-md"
                src="https://i.postimg.cc/JzYG4pvL/studio-pc-2331-47.jpg"
                alt=""
              />
              <h2 className="text-2xl font-bold">Adventure Travel</h2>
            </div>
            <footer className="flex w-full md:w-[60%] justify-between p-5 flex-col md:flex-row  text-center  text-base-content gap-5">
              <nav className="flex flex-col">
                <h6 className="footer-title text-xl">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
              </nav>
              <nav className="flex flex-col">
                <h6 className="footer-title text-xl">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
              </nav>
              <nav className="flex flex-col">
                <h6 className="footer-title text-xl">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
            </footer>
          </div>
          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4  text-center font-normal  md:mb-0"
            >
              &copy; {currentYear}{' '}
              <a href="https://material-tailwind.com/">Adventure Travel</a>. All
              Rights Reserved.
            </Typography>
            <div className="flex gap-4 sm:justify-center">
              <Typography
                as="a"
                className="opacity-80  text-2xl font-bold transition-opacity cursor-pointer hover:scale-[105%] hover:opacity-100"
              >
                <FaFacebook></FaFacebook>
              </Typography>
              <Typography
                as="a"
                className="opacity-80  text-2xl font-bold transition-opacity cursor-pointer hover:scale-[105%] hover:opacity-100"
              >
                <FaInstagram></FaInstagram>
              </Typography>
              <Typography
                as="a"
                className="opacity-80 text-2xl font-bold transition-opacity cursor-pointer hover:scale-[105%] hover:opacity-100"
              >
                {' '}
                <FaGithub></FaGithub>
              </Typography>
              <Typography
                as="a"
                className="opacity-80  text-2xl font-bold transition-opacity cursor-pointer hover:scale-[105%] hover:opacity-100"
              >
                <FaTwitter></FaTwitter>
              </Typography>
              <Typography
                as="a"
                className="opacity-80 cursor-pointer  text-2xl font-bold transition-opacity hover:opacity-100"
              >
                <FaLinkedin></FaLinkedin>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
