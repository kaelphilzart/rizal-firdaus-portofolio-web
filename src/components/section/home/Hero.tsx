"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden scroll-mt-20">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/bg-hero.mp4"
                poster="/images/black.avif"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4"
                >
                    <h1 className="text-4xl sm:text-6xl font-semibold mb-4 opacity-100">
                        Technophil Media <br />
                        For World of Technology
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-lg md:text-xl max-w-xl text-center text-white"
                >
                    Turning ideas into digital impact — from custom apps to personal branding solutions.
                </motion.h2>

                <div className="flex mx-auto flex-row items-center gap-4 mt-2">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        href="#about"
                        className=" bg-gradient-to-b from-green-600 to-green-700
                                text-white font-semibold
                                px-6 py-3
                                rounded-lg
                                shadow-md
                                hover:shadow-lg
                                transition
                                hover:from-green-500 hover:to-green-600"
                    >
                        Explore More
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        href="#about"
                        className=" bg-gradient-to-b bg-white
                                text-green-700 font-semibold
                                px-6 py-3
                                rounded-lg
                                shadow-md
                                hover:shadow-lg
                                transition
                                hover:from-slate-300 hover:to-gray-200"
                    >
                        Contact Us
                    </motion.a>
                </div>

            </div>
        </section>
    );
}
