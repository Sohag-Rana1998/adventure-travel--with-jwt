import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="w-full container mx-auto py-10">
      <Helmet>
        <title>Adventure Travel | Contact Us</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="w-full space-y-4">
          <h2 className="text-3xl font-bold">Adventure Travel</h2>
          <p>
            Always ready to be your friend. Come & Contact with us to share your{' '}
            <br />
            memorable moments, to share with your best companion.
          </p>
          <div className=" text-3xl flex items-center gap-6">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
          </div>
          <div className=" space-y-3">
            <h1 className="text-3xl mt-10 font-bold ">Get In Touch</h1>
            <div className="flex items-center gap-5">
              <FaPhoneAlt></FaPhoneAlt>
              <p>+88 01533 333 333</p>
            </div>
            <div className="flex items-center gap-5">
              <MdEmail></MdEmail>
              <p>info@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <FaLocationDot></FaLocationDot>
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-4">
          <h2 className="text-3xl font-bold ">Connect with Us</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full border-2 border-purple-400 input"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full input border-2 border-purple-400"
            name=""
            id=""
          />
          <textarea
            name=""
            placeholder="Message"
            className="w-full p-5 textarea border-2 border-purple-400"
            id=""
            cols="20"
            rows="5"
          ></textarea>
          <button className="btn rounded-3xl border-2 border-purple-400 bg-white bg-opacity-20">
            Send Message
          </button>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ContactUs;
