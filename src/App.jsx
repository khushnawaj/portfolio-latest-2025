import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

export default function App() {
  const theme = useSelector((state) => state.theme.mode);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Wrap every page in the PageTransition component
  const WrappedHome = () => <PageTransition><Home /></PageTransition>;
  const WrappedProjects = () => <PageTransition><Projects /></PageTransition>;
  const WrappedProjectDetails = () => <PageTransition><ProjectDetails /></PageTransition>;
  const WrappedResume = () => <PageTransition><Resume /></PageTransition>;
  const WrappedContact = () => <PageTransition><Contact /></PageTransition>;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WrappedHome />} />
          <Route path="/projects" element={<WrappedProjects />} />
          <Route path="/projects/:slug" element={<WrappedProjectDetails />} />
          <Route path="/resume" element={<WrappedResume />} />
          <Route path="/contact" element={<WrappedContact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
