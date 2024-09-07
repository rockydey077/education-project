import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import missionIng from "../../../public/assets/cover2-scaled-1-1024x589.jpg";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["800"],
  subsets: ["latin"],
});

const MissionPage = () => {
  return (
    <div>
      <PageBanner heading={"Mission & Vission"} />

      <div className="max-w-[1360px] mx-auto py-[50px]  flex flex-col lg:flex-row lg:gap-[2%] gap-5 px-2 lg:px-0">
        <div className="lg:w-[49%]">
          <Image
            src={missionIng}
            width={400}
            height={300}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="lg:w-[49%] space-y-5 rubik text-xl">
          <h2
            className={`${raleway.className} text-[#2D3192] text-[40px] uppercase font-extrabold`}
          >
            Vision
          </h2>
          <p className="leading-9">
            To commit to establishing a premier technical engineering
            institution of international standards, fostering competent
            graduates through quality technical education.
          </p>
          {/* <div>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 66.5 5.5"
              xml:space="preserve"
            >
              <path
                class="st0"
                d="M28.6 2.7l4.8 2.8 4.7-2.8L33.4 0zM63.6 3.6l2.9-.9-2.9-.9-2.2.7H50.5L48 1l-2.9 1.7L42.2 1l-3 1.7 3 1.7 2.9-1.7L48 4.4 50.5 3h10.9zM21.6 2.7L18.7 1l-2.5 1.5H5.1L3 1.8l-3 .9 3 .9L5.1 3h11.1l2.5 1.4 2.9-1.7 3 1.7 2.9-1.7L24.6 1z"
              ></path>
            </svg>
          </div> */}
          <div className="flex justify-center items-center">
            <div className="w-5 h-5 border-4 border-red-500 rounded-full"></div>
            <div className="w-20 h-1 bg-red-500"></div>
            <div className="w-5 h-5 border-4 border-red-500 rounded-full"></div>
          </div>
          <h2
            className={`${raleway.className} text-[#2D3192] text-[40px] uppercase font-extrabold`}
          >
            MISSION
          </h2>
          <div>
            <p className="leading-9">
              – Delivering high-quality technical education at an international
              level.
            </p>
            <p className="leading-9">
              – Cultivating leadership qualities among students.
            </p>
            <p className="leading-9">
              – Encouraging creativity and fostering a research-oriented
              mindset.
            </p>
            <p className="leading-9">
              – Cultivating a global perspective to create world citizens.
            </p>
            <p className="leading-9">
              – Instilling a strong sense of ethical values among students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
