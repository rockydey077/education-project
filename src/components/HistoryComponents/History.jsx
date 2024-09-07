import Image from "next/image";
import React from "react";
import campusImg from "../../../public/assets/contact/institute.jpeg";

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
          26
        </h2>
        <h4 className="text-center text-[#2D3192] oxanium font-semibold text-xl uppercase tracking-[10px]">
          Years Of Experience
        </h4>
        <p className="rubik text-xl font-normal leading-8 lg:leading-10">
          Dhaka Institute of Engineering & Technology (DIET) is a private
          technical institute based in Dhaka, Bangladesh, offering a variety of
          engineering and technical programs. It provides diploma and
          undergraduate degrees in disciplines such as Electrical Engineering,
          Civil Engineering, Mechanical Engineering, and Computer Engineering,
          along with other vocational and technical training courses. DIET aims
          to equip students with practical skills and knowledge to meet industry
          demands, often combining theoretical education with hands-on training.
          While not as large as some major public engineering institutions in
          Bangladesh, it still plays an important role in providing technical
          education to meet local and regional needs. If you are looking for
          specific information about their programs or admission criteria, I can
          help find more details.
        </p>
      </div>
    </div>
  );
};

export default History;
