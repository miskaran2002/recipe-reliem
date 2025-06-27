import React from "react";
import { motion } from "framer-motion";
import FAQSection from "./FAQ";
import { Link } from "react-router"; // assuming you use react-router
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <div>   

            <Navbar></Navbar>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="px-6 py-12 max-w-6xl mx-auto"
            >
                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
                    About Us
                </h2>

                {/* Image */}
                <div className="mb-10">
                    <img
                        src="https://i.ibb.co/G4GvBBkJ/6747060.jpg"
                        alt="About Us - Recipe Reliem"
                        className="rounded-2xl shadow-lg w-full max-h-[500px] object-cover"
                    />
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center leading-relaxed">
                    Welcome to <strong>Recipe Reliem</strong> — your personal kitchen companion! We believe cooking is more than just a task — it's an experience worth sharing.
                    Whether you’re a seasoned chef or a curious beginner, our platform allows you to store, manage, and share recipes with a growing food-loving community.
                    Join us to discover global cuisines, quick meals, and healthy choices tailored just for you.
                </p>

                {/* FAQ Section */}
                <FAQSection />

                {/* Back to Home Button */}
                <div className="mt-12 text-center">
                    <Link to="/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition">
                        ← Back to Home
                    </Link>
                </div>
            </motion.div>
            <Footer></Footer>
        </div>

    );
};

export default AboutUs;
