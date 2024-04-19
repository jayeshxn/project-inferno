import Navbar from "../components/shared/navbar/navbar";
import Footer from "../components/shared/footer/Footer";
import ReservationComponent from "../components/Reservation";

export default function Reservation() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <ReservationComponent />
            <Footer />
        </div>
    );
}