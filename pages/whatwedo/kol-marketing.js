import Head from "next/head";
import NavigationBar from "../../components/NavigationBar";
import KOLMarketingBody from "../../components/KOLMarketingBody";
import Footer from "../../components/Footer";

const KOLMarketing = () => {
    return(
        <div>
            <Head>
                <title>KOL Marketing</title>
            </Head>
            <NavigationBar
                companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
            />
            <KOLMarketingBody/>
            <Footer/>
        </div>
    )
}

export default KOLMarketing;