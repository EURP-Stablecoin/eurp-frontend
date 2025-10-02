import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-32">
              <h1 className="text-6xl font-bold">EURP Stablecoin</h1>
              <p className="mt-4 text-xl max-w-2xl">
                  A nova stablecoin europeia lastreada 1:1 com o Euro — rápida, segura e transparente.
              </p>
              <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700">
                  Saber Mais
              </button>
              <Link href="/app">
                  <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700">
                      Mint EURP
                  </button>
              </Link>

          </section>

          <section className="py-20 bg-tether-dark border-b border-gray-800">
              <div className="container mx-auto px-4 max-w-6xl">
              <div
                      className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-12">

                      {/* Left Content Area */}
                      <div className="lg:w-1/2 text-center lg:text-left">
                          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tether-text leading-tight">
                              100% backed and fully transparent
                          </h2>

                          <p className="text-xl text-gray-400 mb-8">
                              All Euro Protocol tokens (**EURP**) are pegged at 1-to-1 with a matching fiat currency and are
                              backed **100%** by EUro Protocol reserves. We publish a daily record of the current total
                              assets and reserves.
                          </p>

                          {/* Key Feature List (Simulating bullet points or checks) */}
                          <div className="space-y-3 mb-10">
                              <p className="flex items-start lg:items-center text-tether-text">
                                   <span>Daily record of total assets and reserves.</span>
                              </p>
                              <p className="flex items-start lg:items-center text-tether-text">
                                   <span>Pegged at 1-to-1 with matching fiat currency.</span>
                              </p>
                          </div>

                          {/* Call to Action Button */}
                          <Link
                              href="/transparency"
                              className="inline-block px-10 py-4 text-lg font-semibold text-tether-dark bg-tether-green rounded-lg shadow-xl hover:bg-opacity-90 transition duration-300"
                          >
                              Go to Transparency Page
                          </Link>
                      </div>

                      {/* Right Placeholder Area (e.g., a diagram or illustration) */}
                      <div className="lg:w-1/2 flex justify-center p-8 bg-gray-800 rounded-2xl shadow-2xl">
                          {/* In a real replica, you'd place a graphic, chart, or data visualization here. */}
                          <div className="text-center text-gray-500">
                              <p className="text-lg mb-2">Illustration Placeholder</p>
                              <div className="w-64 h-40 bg-gray-700 rounded-lg flex items-center justify-center">
                                  <span className="text-gray-400">Reserve Diagram or USD₮ Icon</span>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>

          {/* About Section */}
          <section className="py-20 px-8 max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">O que é a EURP?</h2>
              <p className="text-lg">
                  A EURP é uma stablecoin criada para trazer estabilidade e confiança ao ecossistema cripto europeu.
                  Cada token representa exatamente 1 euro real, guardado com instituições financeiras licenciadas.
              </p>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="p-6 bg-gray-100 rounded-lg shadow">
                      <h3 className="text-2xl font-semibold">Transparente</h3>
                      <p className="mt-2">Reservas auditáveis e prova pública de fundos.</p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-lg shadow">
                      <h3 className="text-2xl font-semibold">Rápida</h3>
                      <p className="mt-2">Transações em segundos nas melhores blockchains.</p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-lg shadow">
                      <h3 className="text-2xl font-semibold">Regulada</h3>
                      <p className="mt-2">Emitida sob estrutura legal europeia compatível com MiCA.</p>
                  </div>
              </div>
          </section>

      </div>
  );
}
