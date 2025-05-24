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

const Home = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div>

            <div>
                <Navbar></Navbar>
            </div>





            <div className=''>
                <ThemeSlider></ThemeSlider>

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