import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="max-w-[1360px] mx-auto p-[10px] flex items-center gap-3">
      <div className="text-[#2D3192] uppercase text-[30px] font-semibold">
        DIET
      </div>
      <div className="text-[#ff0000] text-2xl rubik font-medium">
        <Marquee className="max-w-[265px] lg:max-w-[1260px]">
          <p className="whitespace-nowrap">
            Admission Going on into 23rd Batch of 4-year Diploma in Engineering
            Program in the session-2024-2025. Hotline: 01936-005817,
            01936-005818...&nbsp;
          </p>
          <p className="whitespace-nowrap">
            Admission Going on into 23rd Batch of 4-year Diploma in Engineering
            Program in the session-2024-2025. Hotline: 01936-005817,
            01936-005818...&nbsp;
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
