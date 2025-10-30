"use client";
import React from "react";

export default function Xidmetler() {
  const services = [
    {
      title: "İnternet və Rabitə",
      description: "Fiber internet və sürətli rabitə xidməti ilə ev və ofisinizdə limitsiz bağlantı.",
      icon: "🌐", // simvolik ikon, istəsən SVG də əlavə edə bilərsən
    },
    {
      title: "Simsiz Rabitə",
      description: "Mobil və simsiz rabitə xidmətləri ilə hər zaman əlaqədə qalın.",
      icon: "📡",
    },
    {
      title: "İP TV",
      description: "Yüksək keyfiyyətli kanallar və HD IP TV xidmətimizlə əyləncəni evinizə gətirin.",
      icon: "📺",
    },
    {
      title: "İP Telefonya",
      description: "Müasir IP telefon xidməti ilə daha sərfəli və etibarlı zənglər edin.",
      icon: "📞",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-gray-100 via-white to-gray-200 text-gray-900 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Xidmətlərimiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white text-gray-900 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-900 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
