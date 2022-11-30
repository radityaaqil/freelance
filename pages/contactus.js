import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ContactUsBody from "../components/ContactUsBody";
import { FaApple } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <NavigationBar companyIcon={<FaApple />} />
      <ContactUsBody />
      <Footer />
    </div>
  );
};

export default ContactUs;
