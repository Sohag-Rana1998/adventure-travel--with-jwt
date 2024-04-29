import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);

  const markerIcon = new Icon({
    iconUrl: '/location-2955 (1).png',
    iconSize: [45, 45],
  });

  const handleSent = () => {
    setLoading(true);
    setTimeout(() => {
      setTimeout(setLoading, 500, false);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    }, 500);
  };

  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="w-full container mx-auto py-10">
      <Helmet>
        <title>Adventure Travel | Contact Us</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full space-y-4">
          <Fade cascade>
            <h2 className="text-3xl font-bold">Adventure Travel</h2>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your <br />
              memorable moments, to share with your best companion.
            </p>
            <div className=" text-3xl flex items-center gap-6">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
            </div>

            <h1 className="text-3xl mt-10 font-bold ">Get In Touch</h1>
            <div className=" space-y-3">
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
          </Fade>
        </div>
        <Zoom>
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
            <button
              onClick={handleSent}
              className="btn rounded-3xl border-2 border-purple-400 bg-white bg-opacity-20"
            >
              Send Message
            </button>
          </div>
        </Zoom>
      </div>

      <div className="my-20">
        <div>
          <h1 className="text-5xl font-bold font-play text-center my-5">
            Connect with one of our global offices
          </h1>
        </div>
        <div className="w-full h-[500px]">
          <MapContainer
            className="h-full w-full"
            center={[25.0318, 55.19]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[25.0318, 55.19]} icon={markerIcon}>
              <Popup>Dubai Production City,United Arab Emirates</Popup>
              <Tooltip>Dubai Production City,United Arab Emirates</Tooltip>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ContactUs;
