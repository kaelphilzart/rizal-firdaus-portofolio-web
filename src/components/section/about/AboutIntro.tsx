"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function AboutIntro() {
  const [showImage, setShowImage] = useState(true)

  return (
    <section id="about" className="bg-black text-white px-6 py-10 md:py-32 space-y-20">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Where{" "}
          <span className="bg-gradient-to-b from-green-600 to-green-700 bg-clip-text text-transparent">
            Technology
          </span>{" "}
          meets <span className="text-white">Humanity</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Blending intelligence and empathy to build a future that feels alive — not artificial.
        </p>
      </motion.div>

      {/* Portrait / Bio */}
      <div
        onClick={() => setShowImage(!showImage)}
        className="relative w-full max-w-4xl h-[400px] mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
      >
        <AnimatePresence mode="wait">
          {showImage ? (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Techno Human Fusion"
                fill
                className="object-cover object-center"
              />
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <p className="text-white text-sm tracking-wide uppercase">Click to reveal</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white text-center p-10"
            >
              <p className="text-lg leading-relaxed max-w-xl">
                Hi, I’m <strong>Rizal Firdaus</strong> — a developer who’s passionate about crafting experiences that matter.
                I specialize in building digital solutions that are not just smart, but also meaningful for people.
                <br /><br />
                <a
                  href="https://github.com/kaelphilzart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline font-semibold"
                >
                  See my work on GitHub →
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <p className="text-md text-gray-400">
          We build technology with a purpose — tools that solve problems, spark progress, and connect humans.
        </p>
      </motion.div>
    </section>
  )
}
