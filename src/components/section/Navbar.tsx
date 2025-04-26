"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];

    const handleSectionScroll = () => {
      const scrollY = window.scrollY;

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top - 100 && scrollY < top + height - 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  const navLinkClasses = "px-2 py-1 transition duration-300 ease-in-out hover:border-l-4 hover:border-r-4 hover:border-green-800";

  return (
    <AnimatePresence>
      {scrollDir === "up" && (
        <motion.nav
          key="navbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed w-full z-50 transition-all ${
            scrolled ? "bg-black/80 backdrop-blur" : "bg-transparent"
          }`}
        >
          <div className="max-w-[800px] w-full relative mx-auto flex items-center justify-between p-2 rounded-full my-4 px-8 font-bold">
            <div className="hidden md:flex items-center gap-8 text-white">
              <button
                onClick={() => handleSmoothScroll("home")}
                className={`${navLinkClasses} ${
                  activeSection === "home" ? "border-l-4 border-r-4 border-green-400 text-green-400" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleSmoothScroll("about")}
                className={`${navLinkClasses} ${
                  activeSection === "about" ? "border-l-4 border-r-4 border-green-400 text-green-400" : ""
                }`}
              >
                About
              </button>
            </div>

            <div className="text-white text-2xl font-bold">
              <Image
                src="/images/logo-putih.png"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </div>

            <div className="hidden md:flex items-center gap-8 text-white">
              <button
                onClick={() => handleSmoothScroll("projects")}
                className={`${navLinkClasses} ${
                  activeSection === "projects" ? "border-l-4 border-r-4 border-green-400 text-green-400" : ""
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleSmoothScroll("contact")}
                className={`${navLinkClasses} ${
                  activeSection === "contact" ? "border-l-4 border-r-4 border-green-400 text-green-400" : ""
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={handleToggle} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden bg-black/90 text-white p-4 space-y-4"
            >
              <ul className="flex flex-col gap-4 items-center">
                {["home", "about", "projects", "contact"].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleSmoothScroll(section)}
                      className={`transition ${
                        activeSection === section ? "text-green-400 font-semibold" : ""
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
