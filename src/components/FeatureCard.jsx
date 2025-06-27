const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="card bg-white dark:bg-gray-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="card-body items-center text-center">
                {icon}
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
