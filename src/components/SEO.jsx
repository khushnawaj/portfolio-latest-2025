import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, image, type = "website" }) {
    const { pathname } = useLocation();
    const siteName = "Khushnawaj";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Full Stack Developer`;
    const fullDescription = description || "Portfolio of Khushnawaj, a Full Stack Developer specializing in high-performance web systems and intuitive user interfaces.";
    const fullUrl = `https://khushnawaj.dev${pathname}`; // Replace with actual domain
    const fullImage = image || "https://khushnawaj.dev/og-image.png"; // Default OG image

    useEffect(() => {
        // Core Metadata
        document.title = fullTitle;
        
        const updateMeta = (name, content, attr = "name") => {
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (element) {
                element.setAttribute("content", content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                element.setAttribute("content", content);
                document.head.appendChild(element);
            }
        };

        updateMeta("description", fullDescription);
        
        // OpenGraph
        updateMeta("og:title", fullTitle, "property");
        updateMeta("og:description", fullDescription, "property");
        updateMeta("og:url", fullUrl, "property");
        updateMeta("og:type", type, "property");
        updateMeta("og:image", fullImage, "property");
        updateMeta("og:site_name", siteName, "property");

        // Twitter
        updateMeta("twitter:card", "summary_large_image");
        updateMeta("twitter:title", fullTitle);
        updateMeta("twitter:description", fullDescription);
        updateMeta("twitter:image", fullImage);

    }, [fullTitle, fullDescription, fullUrl, fullImage, type]);

    return null;
}
