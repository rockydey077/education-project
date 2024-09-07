import React from "react";

const CampusLife = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] rubik space-y-5 px-2 lg:px-0">
      <h1 className="text-[#2D3192] text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        Campus Life of DIET
      </h1>
      <p className="text-base lg:text-[25px] font-normal leading-[36px]">
        Dhaka Institute of Engineering & Technology (DIET) is designed to foster
        both academic growth and personal development. Students engage in
        practical workshops, technical projects, and industry-oriented training.
        The campus also offers opportunities for extracurricular activities,
        such as clubs, sports, and cultural events, enhancing student engagement
        and teamwork. With a focus on a balanced academic and social experience,
        DIET aims to prepare students for professional success while fostering a
        collaborative environment.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div>
          <iframe
            src="https://www.youtube.com/embed/ZKBPy3GWv3M?si=STbGVUOwDzUgOcFT"
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
            src="https://www.youtube.com/embed/ZKBPy3GWv3M?si=STbGVUOwDzUgOcFT"
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
            src="https://www.youtube.com/embed/ZKBPy3GWv3M?si=STbGVUOwDzUgOcFT"
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
            src="https://www.youtube.com/embed/ZKBPy3GWv3M?si=STbGVUOwDzUgOcFT"
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
