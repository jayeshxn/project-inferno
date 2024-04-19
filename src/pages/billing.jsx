import Navbar from "../components/shared/navbar/navbar";
import Footer from "../components/shared/footer/Footer";
import BillingSection from "../components/billingSection";

export default function Billing() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <BillingSection />
            <Footer />
        </div>
    );
}