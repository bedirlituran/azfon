"use client";
import React from "react";

export default function Odenis() {
  const payments = [
    {
      title: "Fpay",
      description:
        "Aylıq ödənişlərinizi Fpay vasitəsilə sürətli və təhlükəsiz həyata keçirin.",
      icon: "/fpay.png",
    },
    {
      title: "ExpressPay",
      description:
        "ExpressPay ilə həm onlayn, həm də ödəniş terminalları vasitəsilə rahat ödəniş edin.",
      icon: "/expresspay.png",
    },
    {
      title: "Million",
      description:
        "Million ödəniş sistemi ilə limitsiz və etibarlı ödəniş imkanları.",
      icon: "/million.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Başlıq */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Ödənişlər
        </h2>

        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Aylıq ödənişlərinizi həm onlayn, həm də ödəniş terminalları vasitəsilə rahatlıqla həyata keçirə bilərsiniz
        </p>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {payments.map((payment) => (
            <div
              key={payment.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center text-center cursor-pointer"
            >
              <img
                src={payment.icon}
                alt={payment.title}
                className="w-20 h-20 mb-6 object-contain"
              />
              <h3 className="text-xl font-semibold mb-3">{payment.title}</h3>
              <p className="text-gray-700 text-sm">{payment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
