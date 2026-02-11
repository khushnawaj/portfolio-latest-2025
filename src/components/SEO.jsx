import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description }) {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        document.title = title ? `${title} | Khushnawaj` : "Khushnawaj | Full Stack Developer";

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description || "Full Stack Developer portfolio of Khushnawaj.");
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = description || "Full Stack Developer portfolio of Khushnawaj.";
            document.head.appendChild(meta);
        }
    }, [title, description, location]);

    return null;
}
