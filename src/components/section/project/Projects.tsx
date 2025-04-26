"use client";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SPK Pada Koperasi Simpan Pinjam",
    description: "Sistem Pendukung Keputusan dibangun menggunakan metode Simple Additive Weight ( SAW ), dan menggunakan laravel dari sisi backend dan next js dari sisi frontend",
    image: "/images/techno_humanoid_background.webp",
    url: "https://github.com/kaelphilzart/Sistem-Pendukung-Keputusan-SAW-Pada-Koperasi",
  },
  {
    title: "Sistem Penggajian Pada konveksi Jahit",
    description: "Sistem Informasi ini dibangun menggunakan framework laravel",
    image: "/images/techno_humanoid_background.webp",
    url: "https://github.com/kaelphilzart/sistem-penggajian-pada-konveksi-jahita",
  },
  {
    title: "Sistem Penilaian siswa pada Madrasah Diniyah",
    description: "Sistem Informasi ini dibangun menggunakan framework laravel",
    image: "/images/techno_humanoid_background.webp",
    url: "https://github.com/kaelphilzart/sistem-penilaian-pada-madrasah-diniyah",
  },
  {
    title: "SPK Seleksi Pelamar Pekerjaan",
    description: "Sistem Pendukung Keputusan ini menggunakan metode profile matching dn dibangun menggunakan framework laravel",
    image: "/images/techno_humanoid_background.webp",
    url: "https://github.com/kaelphilzart/sistem-pendukung-keputusan-metode-profile-matching-seleksi-pelamar-pekerjaan-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-green-400 text-sm uppercase tracking-widest mb-2">
            Projects
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">Things I&apos;ve Built</h1> {/* Fixed here */}
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee w-max">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="shrink-0 w-[300px] mx-3 bg-[#0F1B17] rounded-2xl shadow-md flex flex-col justify-between"
              >
                <Link href={project.url} target="_blank" className="block group/card">
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-72 hover:scale-[1.02] transition">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover brightness-75"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h2 className="text-white text-lg font-semibold mb-1">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
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
