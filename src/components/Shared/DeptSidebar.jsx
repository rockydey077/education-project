import React from "react";
import styles from "./DeptSidebar.module.css";
import Link from "next/link";
import { Raleway } from "next/font/google";
import admissionImg1 from "../../../public/assets/Admission.png";
import admissionImg2 from "../../../public/assets/Admission-1.png";
import Image from "next/image";

const raleway = Raleway({
  weight: ["600", "800"],
  subsets: ["latin"],
});

const DeptSidebar = () => {
  return (
    <>
      <h2
        className={`${raleway.className} text-[30px] font-semibold capitalize text-justify`}
      >
        Important Link
      </h2>
      <div className="">
        <div className="space-y-3">
          <div className="flex items-center gap-[10px] pb-1 border-b-2 border-[#00D7FF] group">
            <div className=" cursor-pointer">
              <svg
                aria-hidden="true"
                className="w-[18px] h-[18px] fill-[#00D7FF] group-hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
              </svg>
            </div>
            <Link
              href="#"
              className="text-base font-semibold uppercase rubik group-hover:text-[#FF0000]"
            >
              BTEB
            </Link>
          </div>
          <div className="flex items-center gap-[10px] pb-1 border-b-2 border-[#00D7FF] group">
            <div className="cursor-pointer">
              <svg
                aria-hidden="true"
                className="w-[18px] h-[18px] fill-[#00D7FF] group-hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
              </svg>
            </div>
            <Link
              href="#"
              className="text-base font-semibold uppercase rubik group-hover:text-[#FF0000]"
            >
              Ministry of Education
            </Link>
          </div>
          <div className="flex items-center gap-[10px] pb-1 border-b-2 border-[#00D7FF] group">
            <div className="cursor-pointer">
              <svg
                aria-hidden="true"
                className="w-[18px] h-[18px] fill-[#00D7FF] group-hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
              </svg>
            </div>
            <Link
              href="#"
              className="text-base font-semibold uppercase rubik group-hover:text-[#FF0000]"
            >
              Directorate of Tech. Edu
            </Link>
          </div>
          <div className="flex items-center gap-[10px] pb-1 border-b-2 border-[#00D7FF] group">
            <div className="cursor-pointer">
              <svg
                aria-hidden="true"
                className="w-[18px] h-[18px] fill-[#00D7FF] group-hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
              </svg>
            </div>
            <Link
              href="#"
              className="text-base font-semibold uppercase rubik group-hover:text-[#FF0000]"
            >
              Ministry Of ICT
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={admissionImg1}
          weight={400}
          height={300}
          alt=""
          className="w-full h-auto cursor-pointer rounded"
        />
      </div>
      <div className="relative">
        <Image
          src={admissionImg2}
          weight={400}
          height={300}
          alt=""
          className="w-full h-auto cursor-pointer rounded"
        />
        <div className="text-6xl text-white cursor-pointer absolute inset-0 flex items-center justify-center">
          <div
            className={`${styles.location_animation} bg-[#00D7FF] p-5 rounded-full`}
          >
            <svg
              class="e-font-icon-svg e-fas-street-view"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white w-16"
            >
              <path d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z"></path>
            </svg>
          </div>
        </div>
        <div
          className={`${raleway.className} text-xl font-semibold text-white bg-[#00D7FF] p-2 rounded-sm w-fit absolute bottom-12 left-[30%]`}
        >
          <p>Virtual Campus</p>
        </div>
      </div>
    </>
  );
};

export default DeptSidebar;
