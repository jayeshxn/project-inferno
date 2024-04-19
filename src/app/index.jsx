import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Playground from "../pages/playground";
import PageNotFound from "../pages/PageNotFound";
import {Suspense} from "react";
import Loader from "../components/Loader";
import Reservation from "../pages/reservation";
import Billing from "../pages/billing";

export default function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/reservations" element={<Reservation/>}/>
                <Route path="/billing" element={<Billing/>}/>
                <Route path="/play" element={<Playground/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Suspense>
    );
}
