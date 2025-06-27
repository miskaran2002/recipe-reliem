import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Nusrat Jahan',
        role: 'Home Chef',
        comment:
            'Recipe Realm helped me organize and share my family recipes. Now everyone can try my signature biryani!',
        img: 'https://i.ibb.co/nNp8zvV6/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.jpg',
    },
    {
        name: 'Ayesha Khan',
        role: 'Food Blogger',
        comment:
            'From theme toggles to easy uploads — Recipe Realm is the ultimate platform for sharing food content.',
        img: 'https://i.ibb.co/HpGZCvVw/beautiful-smart-asian-young-entrepreneur-business-woman-owner-sme-checking-product-stock-scan-qr-cod.jpg',
    },
    {
        name: 'Samim Ahmed',
        role: 'Recipe Explorer',
        comment:
            'I love how I can save and like my favorite recipes! The site works perfectly on my phone.',
        img: 'https://i.ibb.co/0pSxdLTj/portrait-happy-smiling-young-businessman-blue-suit-isolated-white-wall.jpg',
    },
];

const RecipeTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const currentReview = testimonials[currentIndex];

    return (
        <section className="bg-orange-50 dark:bg-gray-800 py-16 px-6 md:px-12 lg:px-24 text-center">
            {/* Top Image */}
            <img
                src="https://i.ibb.co/ZYW3VTp/chef-testimonial.jpg"
                alt="Happy Cook"
                className="mx-auto rounded-2xl h-[300px] w-[500px] object-cover mb-8 shadow-lg"
            />

            {/* Title and Description */}
            <h2 className="text-4xl font-bold text-orange-600 mb-4">What Our Food Lovers Say</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                Join thousands of happy home cooks, food bloggers, and recipe hunters using Recipe Realm to spice up their culinary journey!
            </p>

            {/* Review Card */}
            <div className="relative max-w-xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                    >
                        <img
                            src={currentReview.img}
                            alt={currentReview.name}
                            className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-2 border-orange-400"
                        />
                        <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">{currentReview.name}</h3>
                        <p className="text-sm text-accent">{currentReview.role}</p>
                        <p className="mt-4 text-base text-gray-600 dark:text-gray-200 italic">“{currentReview.comment}”</p>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6 px-4">
                    <button
                        onClick={handlePrev}
                        className="btn btn-circle btn-outline btn-sm md:btn-md"
                        title="Previous"
                    >
                        ❮
                    </button>
                    <button
                        onClick={handleNext}
                        className="btn btn-circle btn-outline btn-sm md:btn-md"
                        title="Next"
                    >
                        ❯
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecipeTestimonials;
