import Head from "next/head";
import NavigationBar from "../../components/NavigationBar";
import ContentMarketingBody from "../../components/ContentMarketingBody";
import Footer from "../../components/Footer";

const ContentMarketing = () => {
    return(
        <div>
            <Head>
                <title>Content Marketing</title>
            </Head>
            <NavigationBar
                companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
            />
            <ContentMarketingBody/>
            <Footer/>
        </div>
    )
}

export default ContentMarketing;