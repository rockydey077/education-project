import Image from "next/image";
import buildingImg from "../../../public/assets/building.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] flex flex-col lg:flex-row items-center gap-5 px-2 lg:px-0">
      <div className="lg:w-[34%] relative group rounded-md">
        <Image
          src={buildingImg}
          width={300}
          height={300}
          alt="institute image"
          className="w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity rounded-md duration-500">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-[30px] font-semibold uppercase text-center p-3 leading-10">
            Saic Institute of Management & Technology
          </span>
        </div>
      </div>
      <div className="lg:w-[65%] space-y-5 rubik">
        <h3 className="text-[#0055A4] text-xl font-semibold uppercase text-center">
          Welcome To
        </h3>
        <h2 className="text-[#0055A4] text-lg lg:text-[30px] font-semibold uppercase text-center">
          Saic Institute of Management & Technology
        </h2>
        <p className="text-base lg:text-xl font-normal lg:!leading-8">
          Saic Institute of Management and Technology, approved by the
          Bangladesh Technical Education Board (BTEB), stands as the largest
          private polytechnic institution in Dhaka. Recognizing the critical
          link between quality education and technological advancement, SIMT
          emphasizes the importance of technical education in nurturing skilled
          manpower. As global demand for technical education continues to rise,
          SIMT is dedicated to meeting this need. Established in June 2002 with
          a single technology, SIMT quickly expanded its offerings to address
          the growing demand. Overcoming initial challenges, SIMT is
          administering admissions for the academic year 2023-2024, offering
          enrollment opportunities across 14 distinct technologies, totaling
          1000 seats
        </p>
        <div className="text-center">
          <button
            className={`${styles.skew} inline-block bg-[#0055a4] hover:bg-[#FFD9D9] hover:text-[#0055A4] text-white uppercase text-xl font-semibold px-[30px] py-[10px] duration-300`}
          >
            <span className={`inline-block ${styles.skew_span}`}>
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
