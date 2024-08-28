import basisImg from "../../../public/assets/basis-sqare-logo.png";
import baccoImg from "../../../public/assets/BACCO.png";
import bcsImg from "../../../public/assets/BCS.png";
import eCabImg from "../../../public/assets/Ecab.png";
import Image from "next/image";

const MemberShip = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-5 px-2 lg:px-0">
      <h1 className="text-[#0055A4] rubik text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        membership Affiliation
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="relative group rounded-md">
          <Image
            src={basisImg}
            width={300}
            height={300}
            alt="institute image"
            className="w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-[#0055A4] bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity rounded-md duration-500 border border-[#0055A4]">
            <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity  text-[50px] font-extrabold uppercase text-center p-3 leading-10 m-3">
              Basis
            </span>
          </div>
        </div>
        <div className="relative group rounded-md">
          <Image
            src={baccoImg}
            width={300}
            height={300}
            alt="institute image"
            className="w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-[#0055A4] bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity rounded-md duration-500 border border-[#0055A4]">
            <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity  text-[50px] font-extrabold uppercase text-center p-3 leading-10 m-3">
              Bacco
            </span>
          </div>
        </div>
        <div className="relative group rounded-md">
          <Image
            src={bcsImg}
            width={300}
            height={300}
            alt="institute image"
            className="w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-[#0055A4] bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity rounded-md duration-500 border border-[#0055A4]">
            <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity text-[50px] font-extrabold uppercase text-center p-3 leading-10 m-3">
              BCS
            </span>
          </div>
        </div>
        <div className="relative group rounded-md">
          <Image
            src={eCabImg}
            width={300}
            height={300}
            alt="institute image"
            className="w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-[#0055A4] bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all rounded-md duration-500 border border-[#0055A4] p-4">
            <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity text-[50px] font-extrabold uppercase text-center p-3 leading-10 m-3">
              ECAB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
