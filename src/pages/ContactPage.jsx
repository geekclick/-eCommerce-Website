import ContactPageImg from "../components/ContactPage/ContactPageImg";
import ContactMenu from "../components/ContactPage/ContactMenu";
import AccordionSection from "../components/ContactPage/AccordionSection";
import Navbar from "../components/Navbar";
import TopFooter from "../components/ContactPage/TopFooter";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="ContactPage  bg-black">
      <Navbar />
      <ContactPageImg />
      <ContactMenu />
      <AccordionSection />
      <br />
      <AccordionSection />
      <TopFooter />
      <Footer />
    </div>
  );
}

export default ContactPage;
