import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaRegEdit, FaStar } from 'react-icons/fa';

const steps = [
    {
        icon: <FaUserPlus size={28} />,
        title: 'Create an Account',
        description: 'Sign up for free and set up your profile to get started.',
    },
    {
        icon: <FaRegEdit size={28} />,
        title: 'Add Your Recipes',
        description: 'Upload your favorite recipes with ingredients and steps.',
    },
    {
        icon: <FaStar size={28} />,
        title: 'Get Noticed',
        description: 'Let others discover and favorite your creations!',
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-white py-16 text-gray-800">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-14"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    How It Works ✨
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-orange-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="mb-4 text-orange-600">{step.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-700">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
