import Image from "next/image";
import computer from "../../../public/assets/departments/computer.webp";
import styles from "./Department.module.css";
import { FaLaptopCode } from "react-icons/fa6";

const Department = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-5 px-2 lg:px-0">
      <h1 className="text-[#0055A4] rubik text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        Our Department
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:flex-wrap">
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:w-[23%] rounded border-2 border-[#0055A4]`}>
          <div
            className={`h-[300px] ${styles.card} z-10 relative overflow-hidden cursor-pointer`}
          >
            <Image src={computer} width={400} height={400} alt="" />
            <div
              className={` flex flex-col items-center w-full absolute bottom-0 h-[80px] duration-500 ${styles.card_content} bg-white`}
            >
              <div className="text-4xl text-[#ff0000] p-5 rounded-full bg-white -mt-10">
                <FaLaptopCode />
              </div>
              <h3 className="text-[#0055A4] bg-whiterubik text-xl font-semibold uppercase pb-10">
                Computer Science
              </h3>
              <div className="">
                <button
                  className={`hover:bg-white hover:text-[#0055A4] border border-[#0055A4] px-5 py-[10px] rounded-full text-white bg-[#0055A4] rubik text-base font-medium`}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
