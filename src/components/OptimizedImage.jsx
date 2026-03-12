import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "./Skeleton";

export default function OptimizedImage({ src, alt, className, skeletonClass }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            <Skeleton className={`w-full h-full rounded-none ${skeletonClass}`} />
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`
          w-full h-full object-cover transition-all duration-700
          ${isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-xl"}
        `}
        loading="lazy"
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-white/5 text-gray-400 text-xs">
          Failed to load image
        </div>
      )}
    </div>
  );
}
