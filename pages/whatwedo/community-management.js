import Head from "next/head";
import NavigationBar from "../../components/NavigationBar";
import CommunityManagementBody from "../../components/CommunityManagementBody";
import Footer from "../../components/Footer";

const CommunityManagement = () => {
    return(
        <div>
            <Head>
                <title>Community Management</title>
            </Head>
            <NavigationBar
                companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
            />
            <CommunityManagementBody/>
            <Footer/>
        </div>
    )
}

export default CommunityManagement;