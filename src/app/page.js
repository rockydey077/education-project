import Banner from "@/components/HomeComponents/Banner";
import CampusLife from "@/components/HomeComponents/CampusLife";
import ChooseUs from "@/components/HomeComponents/ChooseUs";
import LatestNews from "@/components/HomeComponents/LatestNews";
import Record from "@/components/HomeComponents/Record";
import About from "../components/HomeComponents/About";

export default function Home() {
  return (
    <main className="bg-[#FFF7F7]">
      <Banner />
      <LatestNews />
      <About />
      <ChooseUs />
      <Record />
      <CampusLife />
    </main>
  );
}
