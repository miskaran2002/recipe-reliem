import { Typewriter } from 'react-simple-typewriter';

const TypewriterHeading = () => {
    return (
        <h1 className="text-4xl md:text-5xl text-center mb-3 font-bold text-orange-600 dark:text-orange-300">
            <Typewriter
                words={['Discover Recipes', 'Share Your Dishes', 'Love Cooking', 'Explore New Flavors']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
            />
        </h1>
    );
};

export default TypewriterHeading;
