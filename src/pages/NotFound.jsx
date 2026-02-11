
import { Link } from "react-router-dom";
import SEO from "../components/SEO"; // Assuming SEO component exists for consistency
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
            <SEO title="404 Not Found" description="The page you are looking for does not exist." />

            {/* 404 Number Glitch Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
            >
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 select-none">
                    404
                </h1>
                <div className="absolute inset-0 text-9xl font-bold text-cyan-500/20 blur-sm select-none">
                    404
                </div>
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Page Not Found
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                to="/"
                className="
          px-8 py-3 rounded-lg font-medium transition
          bg-gray-900 text-white hover:bg-gray-800
          dark:bg-white dark:text-black dark:hover:bg-gray-200
        "
            >
                Back to Home
            </Link>
        </div>
    );
}
