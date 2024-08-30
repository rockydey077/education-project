"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../public/assets/SIMT-web-logo-50x600-1.png";
import Image from "next/image";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDepartment, setShowDepartment] = useState(false);
  const [showAcademic, setShowAcademic] = useState(false);
  const [showJob, setShowJob] = useState(false);

  return (
    <div
      className={`bg-white fixed top-0 w-full z-50  ${styles["drop-shadow"]}`}
    >
      <div className="max-w-[1360px] mx-[10px] lg:mx-auto py-3 flex items-center justify-between">
        <Link href="/" className="block">
          <Image
            src={logo}
            width={600}
            height={60}
            className="w-[300px] lg:w-[400px] h-auto"
            alt=""
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-2 items-center rubik">
            {/* About Us */}
            <li className={`relative group ${styles.dropdown}`}>
              <button className="hover:bg-[#0055A4] duration-300 px-4 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white ">
                About Us
                <MdArrowDropDown className="text-2xl" />
              </button>
              <ul
                className={`${styles["dropdown-content"]} absolute left-0 mt-2 w-48 bg-white rounded-sm hidden group-hover:block duration-300 ${styles["drop-shadow"]} rubik text-base font-semibold uppercase text-[#0055A4]`}
              >
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <Link href="/history-of-simt">History of SIMT</Link>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <Link href="/mission-vision">Mission & Vision</Link>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Faculty Member</a>
                </li>
                <li className="hover:bg-[#0055A4] w-full p-[15px] hover:text-white">
                  <a href="#">Photo Gallery</a>
                </li>
              </ul>
            </li>

            {/* Department */}
            <li className={`relative group ${styles.dropdown}`}>
              <button className="hover:bg-[#0055A4] duration-300 px-4 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white">
                Department
                <MdArrowDropDown className="text-2xl" />
              </button>
              <ul
                className={`${styles["dropdown-content"]} absolute left-0 mt-2 w-80 bg-white rounded-sm hidden group-hover:block duration-300 ${styles["drop-shadow"]} rubik text-base font-semibold uppercase text-[#0055A4] `}
              >
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Computer Engineering</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Civil Engineering</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Architecture Engineering</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Electrical Engineering</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Mechanical Engineering</a>
                </li>
                <li className="hover:bg-[#0055A4] w-full p-[15px] hover:text-white">
                  <a href="#">Textile Engineering</a>
                </li>
              </ul>
            </li>

            {/* Academic */}
            <li className={`relative group ${styles.dropdown}`}>
              <button className="hover:bg-[#0055A4] duration-300 px-4 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white">
                Academic
                <MdArrowDropDown className="text-2xl" />
              </button>
              <ul
                className={`${styles["dropdown-content"]} absolute left-0 mt-2 w-40 bg-white rounded-sm hidden group-hover:block duration-300 ${styles["drop-shadow"]} rubik text-base font-semibold uppercase text-[#0055A4]`}
              >
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Notice</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Faculty</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Blog</a>
                </li>
                <li className="hover:bg-[#0055A4] w-full p-[15px] hover:text-white">
                  <a href="#">Library</a>
                </li>
              </ul>
            </li>

            {/* Job Placement */}
            <li className={`relative group ${styles.dropdown}`}>
              <button className="hover:bg-[#0055A4] duration-300 px-4 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white">
                Job Placement
                <MdArrowDropDown className="text-2xl" />
              </button>
              <ul
                className={`${styles["dropdown-content"]} absolute left-0 mt-2 w-56 bg-white rounded-sm hidden group-hover:block duration-300 ${styles["drop-shadow"]} rubik text-base font-semibold uppercase text-[#0055A4] `}
              >
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Placement Cell</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Mou</a>
                </li>
                <li className="hover:bg-[#0055A4] border-b border-[#000] w-full p-[15px] hover:text-white">
                  <a href="#">Industrial Linkage</a>
                </li>
                <li className="hover:bg-[#0055A4] w-full p-[15px] hover:text-white">
                  <a href="#">Success Story</a>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="text-base font-semibold text-[#0055A4] uppercase hover:bg-[#0055A4] duration-300 px-4 py-[13px] hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setShow(!show)}
          className={`lg:hidden text-2xl border-2 p-1 text-[#0055A4] border-[#0055A4] cursor-pointer duration-300 block`}
        >
          {show ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>

        {show && (
          <nav
            className={`lg:hidden fixed top-0 left-0 transform transition-transform duration-500 w-full bg-white -z-20 ease-in-out shadow-xl ${
              show ? "translate-y-[59px]" : "-translate-y-full"
            }`}
          >
            <ul className="flex flex-col rubik ">
              {/* About Us */}
              <li className={`border-b-2 border-[#0055A4]`}>
                <button
                  onClick={() => setShowAbout(!showAbout)}
                  className="hover:bg-[#0055A4] w-full duration-300 px-4 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white "
                >
                  About Us
                  <MdArrowDropDown className="text-2xl" />
                </button>
                {showAbout && (
                  <ul
                    className={`w-full bg-white rounded-sm duration-300 rubik text-base font-semibold uppercase text-[#0055A4]`}
                  >
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <Link href="/history-of-simt">History of SIMT</Link>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <Link href="/mission-vision">Mission & Vision</Link>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Faculty Member</a>
                    </li>
                    <li className="hover:bg-[#0055A4] w-full p-[15px] px-8 hover:text-white">
                      <a href="#">Photo Gallery</a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Department */}
              <li className={`border-b-2 border-[#0055A4]`}>
                <button
                  onClick={() => setShowDepartment(!showDepartment)}
                  className="hover:bg-[#0055A4] w-full px-4 duration-300 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white"
                >
                  Department
                  <MdArrowDropDown className="text-2xl" />
                </button>
                {showDepartment && (
                  <ul
                    className={` w-full bg-white rounded-sm duration-300  rubik text-base font-semibold uppercase text-[#0055A4] `}
                  >
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Computer Engineering</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Civil Engineering</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Architecture Engineering</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Electrical Engineering</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Mechanical Engineering</a>
                    </li>
                    <li className="hover:bg-[#0055A4] w-full px-8 p-[15px] hover:text-white">
                      <a href="#">Textile Engineering</a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Academic */}
              <li className={`border-b-2 border-[#0055A4]`}>
                <button
                  onClick={() => setShowAcademic(!showAcademic)}
                  className="hover:bg-[#0055A4] w-full px-4 duration-300 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white"
                >
                  Academic
                  <MdArrowDropDown className="text-2xl" />
                </button>
                {showAcademic && (
                  <ul
                    className={`w-full bg-white rounded-sm duration-300  rubik text-base font-semibold uppercase text-[#0055A4]`}
                  >
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Notice</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Faculty</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Blog</a>
                    </li>
                    <li className="hover:bg-[#0055A4] w-full px-8 p-[15px] hover:text-white">
                      <a href="#">Library</a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Job Placement */}
              <li className={`border-b-2 border-[#0055A4]`}>
                <button
                  onClick={() => setShowJob(!showJob)}
                  className="hover:bg-[#0055A4] w-full px-4 duration-300 py-[13px] hover:text-white flex items-center gap-2 text-base font-semibold uppercase text-[#0055A4] hover:fill-white"
                >
                  Job Placement
                  <MdArrowDropDown className="text-2xl" />
                </button>
                {showJob && (
                  <ul
                    className={`w-full bg-white rounded-sm duration-300 rubik text-base font-semibold uppercase text-[#0055A4] `}
                  >
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Placement Cell</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Mou</a>
                    </li>
                    <li className="hover:bg-[#0055A4] border-b-2 px-8 border-[#0055A4] w-full p-[15px] hover:text-white">
                      <a href="#">Industrial Linkage</a>
                    </li>
                    <li className="hover:bg-[#0055A4] w-full px-8 p-[15px] hover:text-white">
                      <a href="#">Success Story</a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Contact */}
              <li className="text-base font-semibold text-[#0055A4] w-full px-4 uppercase hover:bg-[#0055A4] duration-300 py-[13px] hover:text-white">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
