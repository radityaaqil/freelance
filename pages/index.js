import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { FaApple } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AGAS SOLUTION</title>
      </Head>
      <NavigationBar companyIcon={<FaApple />} />
      <div className="mt-8">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
