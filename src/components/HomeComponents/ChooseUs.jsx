import styles from "./ChooseUs.module.css";
import { FaQuoteLeft } from "react-icons/fa6";

const ChooseUs = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-[50px] px-2 lg:px-0">
      <div>
        <h1 className="text-[#0055A4] text-[30px] rubik lg:text-[50px] font-semibold uppercase text-center mb-6">
          Why Choose SIMT?
        </h1>
        <p className="rubik text-base lg:text-[25px] font-normal">
          Saic Institute of Management and Technology (SIMT) is one of the best
          polytechnic institute in Dhaka, offering comprehensive programs in
          Diploma Engineering. At SIMT, we prioritize providing unwavering
          support and cultivating an enriching learning environment. Our
          institute is dedicated to equipping you with the knowledge, skills,
          confidence, and experience necessary to make a positive impact on the
          world.
        </p>
      </div>
      <div
        className={`${styles.choose_shadow} space-y-[14px] bg-white border-l-4 border-[#0055A4] py-[37px] px-[43px]`}
      >
        <div className="bg-[#0055A4] w-fit text-white text-2xl p-3 rounded-full">
          <FaQuoteLeft />
        </div>
        <p className={`text-[20px] lg:text-[40px] font-normal`}>
          Our mission is to inspire our students to dream more, learn more, do
          more and become better in their respective life journeys.
        </p>
        <p className="uppercase text-xl font-semibold rubik text-[#707070]">
          - Principal, SIMT
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
