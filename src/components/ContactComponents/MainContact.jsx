import Image from "next/image";
import mainImg from "../../../public/assets/contact/building-956x1024.jpg";
import { Sofia } from "next/font/google";
import styles from "./MainContact.module.css";
import { MdEmail, MdLocationOn, MdWifiCalling3 } from "react-icons/md";

const sofia = Sofia({
  weight: ["400"],
  subsets: ["latin"],
});

const MainContact = () => {
  return (
    <div className="bg-[#FFF7F7]">
      <div className="max-w-[1360px] mx-auto py-[50px] flex flex-col lg:flex-row lg:gap-[5%] gap-5 px-2 lg:px-0">
        <div className="lg:w-[54%] space-y-5">
          <h1 className={`${sofia.className} text-3xl`}>
            Wish to enquire about admissions, syllabus, or anything else? You
            can walk in during office hours, give us a call.
          </h1>
          {/* Address */}
          <div
            className={`flex items-center gap-5 ${styles["div-shadow"]} rounded-e-[5px]`}
          >
            <div className="bg-[#0055A4] h-28 w-24 flex justify-center items-center text-5xl text-white  rounded-s-[5px]">
              <MdLocationOn />
            </div>
            <div className={`space-y-[5px] flex-1`}>
              <h3 className="text-[25px] uppercase rubik font-semibold">
                Address
              </h3>
              <div className="w-14 h-1 bg-[#0055A4]"></div>
              <p className="text-xl rubik font-semibold">
                M/3, Section-14, Mirpur, Dhaka-1216
              </p>
            </div>
          </div>
          {/* Mobile */}
          <div
            className={`${styles["div-shadow"]} gap-5 flex items-center rounded-e-[5px]`}
          >
            <div className="bg-[#0055A4] h-28 w-24 flex items-center justify-center text-5xl text-white px-5 rounded-s-[5px] py-10">
              <MdWifiCalling3 />
            </div>
            <div className="space-y-[5px] flex-1">
              <h3 className="text-[25px] uppercase rubik font-semibold">
                Mobile
              </h3>
              <div className="w-14 h-1 bg-[#0055A4]"></div>
              <p className="text-xl rubik font-semibold">
                01936-005817, 01936-005818
              </p>
            </div>
          </div>
          {/* Email */}
          <div
            className={`${styles["div-shadow"]} gap-5 flex items-center rounded-e-[5px]`}
          >
            <div className="bg-[#0055A4] w-24 h-28 flex items-center justify-center text-5xl text-white px-5 rounded-s-[5px] py-10">
              <MdEmail />
            </div>
            <div className="space-y-[5px] flex-1">
              <h3 className="text-[25px] uppercase rubik font-semibold">
                Email
              </h3>
              <div className="w-14 h-1 bg-[#0055A4]"></div>
              <p className="text-xl rubik font-semibold">
                simt.dhaka@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[41%] relative group">
          <div>
            <Image
              src={mainImg}
              width={400}
              height={300}
              alt=""
              className="w-full"
            />
          </div>
          <div className="text-6xl text-[#0055A4] cursor-pointer absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full">
              <MdLocationOn className="" />
            </div>
          </div>
          <div className="absolute inset-x-0 top-[59%] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="p-2 rounded bg-[#0055A4] text-white uppercase rubik text-base font-semibold">
              Saic Institute of Management & Technology
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
