import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import img1 from "../../../public/assets/gallery/DSC8374-scaled-1.jpg";
import img2 from "../../../public/assets/gallery/DSC_8444-scaled-1.jpg";
import img3 from "../../../public/assets/gallery/DSC_8483-scaled-1.jpg";
import img4 from "../../../public/assets/gallery/DSC_8490-scaled-1.jpg";
import img5 from "../../../public/assets/gallery/Electrical-industrial-Tour.jpg";
import img6 from "../../../public/assets/gallery/Farewell-civil-arct-department.jpg";
import img7 from "../../../public/assets/gallery/Farewell-civil.jpg";
import img8 from "../../../public/assets/gallery/IMG_0177-scaled-1.jpg";
import img9 from "../../../public/assets/gallery/IMG_0200-scaled-1.jpg";
import img10 from "../../../public/assets/gallery/IMG_0223-scaled-1.jpg";
import img11 from "../../../public/assets/gallery/IMG_0249-scaled-1.jpg";
import img12 from "../../../public/assets/gallery/innugration-1-scaled-1.jpg";
import img13 from "../../../public/assets/gallery/meeting-1-scaled-1.jpg";
import img14 from "../../../public/assets/gallery/meeting-3-scaled-1.jpg";
import img15 from "../../../public/assets/gallery/meeting-4-scaled-1.jpg";
import img16 from "../../../public/assets/gallery/meeting-5-scaled-1.jpg";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <PageBanner heading={"Photo Gallery"} />
      <div className="max-w-[1360px] mx-auto py-[50px] grid grid-cols-1 lg:grid-cols-4 gap-5 px-2 lg:px-0">
        <Image
          src={img1}
          className="w-full rounded-md"
          width={400}
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img2}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img3}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img4}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img5}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img6}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img7}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img8}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img9}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img10}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img11}
          width={400}
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img12}
          width={400}
          height={400}
          className="w-full rounded-md"
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img13}
          width={400}
          height={400}
          className="w-full rounded-md"
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img14}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img15}
          width={400}
          className="w-full rounded-md"
          height={400}
          alt="loading"
          loading="lazy"
        />
        <Image
          src={img16}
          className="w-full rounded-md"
          width={400}
          height={400}
          alt="loading"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default GalleryPage;
