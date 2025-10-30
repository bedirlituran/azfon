"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-16 bg-linear-to-br from-gray-100 via-white to-gray-200 text-gray-900">
      {/* Dekorativ arxa plan xətti */}
      <div className="absolute inset-0 border border-gray-300/50 rounded-2xl mx-4 md:mx-16 my-6 md:my-12 blur-sm -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Sol tərəf - Şəkil */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Glow effekti */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-gray-400/20 animate-pulse"></div>

            {/* Minimalist Wi-Fi ikonu (indi tünd rənglə) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 h-48 text-gray-800 drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15.75a4.5 4.5 0 017.5 0m-10.5-3a9 9 0 0113.5 0m-16.5-3a13.5 13.5 0 0119.5 0M12 21h.008v.008H12V21z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Sağ tərəf - Mətn */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Haqqımızda
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">AZFON Technologies</strong> olaraq məqsədimiz sizə
            sürətli, etibarlı və keyfiyyətli internet xidməti təqdim etməkdir.
            Müştərilərimizin gündəlik işlərini, təhsilini və əyləncəsini fasiləsiz
            şəkildə davam etdirə bilməsi bizim üçün ən önəmli prioritetdir.
            <br />
            <br />
            Komandamız yüksək təcrübəli mütəxəssislərdən ibarətdir və texnologiyanın
            ən son yeniliklərini tətbiq edərək hər zaman müştəri məmnuniyyətini təmin etməyə
            çalışır. Fiber-optik texnologiya ilə təmin etdiyimiz yüksək sürətli internet
            bağlantısı sayəsində həm evlərdə, həm də iş yerlərində problemsiz və stabil
            bağlantı əldə edə bilirsiniz.
            <br />
            <br />
            <strong className="text-gray-900">AZFON Technologies</strong> — sürət, keyfiyyət və
            etibarlılıq deməkdir.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
