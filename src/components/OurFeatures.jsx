import {
    FaUserShield,
    FaRegThumbsUp,
    FaMobileAlt,
    FaCloudUploadAlt,
    FaLeaf,
    FaRegSmileBeam,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
    {
        id: 1,
        icon: <FaUserShield className="text-4xl text-orange-500" />,
        title: "Secure & Private",
        description: "Only you can update or delete your recipes. Your data is safe with end-to-end Firebase auth and protected routes.",
    },
    {
        id: 2,
        icon: <FaRegThumbsUp className="text-4xl text-orange-500" />,
        title: "Like System",
        description: "Users can like others’ recipes but not their own — promoting authentic engagement.",
    },
    {
        id: 3,
        icon: <FaMobileAlt className="text-4xl text-orange-500" />,
        title: "Mobile Friendly",
        description: "Designed to work flawlessly on mobile, tablet, and desktop — pixel-perfect responsive.",
    },
    {
        id: 4,
        icon: <FaCloudUploadAlt className="text-4xl text-orange-500" />,
        title: "Easy Recipe Upload",
        description: "Add new recipes with name, category, cooking time, photo, ingredients, and steps — all in one form.",
    },
    {
        id: 5,
        icon: <FaLeaf className="text-4xl text-orange-500" />,
        title: "Theme Switcher",
        description: "Switch between Light, Dark, Blue, or Green themes easily using our built-in Context API toggle.",
    },
    {
        id: 6,
        icon: <FaRegSmileBeam className="text-4xl text-orange-500" />,
        title: "User Friendly UI",
        description: "Modern animations, clean layout, and intuitive navigation make it easy for anyone to use.",
    },
];

const OurFeatures = () => {
    return (
        <section className="py-16 bg-orange-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-orange-600 mb-4">Why Choose Recipe Reliem</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-12">
                    Discover the unique benefits that make Recipe Reliem your go-to recipe management platform.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;
