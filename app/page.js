"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Xidmet from "./components/Xidmet";
import Accordion from "./components/Accordion";
import Whatsapp from "./components/Whatsapp";
import Xidmetler from "./components/Xidmetler";
import Odenis from "./components/Odenis";
export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // scroll zamanı düyməni göstər/gizlət
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="scroll-smooth relative">
      <Hero />
      <section id="about">
        <About />
      </section>
       <section id="xidmet">
        <Xidmetler />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
        <section id="odenis">
        <Odenis />
      </section>
      <section id="features">
        <Features />
      </section>
      <section>
        <Xidmet />
      </section>
      <section>
        <Accordion />
      </section>
       
      <Whatsapp />

      {/* Scroll to top düyməsi */}
      <div className="fixed bottom-8 left-8 z-50">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full text-white bg-linear-to-br from-gray-800 via-black to-gray-800 transition-all duration-300 shadow-lg  cursor-pointer"
            aria-label="Yuxarı çıx"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </main>
  );
}
