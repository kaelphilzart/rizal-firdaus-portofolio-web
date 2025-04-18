"use client";
import { Globe, Smartphone, PenTool, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutServices() {
    return (
        <section className="bg-black text-white py-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Intro */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-green-400 text-sm uppercase tracking-widest">About Technophil Media</h2>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Where <span className="text-green-400">Technology</span> meets <span className="text-green-400">Humanity</span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        We are <strong>Technophil Media</strong> — a digital studio driven by a deep belief in human-centered technology.
                        We craft digital solutions that not only work great but feel meaningful and intuitive.
                    </p>
                </motion.div>

                {/* Portrait Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-full md:max-w-xs mx-auto md:mx-0">
                            <Image
                                src="/images/about-services.png"
                                alt="Founder Potrait"
                                width={600}
                                height={400}
                                priority
                                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                            />
                        </div>

                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold">Meet the Mind Behind the Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Founded by <strong>Rizal Firdaus</strong>, Technophil Media brings together years of experience in software development,
                            digital design, and system integration. Our mission is to deliver impactful tech that connects, empowers, and evolves with people.
                        </p>
                    </motion.div>
                </div>

                {/* Services Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-bold mb-8">Our Capabilities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Globe className="text-green-400 w-8 h-8 mx-auto mb-4" />,
                                title: "Web Development",
                                desc: "Modern, scalable websites",
                            },
                            {
                                icon: <Smartphone className="text-green-400 w-8 h-8 mx-auto mb-4" />,
                                title: "Mobile Apps",
                                desc: "Android & iOS native apps",
                            },
                            {
                                icon: <PenTool className="text-green-400 w-8 h-8 mx-auto mb-4" />,
                                title: "UI/UX Design",
                                desc: "Human-centered interfaces",
                            },
                            {
                                icon: <Settings className="text-green-400 w-8 h-8 mx-auto mb-4" />,
                                title: "System Integration",
                                desc: "ERP, APIs, Automation",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#0F1B17] p-6 rounded-2xl text-center shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {service.icon}
                                <h4 className="font-semibold">{service.title}</h4>
                                <p className="text-gray-400 text-sm mt-1">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
