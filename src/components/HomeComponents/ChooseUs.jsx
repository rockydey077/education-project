import styles from "./ChooseUs.module.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { Sofia } from "next/font/google";

const sofia = Sofia({
  weight: ["400"],
  subsets: ["latin"],
});

const ChooseUs = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-[50px] px-2 lg:px-0">
      <div>
        <h1 className="text-[#2D3192] text-[30px] rubik lg:text-[50px] font-semibold uppercase text-center mb-6">
          Why Choose DIET?
        </h1>
        <p className="rubik text-base lg:text-[25px] font-normal leading-[36px]">
          Choosing Dhaka Institute of Engineering & Technology (DIET) offers
          affordable, industry-focused technical education with hands-on
          training in fields like Electrical, Civil, and Computer Engineering.
          Located in Dhaka, DIET provides access to job markets, internships,
          and practical experiences, preparing students for employment. Smaller
          class sizes ensure personalized learning, and the curriculum is
          aligned with industry needs, making DIET a strong option for students
          pursuing engineering and vocational careers.
        </p>
      </div>
      <div
        className={`${styles.choose_shadow} space-y-[14px] bg-white border-l-4 border-[#2D3192] py-[37px] px-[43px]`}
      >
        <div className="bg-[#2D3192] w-fit text-white text-2xl p-3 rounded-full">
          <FaQuoteLeft />
        </div>
        <p
          className={`${sofia.className} text-[20px] lg:text-[40px] font-normal leading-[48px]`}
        >
          Our mission is to inspire our students to dream more, learn more, do
          more and become better in their respective life journeys.
        </p>
        <p className="uppercase text-xl font-semibold rubik text-[#707070]">
          - Principal, DIET
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
