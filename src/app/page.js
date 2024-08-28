import Banner from "@/components/HomeComponents/Banner";
import CampusLife from "@/components/HomeComponents/CampusLife";
import ChooseUs from "@/components/HomeComponents/ChooseUs";
import LatestNews from "@/components/HomeComponents/LatestNews";
import Record from "@/components/HomeComponents/Record";
import About from "../components/HomeComponents/About";
import MemberShip from "@/components/HomeComponents/MemberShip";
import Partner from "@/components/HomeComponents/Partner";
import Events from "@/components/HomeComponents/Events";
import Feedback from "@/components/HomeComponents/Feedback";
import Department from "@/components/HomeComponents/Department";

export default function Home() {
  return (
    <main className="bg-[#FFF7F7]">
      <Banner />
      <LatestNews />
      <About />
      <Department />
      <ChooseUs />
      <Record />
      <CampusLife />
      <Events />
      <Feedback />
      <MemberShip />
      <Partner />
    </main>
  );
}
