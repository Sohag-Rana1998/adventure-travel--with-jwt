import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { GrLinkNext } from "react-icons/gr";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Experience The Unseen!"],
    loop: 3,
  });
  const [text2] = useTypewriter({
    words: ["Discover The World!"],
    loop: 3,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  return (
    <div className=" w-full  mx-auto  ">
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="w-full mySwiper h-[650px] overflow-hidden"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className=" w-full relative  h-full">
            <div className="inset-0 absolute z-10">
              <img
                src="https://i.postimg.cc/wx1Q3khc/banner-4.jpg"
                alt=""
                className="h-full w-full zoom-infinite"
              />
              <div className="inset-0 absolute bg-black bg-opacity-40"></div>
            </div>
            <div className="h-full relative z-20 w-full flex justify-center items-center">
              <div className="flex flex-col text-white justify-center items-center ">
                <p className="font-semibold   text-center md:text-left text-white border-b-4  ">
                  <span>{text}</span>
                </p>

                <p className="xl:text-[70px] leading-none lg:text-[60px] md:text-[40px] text-white text-[30px] font-bold text-center">
                  {text2}
                </p>
                <p className="font-medium  md:text-lg text-center text-white">
                  Find awesome flights, hotel, tour, car and packages
                </p>

                <div className="flex justify-center md:justify-start">
                  <Link to={"/all-tourist-spot"}>
                    <btn className="btn-bg hover:bg-gray-900 py-3 mt-3 flex items-center gap-2 px-3 rounded text-white font-semibold border-none">
                      Explore Now <GrLinkNext />
                    </btn>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 02 */}
        <SwiperSlide>
          <div className=" w-full relative  h-full">
            <div className="inset-0 absolute z-10">
              <img
                src="https://i.postimg.cc/NMgCW2VC/banner-3.jpg"
                alt=""
                className="h-full w-full zoom-infinite"
              />
              <div className="inset-0 absolute bg-black bg-opacity-40"></div>
            </div>
            <div className="h-full relative z-20 w-full flex justify-center items-center">
              <div className="flex flex-col text-white justify-center items-center ">
                <p className="font-semibold   text-center md:text-left text-white border-b-4  ">
                  EXPLORE WONDERFUL EXPERIENCE
                </p>

                <p className="xl:text-[70px] leading-none lg:text-[60px] md:text-[40px]  text-white text-[30px] font-bold text-center">
                  Your One Stop Gateway <br /> to Southeast Asia
                </p>
                <p className="font-medium  md:text-lg text-center text-white">
                  Find awesome flights, hotel, tour, car and packages
                </p>

                <div className="flex justify-center md:justify-start">
                  <Link to={"/all-tourist-spot"}>
                    {" "}
                    <btn className="btn-bg hover:bg-gray-900 py-3 mt-3 flex items-center gap-2 px-3 rounded text-white font-semibold border-none">
                      Explore Now <GrLinkNext />
                    </btn>
                  </Link>
                </div>
              </div>

              {/* left */}
            </div>
          </div>
        </SwiperSlide>
        {/* slide 03 */}
        <SwiperSlide>
          <div className=" w-full relative  h-full">
            <div className="inset-0 absolute z-10">
              <img
                src="https://i.postimg.cc/15kQbMKW/banner-5.jpg"
                alt=""
                className="h-full w-full zoom-infinite"
              />
              <div className="inset-0 absolute bg-black bg-opacity-40"></div>
            </div>
            <div className="h-full relative z-20 w-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center ">
                <p className="font-semibold  uppercase  mb-3 text-center md:text-left text-white border-b-4  ">
                  Experience The New
                </p>

                <p className="xl:text-[70px] leading-none lg:text-[60px] md:text-[40px] text-white text-[30px] font-bold text-center">
                  Lets Make Your Best Trip Ever!
                </p>
                <p className="font-medium text-white text-black/60 md:text-lg text-center">
                  your next great adventure, become an explorer to get started!
                </p>

                <div className="flex justify-center md:justify-start">
                  <Link to={"/all-tourist-spot"}>
                    {" "}
                    <btn className="btn-bg hover:bg-gray-900 py-3 mt-3 flex items-center gap-2 px-3 rounded text-white font-semibold border-none">
                      Explore Now <GrLinkNext />
                    </btn>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
