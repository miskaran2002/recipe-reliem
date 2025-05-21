import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart, FaUserEdit, FaUtensils } from 'react-icons/fa';

const features = [
    {
        icon: <FaUtensils size={30} />,
        title: 'Easy Recipe Uploads',
        description: 'Add and share your favorite recipes in just a few clicks.',
    },
    {
        icon: <FaUserEdit size={30} />,
        title: 'Personalized Dashboard',
        description: 'See your added recipes, edit them, and track favorites.',
    },
    {
        icon: <FaRegHeart size={30} />,
        title: 'Community Favorites',
        description: 'Explore most-loved recipes from other home chefs.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-orange-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Why RecipeRealm Works So Well 🍲
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="text-orange-500 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
