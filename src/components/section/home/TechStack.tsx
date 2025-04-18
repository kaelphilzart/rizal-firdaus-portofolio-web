"use client"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function TechStack() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.2 })

  return (
    <section id="tech-stack" className="bg-black py-10">
      {/* Container untuk tagline */}
      <div className="max-w-6xl mx-auto text-center px-4" ref={titleRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Empowering Your Ideas with Modern Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mb-8"
        >
          We utilize the latest tools & frameworks to bring your vision to life.
        </motion.p>
      </div>

      {/* Container khusus untuk icon-logo */}
      <div className="max-w-[540px] mx-auto relative overflow-hidden space-y-4">
        <div className="flex gap-12 animate-scroll whitespace-nowrap">
          <div className="flex gap-12">
            <Image
              src="/images/tech-logos/ts.png"
              alt="TypeScript"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/next.png"
              alt="Next.js"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/tailwind.png"
              alt="Tailwind CSS"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/node-js.png"
              alt="Node.js"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/react.png"
              alt="React"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/mongodb.png"
              alt="MongoDB"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/mysql.png"
              alt="MySQL"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
          </div>
          <div className="flex gap-12" aria-hidden="true">
            <Image
              src="/images/tech-logos/ts.png"
              alt="TypeScript"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/next.png"
              alt="Next.js"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/tailwind.png"
              alt="Tailwind CSS"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/node-js.png"
              alt="Node.js"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/react.png"
              alt="React"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/mongodb.png"
              alt="MongoDB"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/mysql.png"
              alt="MySQL"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
          </div>
        </div>

        <div className="flex gap-12 animate-scroll-reverse whitespace-nowrap">
          <div className="flex gap-12">
            <Image
              src="/images/tech-logos/postges.png"
              alt="PostgreSQL"
              className="h-12 w-auto"
              width={48} // sesuaikan lebar
              height={48} // sesuaikan tinggi
            />
            <Image
              src="/images/tech-logos/prisma.webp"
              alt="Prisma"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/docker.webp"
              alt="Docker"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/redux.png"
              alt="Redux"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/stripe.webp"
              alt="Stripe"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/framer.png"
              alt="Framer Motion"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/mui.png"
              alt="Material UI"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
          </div>
          <div className="flex gap-12" aria-hidden="true">
            <Image
              src="/images/tech-logos/postges.png"
              alt="PostgreSQL"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/prisma.webp"
              alt="Prisma"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/docker.webp"
              alt="Docker"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/redux.png"
              alt="Redux"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/stripe.webp"
              alt="Stripe"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/framer.png"
              alt="Framer Motion"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <Image
              src="/images/tech-logos/mui.png"
              alt="Material UI"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
