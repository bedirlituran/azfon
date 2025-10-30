import React from "react";

export default function Features() {
  const products = [
    {
      name: "TP-Link Archer C6",
      img: "tv.png",
      price: "120 AZN",
      rating: 4,
      label: "Yeni",
      labelColor: "bg-white text-gray-900",
    },
    {
      name: "TP-Link Archer C20",
      img: "tp.png",
      price: "80 AZN",
      rating: 5,
    },
    {
      name: "TP-Link Archer AX55",
      img: "ac.png",
      price: "180 AZN",
      rating: 4,
      label: "Endirim",
      labelColor: "bg-gray-900 text-white",
    },
    {
      name: "TV IP Aparatı",
      img: "tvip.png",
      price: "250 AZN",
      rating: 5,
    },
  ];

  return (
    <section className="py-12  sm:py-16 lg:py-20 bg-linear-to-br from-gray-100 via-white to-gray-200 text-gray-900 cursor-pointer">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Başlıq */}
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Məhsullarımız
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Bazar üçün uyğun TP-Link modemləri və TV IP aparatları.
          </p>
        </div>

        {/* Məhsul Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product, idx) => (
            <div key={idx} className="group">
              {/* Şəkil konteyneri kvadrat */}
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                {product.label && (
                  <span
                    className={`absolute top-3 left-3 px-2 py-1 text-[10px] sm:text-xs font-bold uppercase rounded-full ${product.labelColor}`}
                  >
                    {product.label}
                  </span>
                )}
              </div>

              {/* Məhsul adı və qiymət */}
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#">{product.name}</a>
                  </h3>
                  <div className="flex items-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < product.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
