import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ContactUsBody from "../components/ContactUsBody";
import Head from "next/head";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <NavigationBar
        companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
      />
      <ContactUsBody />
      <Footer />
    </div>
  );
};

export default ContactUs;
