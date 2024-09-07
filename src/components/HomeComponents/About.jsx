import Image from "next/image";
import buildingImg from "../../../public/assets/Details.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="max-w-[1360px] mx-auto py-[50px] flex flex-col lg:flex-row items-center gap-5 px-2 lg:px-0">
      <div className="lg:w-[34%] relative group rounded-md">
        <Image
          src={buildingImg}
          width={300}
          height={300}
          alt="institute image"
          className="w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity rounded-md duration-500">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-[30px] font-semibold uppercase text-center p-3 leading-10">
            Dhaka Institute of Engineering & Technology
          </span>
        </div>
      </div>
      <div className="lg:w-[65%] space-y-5 rubik">
        <h3 className="text-[#2D3192] text-xl font-semibold uppercase text-center">
          Welcome To
        </h3>
        <h2 className="text-[#2D3192] text-lg lg:text-[30px] font-semibold uppercase text-center">
          Dhaka Institute of Engineering & Technology
        </h2>
        <p className="text-base lg:text-xl font-normal lg:!leading-8">
          Dhaka Institute of Engineering & Technology (DIET) is a private
          technical institute based in Dhaka, Bangladesh, offering a variety of
          engineering and technical programs. It provides diploma and
          undergraduate degrees in disciplines such as Electrical Engineering,
          Civil Engineering, Electronics Engineering, and Computer Engineering,
          along with other vocational and technical training courses. DIET aims
          to equip students with practical skills and knowledge to meet industry
          demands, often combining theoretical education with hands-on training.
          While not as large as some major public engineering institutions in
          Bangladesh, it still plays an important role in providing technical
          education to meet local and regional needs. If you are looking for
          specific information about their programs or admission criteria, I can
          help find more details.
        </p>
        <div className="text-center">
          <button
            className={`${styles.skew} inline-block bg-[#2D3192] hover:bg-[#F68222] hover:text-[#2D3192] text-white uppercase text-xl font-semibold px-[30px] py-[10px] duration-300`}
          >
            <span className={`inline-block ${styles.skew_span}`}>
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
