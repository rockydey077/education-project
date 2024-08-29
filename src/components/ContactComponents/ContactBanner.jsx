import styles from "./ContactBanner.module.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["800"],
  subsets: ["latin"],
});

const ContactBanner = () => {
  return (
    <div className={`${styles["contact-bg"]} h-[40vh] relative`}>
      <h1
        className={`${styles["contact-header"]} text-4xl lg:text-6xl ${raleway.className} uppercase absolute bg-[#FFF7F7] bg-opacity-50 top-0 left-0 w-full h-full flex items-center justify-center`}
      >
        Contact Us
      </h1>
    </div>
  );
};

export default ContactBanner;
