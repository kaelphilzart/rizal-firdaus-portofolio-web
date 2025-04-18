"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-green-400 text-sm uppercase tracking-widest">
            Contact
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Let’s Connect and Collaborate
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Whether it’s about work, collaboration, or just saying hi — I’d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <form
            action="https://getform.io/f/apjnkvwa"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#0F1B17] border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#0F1B17] border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-[#0F1B17] border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
            <input type="hidden" name="_gotcha" style={{ display: "none" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
              <button
                type="submit"
                className="w-full bg-green-400 text-black font-semibold py-3 rounded-full border border-green-400 hover:bg-transparent hover:text-green-400 transition"
              >
                Send Message
              </button>

              <div className="md:text-end text-center">
                <a
                  href="/files/CV_YourName.pdf"
                  download
                  className="inline-block w-full md:w-auto border border-green-400 text-green-400 px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition font-semibold"
                >
                  Download CV
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
