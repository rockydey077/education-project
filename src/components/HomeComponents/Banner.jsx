import Image from "next/image";
import styles from "./Banner.module.css";
import { TiMediaPlay } from "react-icons/ti";
import bannerImg from "../../../public/assets/banner.png";

const Banner = () => {
  return (
    <div>
      <Image src={bannerImg} width={400} height={300} alt="banner image" className="w-full h-auto mt-20 lg:mt-[75px]" />
    </div>
  );
};

export default Banner;

{
  /* <div className={`${styles.header_bg}`}>
      <div className="hidden lg:flex items-center lg:h-[80vh] inset-0 bg-gradient-to-r from-[#0055A4] to-transparent">
        <div className="lg:w-[70%] oxanium text-white uppercase space-y-5 pl-5">
          <h3 className={`${styles.text_shadow} text-[25px] font-medium`}>
            Saic Polytechnic Institute
          </h3>
          <h2 className={`${styles.text_shadow} text-4xl font-extrabold`}>
            Best Polytechnic Institute In Dhaka
          </h2>
          <h3
            className={`${styles.text_shadow} hidden lg:block hind-siliguri text-[25px] font-semibold`}
          >
            তৈরি করবো প্রকৌশলী দক্ষ, মান সম্মত কর্মসংস্থান আমাদের লক্ষ্য।
          </h3>
          <div className="space-x-5">
            <button className="relative overflow-hidden px-[30px] py-5 rounded-[5px] text-xl font-semibold uppercase text-[#312783] hover:text-white delay-50 duration-300 bg-white border-none focus:outline-none group">
              <span className="relative z-10">Online Campus</span>
              <span className="absolute inset-0 bg-[#0055A4] transition-transform duration-300 ease-out transform translate-x-full group-hover:translate-x-0"></span>
            </button>
            <button className="relative overflow-hidden px-[30px] py-5 rounded-[5px] text-xl font-semibold uppercase text-[#312783] hover:text-white delay-50 duration-300 bg-white border-none focus:outline-none group">
              <span className="relative z-50">Virtual Campus</span>
              <span className="absolute inset-0 bg-[#0055A4] transition-transform duration-300 ease-out transform translate-x-full group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>
        <div className="lg:w-[30%] hidden lg:flex justify-center">
          <div className="text-2xl text-[#FF0000] bg-[#ffffff8c] p-7 rounded-full cursor-pointer">
            <TiMediaPlay />
          </div>
        </div>
      </div>
      <div className="lg:hidden h-[180px] w-full inset-0 bg-gradient-to-t from-[#0055A4] to-transparent flex flex-col items-center justify-end uppercase text-white gap-1">
        <h3 className={`${styles.text_shadow} text-lg font-medium m-0`}>
          Welcome to
        </h3>
        <h3 className={`${styles.text_shadow} text-lg font-medium m-0`}>
          Saic Polytechnic Institute
        </h3>
        <div className="space-x-[10px] pb-3">
          <button className="px-3 py-2 rounded-[5px] text-[13px] font-semibold uppercase text-[#312783] bg-white">
            Online Campus
          </button>
          <button className="px-3 py-2 rounded-[5px] text-[13px] font-semibold uppercase text-[#312783] bg-white">
            Virtual Campus
          </button>
        </div>
      </div>
    </div> */
}
