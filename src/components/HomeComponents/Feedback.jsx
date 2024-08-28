"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import reviewImg1 from "../../../public/assets/reviewsImg/Siam-Hossain.jpg";
import styles from "./Feedback.module.css";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-5 px-2 lg:px-0">
      <h1 className="text-[#0055A4] rubik text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        Student Feedback
      </h1>
      <div className="">
        <Swiper
          spaceBetween={30}
          speed={1700}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div className="pl-[35px] space-y-4 pr-[35px] lg:pr-0">
              <p className="rubik text-sm lg:text-lg font-normal">
                Technical and vocational education are highly valued in todays
                society, and SAIC Polytechnic Institute actively meeting this
                demand. Upon obtaining my diploma in Computer Science and
                Technology from SIMT, myself Md. Jihad Ahmed Ovi transitioned
                into a good student skilled in many technical knowledge. Thanks
                to my institutes strong educational support.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={reviewImg1}
                    width={50}
                    heigh={50}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="rubik text-xl text-[#0055a4] font-semibold">
                    Rocky Dey
                  </h4>
                  <p className="text-[15px] text-[#7A7A7A] font-normal">
                    Session 2018-2019
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="pl-[35px]  space-y-4 pr-[35px] lg:pr-0">
              <p className="rubik text-sm lg:text-lg font-normal">
                Technical and vocational education are highly valued in todays
                society, and SAIC Polytechnic Institute actively meeting this
                demand. Upon obtaining my diploma in Computer Science and
                Technology from SIMT, myself Md. Jihad Ahmed Ovi transitioned
                into a good student skilled in many technical knowledge. Thanks
                to my institutes strong educational support.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={reviewImg1}
                    width={50}
                    heigh={50}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="rubik text-xl text-[#0055a4] font-semibold">
                    Rocky Dey
                  </h4>
                  <p className="text-[15px] text-[#7A7A7A] font-normal">
                    Session 2018-2019
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="pl-[35px] space-y-4 pr-[35px] lg:pr-0">
              <p className="rubik text-sm lg:text-lg font-normal">
                Technical and vocational education are highly valued in todays
                society, and SAIC Polytechnic Institute actively meeting this
                demand. Upon obtaining my diploma in Computer Science and
                Technology from SIMT, myself Md. Jihad Ahmed Ovi transitioned
                into a good student skilled in many technical knowledge. Thanks
                to my institutes strong educational support.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={reviewImg1}
                    width={50}
                    heigh={50}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="rubik text-xl text-[#0055a4] font-semibold">
                    Rocky Dey
                  </h4>
                  <p className="text-[15px] text-[#7A7A7A] font-normal">
                    Session 2018-2019
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="pl-[35px] space-y-4 pr-[35px] lg:pr-0">
              <p className="rubik text-sm lg:text-lg font-normal">
                Technical and vocational education are highly valued in todays
                society, and SAIC Polytechnic Institute actively meeting this
                demand. Upon obtaining my diploma in Computer Science and
                Technology from SIMT, myself Md. Jihad Ahmed Ovi transitioned
                into a good student skilled in many technical knowledge. Thanks
                to my institutes strong educational support.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={reviewImg1}
                    width={50}
                    heigh={50}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="rubik text-xl text-[#0055a4] font-semibold">
                    Rocky Dey
                  </h4>
                  <p className="text-[15px] text-[#7A7A7A] font-normal">
                    Session 2018-2019
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="pl-[35px] space-y-4 pr-[35px] lg:pr-0">
              <p className="rubik text-sm lg:text-lg font-normal">
                Technical and vocational education are highly valued in todays
                society, and SAIC Polytechnic Institute actively meeting this
                demand. Upon obtaining my diploma in Computer Science and
                Technology from SIMT, myself Md. Jihad Ahmed Ovi transitioned
                into a good student skilled in many technical knowledge. Thanks
                to my institutes strong educational support.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={reviewImg1}
                    width={50}
                    heigh={50}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="rubik text-xl text-[#0055a4] font-semibold">
                    Rocky Dey
                  </h4>
                  <p className="text-[15px] text-[#7A7A7A] font-normal">
                    Session 2018-2019
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="pl-[35px] space-y-4 pr-[35px] lg:pr-0">
              <p className="rubik text-sm lg:text-lg font-normal">
                Technical and vocational education are highly valued in todays
                society, and SAIC Polytechnic Institute actively meeting this
                demand. Upon obtaining my diploma in Computer Science and
                Technology from SIMT, myself Md. Jihad Ahmed Ovi transitioned
                into a good student skilled in many technical knowledge. Thanks
                to my institutes strong educational support.
              </p>
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={reviewImg1}
                    width={50}
                    heigh={50}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="rubik text-xl text-[#0055a4] font-semibold">
                    Rocky Dey
                  </h4>
                  <p className="text-[15px] text-[#7A7A7A] font-normal">
                    Session 2018-2019
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div
            className={`${styles.prevButton} text-3xl left-0 text-[#0055A4]`}
          >
            <IoIosArrowBack />
          </div>
          <div
            className={`${styles.nextButton} text-3xl right-0 text-[#0055A4]`}
          >
            <IoIosArrowForward />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
