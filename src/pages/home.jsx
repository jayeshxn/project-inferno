import Hero from "../components/Hero";
import Navbar from "../components/shared/navbar/navbar";
import Footer from "../components/shared/footer/Footer";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Home() {

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}