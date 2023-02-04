import NavigationBar from "../components/NavigationBar";
import Head from "next/head";
import WhatWeDoBody from "../components/WhatWeDoBody";
import Footer from "../components/Footer";

const WhatWeDo = () => {
    return(
        <div>
            <Head>
                <title>What We Do</title>
            </Head>
            <NavigationBar
                companyIcon={<img src="/Logo_1.png" className="h-[100px]" />}
            />
            <WhatWeDoBody/>
            <Footer/>
        </div>
    );
};

export default WhatWeDo;