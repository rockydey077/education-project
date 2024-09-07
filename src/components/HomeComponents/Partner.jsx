"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import styles from "./Partner.module.css";
import partner1 from "../../../public/assets/partners/BACI.jpg";
import partner2 from "../../../public/assets/partners/BGMEA.jpg";
import partner3 from "../../../public/assets/partners/ILO.png";
import partner4 from "../../../public/assets/partners/ISC.jpg";
import partner5 from "../../../public/assets/partners/REHAB.jpg";
import partner6 from "../../../public/assets/partners/Save-the-Children.jpg";
import partner7 from "../../../public/assets/partners/SDF.jpg";
import partner8 from "../../../public/assets/partners/SEIP.jpg";
import partner9 from "../../../public/assets/partners/SWISS-contact.jpg";
import partner10 from "../../../public/assets/partners/USAID.jpg";
import partner11 from "../../../public/assets/partners/WADHWANI.jpg";
import partner12 from "../../../public/assets/partners/WINROCK.jpg";
import partner13 from "../../../public/assets/partners/World-Bank-Group.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Partner = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-5 px-2 lg:px-0">
      <h1 className="text-[#2D3192] rubik text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        Our Development Partner
      </h1>
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner1}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner2}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner3}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner4}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner5}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner6}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner7}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner8}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner9}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner10}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner11}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner12}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-[43%] w-[50px] h-1 bg-[#2D3192]"></div>
            <Image
              className="w-full border-2 border-[#2D3192] rounded p-5"
              src={partner13}
              width={400}
              height={300}
              alt=""
            />
          </SwiperSlide>
          <div
            className={`${styles.prevButton} text-3xl  hover:bg-[#2D3192] hover:text-white duration-200`}
          >
            <IoIosArrowBack />
          </div>
          <div
            className={`${styles.nextButton} text-3xl hover:bg-[#2D3192] hover:text-white duration-200`}
          >
            <IoIosArrowForward />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
