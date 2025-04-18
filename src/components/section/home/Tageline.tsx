"use client"
import { useRef } from "react"
import { Rocket, ShieldCheck, Lightbulb, BadgeCheck } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Tageline() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const iconData = [
    { icon: Rocket, label: "Fast" },
    { icon: ShieldCheck, label: "Secure" },
    { icon: Lightbulb, label: "Smart" },
    { icon: BadgeCheck, label: "Proven" },
  ]

  return (
    <section className="bg-black py-8">
      <div className="max-w-6xl mx-auto text-center" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8"
        >
          Build. Launch. Grow.
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-[720px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-white"
        >
          {iconData.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col items-center gap-2 transition-all duration-200"
            >
              <Icon className="w-8 h-8 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold relative after:block after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full after:mt-1">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
