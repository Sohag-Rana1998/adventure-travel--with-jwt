import UseTestimonials from "../../../Components/useHooks/useTestimonials/UseTestimonials";
import { Rating } from "@material-tailwind/react";
import { Slide } from "react-awesome-reveal";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const { reviews, isLoading, refetch } = UseTestimonials();
  const [slidesPerView, setSlidesPerView] = useState(
    getSlidesPerView(window.innerWidth)
  );

  const [toggle, setToggle] = useState(true);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getSlidesPerView(width) {
    if (width > 920) {
      return 3;
    } else if (width <= 920 && width > 620) {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <div className="my-10">
      <div className="text-center mb-5">
        <Slide cascade>
          <h3 className="text-xl font-bold underline underline-offset-4">
            REVIEW & TESTIMONIALS
          </h3>

          <h1 className="text-5xl font-bold"> Top Reviews For Us</h1>
        </Slide>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper  max-w-7xl container mx-auto "
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {reviews?.map((testimonial) => (
          <SwiperSlide className="h-full " key={testimonial.id}>
            <div
              key={testimonial._id}
              className="container  mx-auto  bg-white shadow-xl rounded-lg text-gray-900"
            >
              <div className="rounded-t-lg bg-blue-300 h-24 overflow-hidden">
                {/* <img
                className="object-cover object-top w-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              /> */}
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center h-32"
                  src={testimonial.img}
                />
              </div>
              <div className="w-full flex px-5 pb-5 flex-col items-center justify-center text-center mx-auto mt-2">
                <h2 className="font-semibold">{testimonial.user}</h2>
                <h2 className="font-semibold">From:{testimonial.location}</h2>
                <p className=" font-semibold">
                  <Rating value={parseInt(testimonial?.rating)} className="" />
                </p>
                <p className=" font-semibold">
                  {testimonial?.comment?.slice(0, 150)}.....
                </p>
                <Link to={`/full-review/${testimonial._id}`}>
                  <span className="underline cursor-pointer font-bold flex items-center">
                    Continue Reading <IoMdArrowRoundForward />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {toggle ? (
          <div className="autoplay-progress hidden" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        ) : (
          <></>
        )}
        <div className="mt-8 flex justify-end">
          <Link to={"/add-review"}>
            {" "}
            <button className="btn bg-blue-500 text-white">Add a Review</button>
          </Link>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
