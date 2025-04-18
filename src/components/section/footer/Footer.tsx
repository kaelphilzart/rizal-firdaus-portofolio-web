"use client";
import Link from "next/link";
import { Instagram, Linkedin, Github, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-5 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-white">Technophil Media</h1>
          <p className="text-sm mt-1">
            © {year ?? "----"} All rights reserved.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex gap-6 text-sm">
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4 text-lg">
          <Link
            href="https://www.instagram.com/_philzart/"
            target="_blank"
            className="hover:text-white transition"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://github.com/kaelphilzart/"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-rizal-firdaus-philzart/"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://wa.me/6287745477213"
            target="_blank"
            className="hover:text-white transition"
          >
            <Phone size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
