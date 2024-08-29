import React from "react";

const CampusLife = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] rubik space-y-5 px-2 lg:px-0">
      <h1 className="text-[#0055A4] text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        Campus Life of SIMT
      </h1>
      <p className="text-base lg:text-[25px] font-normal leading-[36px]">
        Saic Institute of Management and Technology (SIMT) in Dhaka excels not
        only academically but also in providing a vibrant student life
        experience. Our institute offers a plethora of engaging opportunities
        beyond the classroom, ensuring that students can explore and apply their
        talents, skills, and interests. Whether it is participating in
        extracurricular activities or joining the Digital Club, students have
        the chance to broaden their horizons and become active members of our
        dynamic community.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div>
          <iframe
            src="https://www.youtube.com/embed/iJOb-BJsHDE?si=RH2-Tss9la48fyGk"
            width="100%"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
            height={230}
            loading="lazy"
            className="border-0 rounded"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/iJOb-BJsHDE?si=RH2-Tss9la48fyGk"
            width="100%"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            height={230}
            loading="lazy"
            className="border-0 rounded"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/iJOb-BJsHDE?si=RH2-Tss9la48fyGk"
            width="100%"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            height={230}
            loading="lazy"
            className="border-0 rounded"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/iJOb-BJsHDE?si=RH2-Tss9la48fyGk"
            width="100%"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            height={230}
            loading="lazy"
            className="border-0 rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
