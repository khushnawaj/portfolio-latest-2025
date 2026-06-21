import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiSearch,
  FiHome,
  FiCode,
  FiFileText,
  FiMail,
  FiMoon,
  FiSun,
  FiCopy,
  FiDownload,
  FiCornerDownLeft
} from "react-icons/fi";
import Toast from "./Toast";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "" });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.theme.mode);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  // Command items
  const items = [
    {
      id: "home",
      title: "Go to Home",
      category: "Navigation",
      icon: <FiHome />,
      action: () => {
        navigate("/");
        setIsOpen(false);
      }
    },
    {
      id: "projects",
      title: "Go to Projects",
      category: "Navigation",
      icon: <FiCode />,
      action: () => {
        navigate("/projects");
        setIsOpen(false);
      }
    },
    {
      id: "resume",
      title: "Go to Resume",
      category: "Navigation",
      icon: <FiFileText />,
      action: () => {
        navigate("/resume");
        setIsOpen(false);
      }
    },
    {
      id: "contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <FiMail />,
      action: () => {
        navigate("/contact");
        setIsOpen(false);
      }
    },
    {
      id: "terminal",
      title: "Open Interactive Terminal",
      category: "Navigation",
      icon: <FiCode />,
      action: () => {
        navigate("/terminal");
        setIsOpen(false);
      }
    },
    {
      id: "case-nexus360",
      title: "Case Study: Nexus360 ERP",
      category: "Projects",
      icon: <FiCode />,
      action: () => {
        navigate("/projects/nexus360");
        setIsOpen(false);
      }
    },
    {
      id: "case-scriptshelf",
      title: "Case Study: ScriptShelf",
      category: "Projects",
      icon: <FiCode />,
      action: () => {
        navigate("/projects/script-shelf");
        setIsOpen(false);
      }
    },
    {
      id: "toggle-theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Actions",
      icon: theme === "dark" ? <FiSun /> : <FiMoon />,
      action: () => {
        dispatch(toggleTheme());
        setIsOpen(false);
      }
    },
    {
      id: "copy-email",
      title: "Copy Contact Email",
      category: "Actions",
      icon: <FiCopy />,
      action: () => {
        navigator.clipboard.writeText("khushnawaj14@gmail.com");
        setToast({ show: true, message: "Email copied to clipboard!" });
        setTimeout(() => setToast({ show: false, message: "" }), 3000);
        setIsOpen(false);
      }
    },
    {
      id: "download-resume",
      title: "Download Resume PDF",
      category: "Actions",
      icon: <FiDownload />,
      action: () => {
        const link = document.createElement("a");
        link.href = "/Khushnawaj-Resume-.pdf";
        link.download = "Khushnawaj-Resume-.pdf";
        link.click();
        setIsOpen(false);
      }
    }
  ];

  // Filter items based on search input
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle palette open/close on keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle scrolling lock when palette is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveIndex(0);
      setSearch("");
      // Focus the input
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Handle keyboard navigation within the palette
  useEffect(() => {
    const handleNav = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[activeIndex]) {
          filteredItems[activeIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleNav);
    return () => window.removeEventListener("keydown", handleNav);
  }, [isOpen, activeIndex, filteredItems]);

  // Keep active item in view inside scroll container
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[activeIndex];
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeIndex]);

  return (
    <>
      {/* Floating help indicator at the bottom-right for keyboard users */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="
            flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shadow-md
            bg-white/95 border border-gray-200 text-gray-700 hover:bg-gray-50
            dark:bg-[#0B0B0D]/95 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5
            transition-all duration-300 active:scale-95
          "
        >
          <span>Cmd / Ctrl + K</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Box */}
            <motion.div
              className="
                relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border
                bg-white border-gray-200/80
                dark:bg-[#0F1014] dark:border-white/10
              "
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Search Bar input */}
              <div className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-white/5">
                <FiSearch className="text-gray-400 dark:text-gray-500 mr-3 text-lg" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveIndex(0);
                  }}
                  className="
                    w-full bg-transparent outline-none text-base md:text-lg
                    text-gray-900 placeholder-gray-400
                    dark:text-white dark:placeholder-gray-500
                  "
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                >
                  ESC
                </button>
              </div>

              {/* Items List */}
              <div
                ref={listRef}
                className="max-h-[350px] overflow-y-auto py-2 no-scrollbar"
              >
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => {
                    const showCategory =
                      idx === 0 ||
                      filteredItems[idx - 1].category !== item.category;

                    return (
                      <div key={item.id}>
                        {showCategory && (
                          <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-accent">
                            {item.category}
                          </div>
                        )}
                        <button
                          onClick={item.action}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={`
                            w-full px-4 py-3.5 flex items-center justify-between text-left text-sm font-medium transition-all
                            ${
                              activeIndex === idx
                                ? "bg-gray-100/80 dark:bg-white/[0.03] text-cyan-600 dark:text-white"
                                : "text-gray-700 dark:text-gray-300"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3.5">
                            <span className={`text-base ${activeIndex === idx ? "text-cyan-600 dark:text-accent" : "text-gray-400"}`}>
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          
                          {activeIndex === idx && (
                            <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
                              <FiCornerDownLeft size={10} /> Enter
                            </span>
                          )}
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-500">
                    No commands or pages found.
                  </div>
                )}
              </div>

              {/* Footer status bar */}
              <div className="px-4 py-3 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-white/5 flex justify-between text-[11px] text-gray-400">
                <div className="flex gap-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>ESC to Close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Toast message={toast.message} isVisible={toast.show} type="success" />
    </>
  );
}
