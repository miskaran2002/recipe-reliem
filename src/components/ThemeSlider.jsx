import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        title: "Healthy Recipes",
        description: "Discover delicious and nutritious meals to fuel your body.",
        image: "https://i.ibb.co/LhhqdV5V/pexels-janetrangdoan-1092730.jpg",
    },
    {
        id: 2,
        title: "Quick Meals",
        description: "Whip up tasty dishes in under 30 minutes!",
        image: "https://i.ibb.co/ycHq2sfn/pexels-roman-odintsov-5836769.jpg",
    },
    {
        id: 3,
        title: "Global Cuisines",
        description: "Explore flavors from around the world on one plate.",
        image: "https://i.ibb.co/Zz7s1r8j/pexels-gera-cejas-3616330-23014601.jpg",
    },
];

const ThemeSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-5xl mx-auto mt-10 mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[index].id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-white"
                    style={{ backgroundImage: `url(${slides[index].image})` }}
                >
                    <div className="bg-white/80 p-6 md:p-10 rounded-xl text-center max-w-lg shadow-md">
                        <h2 className="text-2xl md:text-4xl text-orange-700 font-bold mb-2">{slides[index].title}</h2>
                        <p className="text-sm md:text-lg text-gray-800">{slides[index].description}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${i === index ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ThemeSlider;
