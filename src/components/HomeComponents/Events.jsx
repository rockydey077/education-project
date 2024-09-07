"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Events.module.css";
import events1 from "../../../public/assets/events/2-768x576.jpg";

const Events = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-5 px-2 lg:px-0">
      <h1 className="text-[#2D3192] rubik text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        News & Events
      </h1>
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1800}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] hover:bg-[#000000] duration-300 text-white uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border border-[#2D3192] rounded-md">
            <div>
              <Image
                className="rounded-t-md w-full"
                src={events1}
                width={400}
                height={300}
                alt=""
              />
            </div>
            <div className="p-[30px] min-h-[200px] flex flex-col justify-between">
              <p className="text-[#e10b18] text-base font-medium rubik text-center">
                On Campus JOBS. Fair And Appropriate Technology Ltd Live
                Interview
              </p>
              <button className="w-full bg-[#2D3192] text-white hover:bg-[#000000] duration-300 uppercase mt-[15px] oxanium text-base font-semibold px-5 py-[10px] rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <div
            className={`${styles.prevButton} text-3xl left-0 lg:left-[10px] hover:bg-[#000000] hover:text-white duration-200`}
          >
            <IoIosArrowBack />
          </div>
          <div
            className={`${styles.nextButton} text-3xl right-0 lg:right-[10px] hover:bg-[#000000] hover:text-white duration-200`}
          >
            <IoIosArrowForward />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
