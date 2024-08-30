import Image from "next/image";
import React from "react";
import campusImg from "../../../public/assets/contact/building-956x1024.jpg";

const History = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px]  flex flex-col lg:flex-row lg:gap-[5%] gap-5 px-2 lg:px-0">
      <div className="lg:w-[41%]">
        <Image
          src={campusImg}
          width={400}
          height={300}
          alt=""
          className="w-full"
        />
      </div>
      <div className="lg:w-[54%] space-y-5">
        <h2 className="text-center text-[#FF0000] text-[50px] oxanium uppercase font-extrabold">
          22
        </h2>
        <h4 className="text-center text-[#0055A4] oxanium font-semibold text-xl uppercase tracking-[10px]">
          Years Of Experience
        </h4>
        <p className="rubik text-xl font-normal leading-8 lg:leading-10">
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
          1000 seats.
        </p>
      </div>
    </div>
  );
};

export default History;
