"use client";
import React, { useState } from "react";

export default function Accordion() {
  const faqs = [
    {
      q: "AZFON xidmətinə necə abunə ola bilərəm?",
      a: "Veb saytımızdan və ya xidmət mərkəzlərimizə müraciət etməklə abunə ola bilərsiniz. Komandamız sizi quraşdırma prosesində yönləndirəcək.",
    },
    {
      q: "Hansı sürətli internet paketləriniz mövcuddur?",
      a: "AZFON 50 Mbps-dən 1 Gbps-ə qədər müxtəlif sürətli internet paketləri təklif edir. Evinizə və ya ofisinizə uyğun plan seçə bilərsiniz.",
    },
    {
      q: "Quraşdırma pulsuzdurmu?",
      a: "Bəli, yeni abunəçilər üçün fiber-optik internet və TV quraşdırılması tamamilə pulsuzdur.",
    },
    {
      q: "Limitsiz internet paketiniz varmı?",
      a: "Bəli, bütün paketlərimiz limitsizdir. Heç bir əlavə ödəniş və ya sürət məhdudiyyəti yoxdur.",
    },
    {
      q: "İnternet və TV xidmətlərini birləşdirə bilərəmmi?",
      a: "Bəli, internet və TV xidmətlərini birləşdirən endirimli paketlər mövcuddur.",
    },
    {
      q: "Ödənişi necə edə bilərəm?",
      a: "Ödənişləri saytımız, mobil tətbiq və ya ödəniş mərkəzlərimiz vasitəsilə həyata keçirə bilərsiniz.",
    },
  ];

  return (
    <section className="bg-linear-to-br from-gray-100 via-white to-gray-200 text-gray-900 py-20 ">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Tez-tez verilən suallar
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            İnternet və TV xidmətlərimizlə bağlı ən çox soruşulan suallar və cavablar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {faqs.map((item, i) => (
            <AccordionItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

const AccordionItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl bg-white shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full p-5 text-left cursor-pointer"
      >
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">{q}</h3>
        <div
          className={`transform cursor-pointer transition-transform duration-300 ${
            open ? "rotate-45 text-blue-600" : "rotate-0 text-blue-500"
          }`}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      <div
        className={`px-5 overflow-hidden cursor-pointer transition-all duration-300 ${
          open ? "max-h-40 pb-5" : "max-h-0 pb-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed cursor-pointer">{a}</p>
      </div>
    </div>
  );
};
