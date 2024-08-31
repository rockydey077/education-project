import React from "react";
import styles from "./CSE.module.css";
import { Raleway } from "next/font/google";
import { FaUserGraduate } from "react-icons/fa";

const raleway = Raleway({
  weight: ["600", "800"],
  subsets: ["latin"],
});

const CSE = () => {
  return (
    <div className="px-2 lg:px-0">
      <h1
        className={`${raleway.className} text-center uppercase text-2xl lg:text-4xl font-extrabold mb-5`}
      >
        Department of{" "}
        <span className={`${styles["gradient-text"]} block lg:inline-block`}>Computer Science</span>{" "}
        Technology
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4">
        <div className="bg-white p-[30px] hover:border-t-4 hover:border-red-500 rounded-[10px] hover:-translate-y-3 duration-300 w-full lg:w-[24%] text-center group">
          <div className="text-5xl text-white bg-[#0055A4] p-5 rounded-full w-fit mx-auto mb-5">
            <FaUserGraduate />
          </div>
          <h3
            className={`${raleway.className} text-xl font-semibold capitalize mb-[30px]`}
          >
            Md. Matleb Hossain shishir
          </h3>
          <div className="group-hover:w-24 duration-300 w-20 h-[3px] bg-[#0055A4] mx-auto"></div>
          <p
            className={`${raleway.className} text-red-500 text-xl font-semibold capitalize mt-5`}
          >
            Department Head
          </p>
        </div>
        <div className="bg-white p-[30px] hover:border-t-4 hover:border-red-500 rounded-[10px] hover:-translate-y-3 duration-300 w-full lg:w-[24%] text-center group">
          <div className="text-5xl text-white bg-[#0055A4] p-5 rounded-full w-fit mx-auto mb-5">
            <FaUserGraduate />
          </div>
          <h3
            className={`${raleway.className} text-xl font-semibold capitalize mb-[30px]`}
          >
            Md. Nayeem Parvez
          </h3>
          <div className="group-hover:w-24 duration-300 w-20 h-[3px] bg-[#0055A4] mx-auto"></div>
          <p
            className={`${raleway.className} text-red-500 text-xl font-semibold capitalize mt-5`}
          >
            Instructor
          </p>
        </div>
        <div className="bg-white p-[30px] hover:border-t-4 hover:border-red-500 rounded-[10px] hover:-translate-y-3 duration-300 w-full lg:w-[24%] text-center group">
          <div className="text-5xl text-white bg-[#0055A4] p-5 rounded-full w-fit mx-auto mb-5">
            <FaUserGraduate />
          </div>
          <h3
            className={`${raleway.className} text-xl font-semibold capitalize mb-[30px]`}
          >
            Adritha Sarkar
          </h3>
          <div className="group-hover:w-24 duration-300 w-20 h-[3px] bg-[#0055A4] mx-auto"></div>
          <p
            className={`${raleway.className} text-red-500 text-xl font-semibold capitalize mt-5`}
          >
            Instructor
          </p>
        </div>
        <div className="bg-white p-[30px] hover:border-t-4 hover:border-red-500 rounded-[10px] hover:-translate-y-3 duration-300 w-full lg:w-[24%] text-center group">
          <div className="text-5xl text-white bg-[#0055A4] p-5 rounded-full w-fit mx-auto mb-5">
            <FaUserGraduate />
          </div>
          <h3
            className={`${raleway.className} text-xl font-semibold capitalize mb-[30px]`}
          >
            Sumitra Bhowmik
          </h3>
          <div className="group-hover:w-24 duration-300 w-20 h-[3px] bg-[#0055A4] mx-auto"></div>
          <p
            className={`${raleway.className} text-red-500 text-xl font-semibold capitalize mt-5`}
          >
            Instructor
          </p>
        </div>
        <div className="bg-white p-[30px] hover:border-t-4 hover:border-red-500 rounded-[10px] hover:-translate-y-3 duration-300 w-full lg:w-[24%] text-center group">
          <div className="text-5xl text-white bg-[#0055A4] p-5 rounded-full w-fit mx-auto mb-5">
            <FaUserGraduate />
          </div>
          <h3
            className={`${raleway.className} text-xl font-semibold capitalize mb-[30px]`}
          >
            Happy Akter
          </h3>
          <div className="group-hover:w-24 duration-300 w-20 h-[3px] bg-[#0055A4] mx-auto"></div>
          <p
            className={`${raleway.className} text-red-500 text-xl font-semibold capitalize mt-5`}
          >
            Junior Instructor
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSE;
