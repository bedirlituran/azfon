"use client";
import React from "react";

export default function Footer() {
  const links = [
    ["Ana Səhifə", "#hero"],
    ["Haqqımızda", "#about"],
    ["Tariflər", "#pricing"],
    ["Məhsullar", "#features"],
    ["Xidmətlər", "#xidmet"],
    ["Ödəniş", "#odenis"],
  ];

  return (
    <footer className="py-12 bg-linear-to-br from-gray-800 via-black to-gray-800 text-gray-300">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Logo və təsvir */}
          <div className="flex flex-col md:w-1/3">
            <a href="#hero" className="flex items-center space-x-3 mb-4">
              <img
                className="w-32 h-14 object-contain"
                src="logo.jpg"
                alt="AZFON Logo"
              />
              <span className="text-2xl font-semibold text-cyan-400">
                AZFON Technologies
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Sürətli internet və keyfiyyətli TV xidmətləri ilə evinizi və
              işinizi daha ağıllı edin.
            </p>

            {/* Sosial media ikonları */}
            <div className="flex space-x-3 mt-5">
              {["twitter", "facebook", "github"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500 transition-all duration-300"
                >
                  <i className={`ri-${icon}-fill text-white text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Naviqasiya linkləri */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 md:w-2/3">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3 tracking-wide">
                Naviqasiya
              </h4>
              <ul className="space-y-2">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-200 text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3 tracking-wide">
                Əlaqə
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+994558088001"
                    className="hover:text-cyan-400 transition"
                  >
                    📞 055 808 80 01
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@azfon.az"
                    className="hover:text-cyan-400 transition"
                  >
                    ✉️ info@azfon.az
                  </a>
                </li>
                <li>Bakı, Azərbaycan</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3 tracking-wide">
                Dəstək
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Müştəri xidməti
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Məxfilik siyasəti
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Qaydalar və şərtlər
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Aşağı hissə */}
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-gray-500 text-sm">
          © 2025 <span className="text-cyan-400">AZFON Technologies</span>. Bütün hüquqlar qorunur.
        </p>
      </div>
    </footer>
  );
}
