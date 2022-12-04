import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>FEAT</title>
      </Head>
      <NavigationBar
        companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
      />
      <div className="mt-4">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
