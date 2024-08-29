import Link from "next/link";
import { FaFacebookF, FaArrowUp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="bg-[#F7F6F3] relative">
      <div className={` absolute top-3 left-[48%]`}>
        <div className="text-xl text-white p-3 bg-[#0055A4] rounded-full w-fit hover:bg-[#323A40] cursor-pointer">
          <FaArrowUp />
        </div>
      </div>
      <div className="max-w-[1360px] mx-auto py-[50px] flex flex-col lg:flex-row gap-5">
        {/* Contact Info */}
        <div className="space-y-5 w-full lg:w-[25%]">
          <div className="flex items-center py-[15px]">
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
            <h2 className="rubik w-full mx-[10px] text-nowrap text-[25px] font-extrabold uppercase text-[#0055a4]">
              Contact Us
            </h2>
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div className="space-y-[15px] ">
              <div className="flex items-center gap-[10px]">
                <div>
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-mobile-alt w-[25px] h-[25px] fill-[#0055A4]"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                  </svg>
                </div>
                <p className="text-base font-semibold lowercase rubik">
                  01936-005817, 01936-005818
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <svg
                    aria-hidden="true"
                    className="w-[25px] h-[25px] fill-[#0055a4] e-font-icon-svg e-fas-envelope"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                </div>
                <p className="text-base font-semibold lowercase rubik">
                  simt.dhaka@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <svg
                    aria-hidden="true"
                    className="w-[25px] h-[25px] fill-[#0055a4] e-font-icon-svg e-fas-map-marker-alt"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </div>
                <p className="text-base font-semibold lowercase rubik">
                  M/3, Mirpur-14, Dhaka-1216
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start text-2xl gap-5 text-[#FF0000]">
            <div className="p-3 border-2 rounded-full border-[#0055a4] cursor-pointer transition-transform hover:rotate-[360deg] duration-300">
              <FaFacebookF />
            </div>
            <div className="p-3 border-2 rounded-full border-[#0055a4] cursor-pointer transition-transform hover:rotate-[360deg] duration-300">
              <FaYoutube />
            </div>
            <div className="p-3 border-2 rounded-full border-[#0055a4] cursor-pointer transition-transform hover:rotate-[360deg] duration-300">
              <IoLocationSharp />
            </div>
          </div>
        </div>
        {/* Facebook Page */}
        <div className="space-y-5 w-full lg:w-[25%]">
          <div className="flex items-center py-[15px]">
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
            <h2 className="rubik w-full mx-[10px] text-nowrap text-[25px] font-extrabold uppercase text-[#0055a4]">
              Facebook Page
            </h2>
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/HcLYoCmWOjI?si=s895h7rHtKK2ymRA"
              width="100%"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              height={250}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
        {/* Important Link */}
        <div className="space-y-5 w-full lg:w-[25%]">
          <div className="flex items-center py-[15px]">
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
            <h2 className="rubik w-full mx-[10px] text-nowrap text-[25px] font-extrabold uppercase text-[#0055a4]">
              Important Link
            </h2>
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="space-y-[15px]">
              <div className="flex items-center gap-[10px]">
                <div>
                  <svg
                    aria-hidden="true"
                    className="w-[18px] h-[18px] fill-[#0055A4] hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
                  </svg>
                </div>
                <Link
                  href="#"
                  className="text-base font-semibold uppercase rubik hover:text-[#FF0000]"
                >
                  BTEB
                </Link>
              </div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <svg
                    aria-hidden="true"
                    className="w-[18px] h-[18px] fill-[#0055A4] hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
                  </svg>
                </div>
                <Link
                  href="#"
                  className="text-base font-semibold uppercase rubik hover:text-[#FF0000]"
                >
                  Ministry of Education
                </Link>
              </div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <svg
                    aria-hidden="true"
                    className="w-[18px] h-[18px] fill-[#0055A4] hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
                  </svg>
                </div>
                <Link
                  href="#"
                  className="text-base font-semibold uppercase rubik hover:text-[#FF0000]"
                >
                  Directorate of Tech. Edu
                </Link>
              </div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <svg
                    aria-hidden="true"
                    className="w-[18px] h-[18px] fill-[#0055A4] hover:fill-[#FF0000]  e-font-icon-svg e-fas-unlink"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path>
                  </svg>
                </div>
                <Link
                  href="#"
                  className="text-base font-semibold uppercase rubik hover:text-[#FF0000]"
                >
                  Ministry Of ICT
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="space-y-5 w-full lg:w-[25%]">
          <div className="flex items-center py-[15px]">
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
            <h2 className="rubik w-full mx-[10px] text-nowrap text-[25px] font-extrabold uppercase text-[#0055a4]">
              Location
            </h2>
            <div className="w-full border-b-2 border-[#EE9CA7]"></div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.516092394622!2d90.3627763!3d23.8066807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c709b35123df%3A0x6b77ed6f8ff908b5!2sSuper%20OYO%20Prafula%20Devi%20Near%20Rajarhat%20Chowmatha!5e0!3m2!1sen!2sbd!4v1659270734142!5m2!1sen!2sbd"
              width="100%"
              height={250}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
