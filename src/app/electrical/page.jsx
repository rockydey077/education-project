import React from "react";
import { Raleway, Poppins } from "next/font/google";
import DeptSidebar from "@/components/Shared/DeptSidebar";
import DepartmentBanner from "@/components/Shared/DepartmentBanner";

const raleway = Raleway({
  weight: ["600", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const ElectricalPage = () => {
  return (
    <div>
      <DepartmentBanner heading={"Diploma In Electrical Engineering"} />
      <div className="max-w-[1360px] mx-auto py-[50px] flex flex-col lg:flex-row gap-5 lg:gap-[2%] px-2 lg:px-0">
        <div
          className={`lg:w-[70%] space-y-5 ${raleway.className} text-2xl lg:text-[30px] font-semibold capitalize lg:text-justify`}
        >
          <h2>Diploma In Electrical Engineering Program Objective</h2>
          <p
            className={`text-base lg:text-lg font-normal ${poppins.className}`}
          >
            The Department of Computer science and technology was established in
            2002. In important fields of computer science, the department is a
            leading academic hub for advanced research and breakthroughs. This
            has been made possible by highly skilled, experienced, and driven
            faculty who use unique and new teaching strategies to transmit to
            students the ideal balance of academic and practical knowledge. The
            Department makes sure to produce engineers in computers who have a
            strong interest in solving problems, who are adaptable and
            productive at work, and who make significant contributions to the
            fields advancements.
          </p>

          <h2>Course duration and assessment</h2>
          <p
            className={`text-base lg:text-lg font-normal ${poppins.className}`}
          >
            This four-year diploma program in engineering disciplines aims to
            produce competent mid-level managers and supervisors who can carry
            out engineering projects. Students may enroll in this course
            provided they have a certificate of SSC passing. Under the
            Bangladesh Technical Education Board (BTEB), the curriculum and
            academic activities of this course are governed.
          </p>

          <h2>Career of Diploma in Computer Science and Technology</h2>
          <p
            className={`text-base lg:text-lg font-normal ${poppins.className}`}
          >
            When comparing the top computer jobs, take note of employment
            forecasts, important growth factors, salary ranges, and other
            details. Then, click on the links of your preferred IT career paths
            to access detailed career profiles that include salary analyses,
            certification requirements, education requirements, training and
            degree requirements, local job openings, and insider advice from IT
            professionals. Todays youth place a high value on a four-year
            diploma in computer engineering because of its work- and
            job-oriented curricula. A student who has completed their SSC can
            enroll in this course and become a Diploma Engineer, which would
            allow them to readily enter the workforce. Government, commercial,
            power plant, IT, and other sectors are among the employment areas
            for diploma holders in computer science.
          </p>

          <h2>Eligibility for Admission</h2>
          <ul
            className={`text-base lg:text-lg font-normal ${poppins.className} list-inside list-disc pl-5`}
          >
            <li>
              Minimum GPA of 2.00 and minimum SSC equivalent in any discipline.
            </li>
            <li>
              Science HSC students can enroll directly in the third semester.
            </li>
            <li>
              Vocational HSC students can enroll directly in the fourth
              semester.
            </li>
          </ul>

          <h2>Admission Requirements</h2>
          <ul
            className={`text-base lg:text-lg font-normal ${poppins.className} list-inside list-disc pl-5`}
          >
            <li>3 copies of PP size photos</li>
            <li>Main copy of the SSC transcript</li>
            <li>In addition to the correctly completed admissions form</li>
          </ul>
          <div className="text-center">
            <button className="bg-[#00D7FF] px-[40px] py-5 rounded text-white oxanium text-xl uppercase font-bold">
              Course Curriculum
            </button>
          </div>
        </div>
        <div className="lg:w-[28%] space-y-5">
          <DeptSidebar />
        </div>
      </div>
    </div>
  );
};

export default ElectricalPage;
