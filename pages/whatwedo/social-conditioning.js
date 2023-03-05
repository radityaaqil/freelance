import Head from "next/head";
import NavigationBar from "../../components/NavigationBar";
import SocialConditioningBody from "../../components/SocialConditioningBody";
import Footer from "../../components/Footer";

const SocialConditioning = () => {
    return(
        <div>
            <Head>
                <title>Social Conditioning</title>
            </Head>
            <NavigationBar
                companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
            />
            <SocialConditioningBody/>
            <Footer/>
        </div>
    )
}

export default SocialConditioning;