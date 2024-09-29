import { useEffect } from "react";
import DentalistHero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Professionals from "../components/Professionals";
import AboutUsSection from "../components/AboutUs";
import TestimonialSection from "../components/Testimonal";

const Home = () => {
    useEffect(() => {
        // get the section id from the URL
        const sectionId = window.location.hash;
        if (sectionId) {
            console.log({ sectionId })
            // scroll to the section
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);


    return (
        <>
            <DentalistHero />
            <Products />
            <Services />
            <Professionals />
            <TestimonialSection />
            <AboutUsSection />
        </ >
    );
}

export default Home;