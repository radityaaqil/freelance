import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import AboutUsBody from "../components/AboutUsBody";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <NavigationBar
        companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
      />
      <AboutUsBody />
      <Footer />
    </div>
  );
};

export default AboutUs;
