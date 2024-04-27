import { EffectFade, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Banner = () => {
  return (
    <div className="max-w-7xl w-full container mx-auto  lg:h-[500px]  bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]">
      <Swiper
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper h-[500px] rounded-xl"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className=" w-full bg-[url(https://i.postimg.cc/zvfKDjcT/longest-sea-beach-in.jpg)] bg-no-repeat bg-center bg-cover h-full">
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col text-white justify-center items-center ">
                <p className="font-semibold  mb-3 text-center md:text-left text-white border-b-4  ">
                  Experience The Unseen!
                </p>

                <p className="xl:text-[70px] lg:text-[60px] md:text-[40px] text-white text-[30px] font-bold text-center">
                  Explore the world With Us
                </p>
                <p className="font-medium  md:text-lg text-center text-white">
                  Find awesome flights, hotel, tour, car and packages
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-orange-500 py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div className=" w-full bg-[url(https://i.postimg.cc/Y08m64hN/be.jpg)] bg-no-repeat bg-center bg-cover h-full">
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col text-white justify-center items-center ">
                <p className="font-semibold  mb-3 text-center md:text-left text-white border-b-4  ">
                  EXPLORE WONDERFUL EXPERIENCE
                </p>

                <p className="xl:text-[70px] lg:text-[60px] md:text-[40px] text-white text-[30px] font-bold text-center">
                  Your One Stop Gateway <br /> to Southeast Asia
                </p>
                <p className="font-medium  md:text-lg text-center text-white">
                  Find awesome flights, hotel, tour, car and packages
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-orange-500 py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className=" w-full bg-[url(https://i.postimg.cc/QCr5qk6T/cameron-highlands-trail.jpg)] bg-no-repeat bg-center bg-cover h-full">
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center ">
                <p className="font-semibold  mb-3 text-center md:text-left text-white border-b-4  ">
                  Your Trusted Holiday Partner
                </p>

                <p className="xl:text-[70px] lg:text-[60px] md:text-[40px] text-white text-[30px] font-bold text-center">
                  Explore Your Travel Discover
                </p>
                <p className="font-medium text-white text-black/60 md:text-lg text-center">
                  your next great adventure, become an explorer to get started!
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
            </div>
          </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide>
          <div className=" w-full bg-[url(https://i.postimg.cc/xTVtMSDp/83.jpg)] bg-no-repeat bg-center bg-cover h-full">
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center ">
                <p className="font-semibold  mb-3 text-center md:text-left text-white border-b-4  ">
                  Your Trusted Holiday Partner
                </p>

                <p className="xl:text-[70px] lg:text-[60px] md:text-[40px] text-white text-[30px] font-bold text-center">
                  Lets Make Your Best Trip Ever!
                </p>
                <p className="font-medium text-white text-black/60 md:text-lg text-center">
                  your next great adventure, become an explorer to get started!
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
            </div>
          </div>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide>
          <div className=" w-full bg-[url(https://i.postimg.cc/MH9pKHZv/a3.jpg)] bg-no-repeat bg-center bg-cover h-full">
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col text-white justify-center items-center ">
                <p className="font-semibold  mb-3 text-center md:text-left text-white border-b-4  ">
                  Discover The New Horizons!
                </p>

                <p className="xl:text-[70px] lg:text-[60px] md:text-[40px] text-white text-[30px] font-bold text-center">
                  Embark On A Epic Journey With Us!
                </p>
                <p className="font-medium text-white text-black/60 md:text-lg text-center">
                  your next great adventure, become an explorer to get started!
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    Explore Now
                  </button>
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
