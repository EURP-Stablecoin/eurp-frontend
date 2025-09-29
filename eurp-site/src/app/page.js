import Image from "next/image";

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
