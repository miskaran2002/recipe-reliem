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

const Home = () => {
    const recipes = useLoaderData();
    // console.log(recipes);
    return (
        <div>

            <div>
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




            <div>
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div>
                <HowItWorks></HowItWorks>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;