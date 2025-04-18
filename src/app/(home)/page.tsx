import Image from 'next/image'
import Navbar from "@/components/section/Navbar"
import Hero from "@/components/section/home/Hero"
import TechStack from '@/components/section/home/TechStack'
import Tageline from '@/components/section/home/Tageline'
import AboutIntro from '@/components/section/about/AboutIntro'
import AboutServices from '@/components/section/about/AboutServices'
import Projects from '@/components/section/project/Projects'
import Contact from '@/components/section/contact/Contact'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Tageline />
    <TechStack />
    <AboutIntro />
    <AboutServices />
    <Projects />
    <Contact />
    </>
  )
}
