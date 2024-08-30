import Location from "@/components/ContactComponents/Location";
import MainContact from "@/components/ContactComponents/MainContact";
import PageBanner from "@/components/Shared/PageBanner";

const ContactPage = () => {
  return (
    <div>
      <PageBanner heading={"Contact Us"} />
      <MainContact />
      <Location />
    </div>
  );
};

export default ContactPage;
