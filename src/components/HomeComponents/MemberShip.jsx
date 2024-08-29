import basisImg from "../../../public/assets/basis-sqare-logo.png";
import baccoImg from "../../../public/assets/BACCO.png";
import bcsImg from "../../../public/assets/BCS.png";
import eCabImg from "../../../public/assets/Ecab.png";
import Image from "next/image";
import styles from "./MemberShip.module.css";

const MemberShip = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] space-y-5 px-2 lg:px-0">
      <h1 className="text-[#0055A4] rubik text-[30px] lg:text-[50px] font-semibold uppercase text-center">
        membership Affiliation
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className={`${styles.box} border border-[#0055A4] rounded-md`}>
          <div>
            <Image
              src={basisImg}
              width={300}
              height={300}
              alt="institute image"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className={`${styles["box-content"]}`}>
            <div className={`${styles["inner-content"]}`}>
              <span
                className={`${styles.title} text-[50px] font-extrabold uppercase text-[#E6E6E6]`}
              >
                Basis
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.box} border border-[#0055A4] rounded-md`}>
          <div>
            <Image
              src={baccoImg}
              width={300}
              height={300}
              alt="institute image"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className={`${styles["box-content"]}`}>
            <div className={`${styles["inner-content"]}`}>
              <span
                className={`${styles.title} text-[50px] font-extrabold uppercase text-[#E6E6E6]`}
              >
                Bacco
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.box} border border-[#0055A4] rounded-md`}>
          <div>
            <Image
              src={bcsImg}
              width={300}
              height={300}
              alt="institute image"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className={`${styles["box-content"]}`}>
            <div className={`${styles["inner-content"]}`}>
              <span
                className={`${styles.title} text-[50px] font-extrabold uppercase text-[#E6E6E6]`}
              >
                BCS
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.box} border border-[#0055A4] rounded-md`}>
          <div>
            <Image
              src={eCabImg}
              width={300}
              height={300}
              alt="institute image"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className={`${styles["box-content"]}`}>
            <div className={`${styles["inner-content"]}`}>
              <span
                className={`${styles.title} text-[50px] font-extrabold uppercase text-[#E6E6E6]`}
              >
                Ecab
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
