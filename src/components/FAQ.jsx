import React, { useState } from "react";

const faqs = [
    {
        question: "What is Recipe Reliem?",
        answer:
            "Recipe Reliem is a community-driven platform where home cooks and food lovers can explore, share, and manage their favorite recipes in one place.",
    },
    {
        question: "Do I need an account to view recipes?",
        answer:
            "No, you can browse public recipes without an account. However, to create, like, or manage recipes, you'll need to sign up.",
    },
    {
        question: "Is Recipe Reliem free to use?",
        answer:
            "Absolutely! Recipe Reliem is free for everyone. You can create an account and start adding your own recipes anytime.",
    },
    {
        question: "Can I edit or delete my own recipes?",
        answer:
            "Yes, once logged in, you can edit or delete any recipe you have created through your dashboard.",
    },
    {
        question: "How do I like a recipe?",
        answer:
            "Simply click the like button on any recipe card. You must be logged in to use this feature.",
    },
    {
        question: "Can I change my account information later?",
        answer:
            "Yes, from your profile page, you can update your name, photo, and other details easily.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="bg-orange-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Frequently Asked Questions</h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-orange-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer transition hover:shadow"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-medium text-orange-700">{faq.question}</h4>
                            <span className="text-xl text-orange-600">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700 dark:text-gray-300 transition-all duration-300">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
