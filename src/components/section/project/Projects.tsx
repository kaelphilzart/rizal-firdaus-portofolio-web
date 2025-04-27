"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const projects = [
  {
    title: "SPK Pada Koperasi Simpan Pinjam",
    description: "Sistem Pendukung Keputusan dibangun menggunakan metode Simple Additive Weight ( SAW ), dan menggunakan laravel dari sisi backend dan next js dari sisi frontend",
    image: "/images/project/SPK-pada-koperasi-simpan-pinjam.webp",
    url: "https://github.com/kaelphilzart/Sistem-Pendukung-Keputusan-SAW-Pada-Koperasi",
  },
  {
    title: "Sistem Raport Pada Sekolah Dasar Negeri",
    description: "Sistem Informasi ini dibangun menggunakan framework laravel",
    image: "/images/project/SI-raport-pada-SDN-watudakon.webp",
    url: "https://github.com/kaelphilzart/sistem-penilaian-dan-absensi-pada-sekolah-dasar-by-framework-laravel",
  },
  {
    title: "Sistem Penilaian siswa pada Madrasah Diniyah",
    description: "Sistem Informasi ini dibangun menggunakan framework laravel",
    image: "/images/project/SI-penilaian-siswa-pada-madrasah-diniyah.webp",
    url: "https://github.com/kaelphilzart/sistem-penilaian-pada-madrasah-diniyah",
  },
  {
    title: "SPK Seleksi Pelamar Pekerjaan",
    description: "Sistem Pendukung Keputusan ini menggunakan metode profile matching dn dibangun menggunakan framework laravel",
    image: "/images/project/SPK-penerimaan-pelamar-perkerja-di-travel-umroh-dan-haji.webp",
    url: "https://github.com/kaelphilzart/sistem-pendukung-keputusan-metode-profile-matching-seleksi-pelamar-pekerjaan-",
  },
];

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <section id="projects" className="bg-black text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-green-400 text-sm uppercase tracking-widest mb-2">
            Projects
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">Things I&apos;ve Built</h1> {/* Fixed here */}
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 py-5">
          {/* Custom Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
            <button ref={prevRef} className="p-2 rounded-full bg-black/60 hover:bg-black/80 transition">
              <ArrowLeft className="text-white w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
            <button ref={nextRef} className="p-2 rounded-full bg-black/60 hover:bg-black/80 transition">
              <ArrowRight className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              const navigation = swiper.params.navigation as any; 
              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="my-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="max-w-xs md:max-w-sm">
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.15}>
                  <Link href={project.url} target="_blank" className="block group">
                    <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-2xl bg-[#0F1B17]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover brightness-30 group-hover:brightness-75 transition-all duration-500 scale-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 p-6">
                        <h2 className="text-white text-xl font-bold">{project.title}</h2>
                        <p className="text-gray-300 text-sm mt-2 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center mt-2">
          <Link
            href="https://github.com/kaelphilzart/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline font-semibold"
          >
            See All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
