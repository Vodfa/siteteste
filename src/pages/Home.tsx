import React from 'react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Arquitetura moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              MassenaMonnerat Arquitetos
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Criando espaços únicos que inspiram e transformam vidas
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Nossa Abordagem</h2>
              <p className="text-gray-600 mb-4">
                Combinamos criatividade e funcionalidade para criar espaços que refletem
                a personalidade e as necessidades de nossos clientes.
              </p>
              <p className="text-gray-600">
                Com mais de 19 anos de experiência, nossa equipe trabalha com dedicação
                para transformar cada projeto em uma obra única e memorável.
              </p>
            </div>
            <div className="aspect-square">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Interior moderno"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Projetos Residenciais',
                description: 'Criamos casas que combinam conforto e sofisticação.',
                image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9'
              },
              {
                title: 'Projetos Comerciais',
                description: 'Espaços comerciais que impulsionam seu negócio.',
                image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2'
              },
              {
                title: 'Interiores',
                description: 'Design de interiores que reflete sua personalidade.',
                image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}