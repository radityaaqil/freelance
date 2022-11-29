import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import AboutUsBody from "../components/AboutUsBody";
import { FaApple } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <NavigationBar companyIcon={<FaApple />} />
      <AboutUsBody />
      <Footer />
    </div>
  );
};

export default AboutUs;
