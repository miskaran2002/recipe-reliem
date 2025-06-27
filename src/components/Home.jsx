import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';
import ThemeSlider from './ThemeSlider';
import Navbar from './Navbar';
import Footer from './Footer';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import TopRecipes from './TopRecipes';
import HeroSection from './HeroSection';
import TypewriterHeading from './TypewriterHeading';
import OurFeatures from './OurFeatures';
import FeatureCard from './FeatureCard';
import RecipeTestimonials from './RecipeTestimonials';

const Home = () => {
    const recipes = useLoaderData();
    // console.log(recipes);
    return (
        <div>

            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </div>


            
            {import.meta.env.VITE_name}




            <div className=''>
                <ThemeSlider></ThemeSlider>

            </div>

            <div>
                <TypewriterHeading></TypewriterHeading>
            </div>

            <div>
                <HeroSection></HeroSection>
            </div>


            <div>
                <TopRecipes></TopRecipes>

            </div>

            <RecipeTestimonials></RecipeTestimonials>




            <div>
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div>
                <HowItWorks></HowItWorks>
            </div>
            <OurFeatures></OurFeatures>
            <FeatureCard></FeatureCard>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;