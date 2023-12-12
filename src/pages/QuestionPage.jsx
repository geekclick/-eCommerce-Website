import QuestionMenuPageImg from "../components/FAQPage/QuestionMenuPageImg";
import QuestionMenu from "../components/FAQPage/QuestionMenu";
import AccordionSection from "../components/FAQPage/AccordionSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function QuestionPage() {
  return (
    <div className="QuestionPage  bg-black">
      <Navbar />
      <QuestionMenuPageImg />
      <QuestionMenu />
      <AccordionSection />
      <br />
      <AccordionSection />
      <Footer />
    </div>
  );
}

export default QuestionPage;
