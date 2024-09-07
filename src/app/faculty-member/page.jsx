import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { Raleway } from "next/font/google";
import CSE from "@/components/FacultyComponents/CSE";
import CivilArch from "@/components/FacultyComponents/CivilArch";
import Textile from "@/components/FacultyComponents/Textile";

const raleway = Raleway({
  weight: ["600", "800"],
  subsets: ["latin"],
});

const FacultyPage = () => {
  return (
    <div>
      <PageBanner heading={"Faculty Members"} />

      <div className="bg-[#FFF7F7] py-[50px]">
        <div className="max-w-[1360px] mx-auto px-2 lg:px-0">
          {/* Principle */}
          <div className="bg-white p-[30px] hover:border-t-4 hover:border-red-500 rounded-[10px] hover:-translate-y-3 duration-300 lg:w-[486px] mx-auto text-center group">
            <div className="text-5xl text-white bg-[#2D3292] p-5 rounded-full w-fit mx-auto mb-5">
              <FaUserGraduate />
            </div>
            <h3
              className={`${raleway.className} text-xl font-semibold capitalize mb-[30px]`}
            >
              Engr. Dost Md. Samsuzzaman (Ronik)
            </h3>
            <div className="group-hover:w-24 duration-300 w-20 h-[3px] bg-[#2D3292] mx-auto"></div>
            <p
              className={`${raleway.className} text-red-500 text-xl font-semibold capitalize mt-5`}
            >
              Principal
            </p>
          </div>

          {/* Border */}
          <div className="flex justify-center items-center py-[50px]">
            <div className="w-3 h-3 border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-32 h-[3px] bg-[#2D3292]"></div>
            <div className="w-4 h-4 ml-[2px] border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-6 h-6 mx-2 border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-4 h-4 mr-[2px] border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-32 h-[3px] bg-[#2D3292]"></div>
            <div className="w-3 h-3 border-[3px] border-[#2D3292] rounded-full"></div>
          </div>

          {/* CSE */}
          <CSE />

          {/* Border */}
          <div className="flex justify-center items-center py-[50px]">
            <div className="w-3 h-3 border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-32 h-[3px] bg-[#2D3292]"></div>
            <div className="w-4 h-4 ml-[2px] border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-6 h-6 mx-2 border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-4 h-4 mr-[2px] border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-32 h-[3px] bg-[#2D3292]"></div>
            <div className="w-3 h-3 border-[3px] border-[#2D3292] rounded-full"></div>
          </div>

          {/* Civil & Arch */}
          <CivilArch />

          {/* Border */}
          <div className="flex justify-center items-center py-[50px]">
            <div className="w-3 h-3 border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-32 h-[3px] bg-[#2D3292]"></div>
            <div className="w-4 h-4 ml-[2px] border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-6 h-6 mx-2 border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-4 h-4 mr-[2px] border-[3px] border-[#2D3292] rounded-full"></div>
            <div className="w-32 h-[3px] bg-[#2D3292]"></div>
            <div className="w-3 h-3 border-[3px] border-[#2D3292] rounded-full"></div>
          </div>

          {/* Textile */}
          <Textile />
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
