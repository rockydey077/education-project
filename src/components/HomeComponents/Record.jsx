import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { LiaUsersCogSolid } from "react-icons/lia";

const Record = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] grid grid-cols-1 lg:grid-cols-4 gap-5 px-2 lg:px-0">
      <div className="border-2 border-[#0055A4] rounded-lg flex flex-col items-center p-[30px] gap-4">
        <div className="bg-[#0055A4] text-white w-fit text-6xl p-5 rounded-lg">
          <FaUniversity />
        </div>
        <h3 className="text-[#ff0000] text-[40px] font-extrabold rubik">
          2002
        </h3>
        <div className="border-b-2 w-16 border-[#0055A4]"></div>
        <h2 className="text-[#0055a4] oxanium text-4xl font-extrabold">
          SINCE
        </h2>
      </div>
      <div className="border-2 border-[#0055A4] rounded-lg flex flex-col items-center p-[30px] gap-4">
        <div className="bg-[#0055A4] text-white w-fit text-6xl p-5 rounded-lg">
          <TbUsersGroup />
        </div>
        <h3 className="text-[#ff0000] text-[40px] font-extrabold rubik">
          15000
        </h3>
        <div className="border-b-2 w-16 border-[#0055A4]"></div>
        <h2 className="text-[#0055a4] oxanium text-4xl font-extrabold uppercase">
          Students
        </h2>
      </div>
      <div className="border-2 border-[#0055A4] rounded-lg flex flex-col items-center p-[30px] gap-4">
        <div className="bg-[#0055A4] text-white w-fit text-6xl p-5 rounded-lg">
          <LiaUsersCogSolid />
        </div>
        <h3 className="text-[#ff0000] text-[40px] font-extrabold rubik">
          14000
        </h3>
        <div className="border-b-2 w-16 border-[#0055A4]"></div>
        <h2 className="text-[#0055a4] oxanium text-4xl font-extrabold uppercase">
          Alumni
        </h2>
      </div>
      <div className="border-2 border-[#0055A4] rounded-lg flex flex-col items-center p-[30px] gap-4">
        <div className="bg-[#0055A4] text-white w-fit text-6xl p-5 rounded-lg">
          <FaUserGraduate />
        </div>
        <h3 className="text-[#ff0000] text-[40px] font-extrabold rubik">50+</h3>
        <div className="border-b-2 w-16 border-[#0055A4]"></div>
        <h2 className="text-[#0055a4] oxanium text-4xl font-extrabold uppercase">
          Teachers
        </h2>
      </div>
    </div>
  );
};

export default Record;
