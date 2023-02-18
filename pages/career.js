import NavigationBar from "../components/NavigationBar";
import Head from "next/head";
import CareerBody from "../components/CareerBody";

const Career = () => {
    return(
        <div>
            <Head>
                <title>Contact Us</title>
            </Head>
            <NavigationBar
                companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
            />
            <CareerBody />
        </div>    
    )
}

export default Career;