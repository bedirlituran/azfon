"use client";
import React, { useState } from "react";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  // Scroll funksiyası
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setExpanded(false); // mobil menyunu bağla
    }
  };

  return (
    <div className="text-white bg-linear-to-br from-gray-800 via-black to-gray-800">
      {/* Header */}
      <header className="py-4 sm:py-6 sticky top-0 bg-linear-to-br from-gray-800 via-black to-gray-800 backdrop-blur-md z-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <a
                href="#"
                title="AZFON"
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => handleScroll("hero")}
              >
                <img
                  className="w-28 h-12 object-contain"
                  src="logo.jpg"
                  alt="AZFON Logo"
                />
                <span className="text-xl font-semibold text-cyan-400">
                  AZFON Technologies
                </span>
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

           {/* Navbar Desktop */}
<nav className="hidden md:flex md:items-center md:space-x-10">
  {[
    ["Ana Səhifə", "hero"],
    ["Haqqımızda", "about"],
    ["Tariflər", "pricing"],
    ["Məhsullar", "features"],
    ["Xidmətlər", "xidmet"],
    ["Odenis", "odenis"],

    ["Əlaqə", "tel:0558088001"], // <- telefon link
  ].map(([label, idOrLink]) => (
    <span
      key={label}
      onClick={() => {
        if (idOrLink.startsWith("tel:")) {
          window.location.href = idOrLink;
        } else {
          handleScroll(idOrLink);
        }
      }}
      className="text-base text-gray-300 cursor-pointer transition-all duration-200 hover:text-cyan-400"
    >
      {label}
    </span>
  ))}
</nav>

          </div>

          {/* Navbar Mobile */}
{expanded && (
  <nav className="md:hidden animate-fade-in-down">
    <div className="flex flex-col pt-6 pb-4 space-y-5">
      {[
          ["Ana Səhifə", "hero"],
    ["Haqqımızda", "about"],
    ["Tariflər", "pricing"],
    ["Məhsullar", "features"],
    ["Xidmətlər", "xidmet"],
    ["Odenis", "odenis"],

        ["Əlaqə", "tel:0558088001"], // telefon link
      ].map(([label, idOrLink]) => (
        <span
          key={label}
          onClick={() => {
            if (idOrLink.startsWith("tel:")) {
              window.location.href = idOrLink;
            } else {
              handleScroll(idOrLink);
            }
          }}
          className="text-base text-gray-300 cursor-pointer transition-all duration-200 hover:text-cyan-400"
        >
          {label}
        </span>
      ))}
    </div>
  </nav>
)}

        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="py-16 sm:pb-20 lg:pb-28 xl:pb-32 relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative flex flex-col-reverse lg:flex-row items-center lg:items-start">
            {/* Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-sm tracking-widest text-gray-400 uppercase">
                Sürətli İnternet və Keyfiyyətli TV Xidmətləri
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AZFON ilə Evində Hər Şey Sürətli
              </h1>
              <p className="mt-6 text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
                Fiber internet, HD TV kanalları və limitsiz bağlantı.  
                Evini və işini daha ağıllı et — AZFON ilə.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => handleScroll("pricing")}
                  className="px-8 py-3 text-base font-medium rounded-full bg-linear-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-all shadow-lg"
                >
                  Başla
                </button>
                <button
                  onClick={() => handleScroll("about")}
                  className="px-8 py-3 text-base font-medium border border-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all"
                >
                  Daha ətraflı
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center relative">
              <img
                className="w-72 sm:w-80 lg:w-[400px] xl:w-[420px] drop-shadow-[0_0_40px_rgba(56,189,248,0.3)] animate-spin-forward"
                src="hero.svg"
                alt="AZFON internet illustration"
              />
              <div className="absolute -z-10 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes spin-forward {
          from {
            transform: rotateY(360deg);
          }
          to {
            transform: rotateY(0deg);
          }
        }
        .animate-spin-forward {
          animation: spin-forward 5s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
