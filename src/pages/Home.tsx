import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              MassenaMonnerat Arquitetos
            </h1>
            <p className="text-lg md:text-2xl max-w-xl mx-auto">
              Criando espaços únicos que inspiram e transformam vidas
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center md:text-left">
                Nossa Abordagem
              </h2>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                Combinamos criatividade e funcionalidade para criar espaços que refletem
                a personalidade e as necessidades de nossos clientes.
              </p>
              <p className="text-gray-600 text-center md:text-left">
                Com mais de 19 anos de experiência, nossa equipe trabalha com dedicação
                para transformar cada projeto em uma obra única e memorável.
              </p>
            </div>
            <div className="w-full aspect-square">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              title: 'Projetos Residenciais',
              description: 'Criamos casas que combinam conforto e sofisticação.',
              image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
              categoria: 'Residencial',
            }, {
              title: 'Projetos Comerciais',
              description: 'Espaços comerciais que impulsionam seu negócio.',
              image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
              categoria: 'Comercial',
            }, {
              title: 'Interiores',
              description: 'Design de interiores que reflete sua personalidade.',
              image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
              categoria: 'Interiores',
            }].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <Link to="/projetos">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-serif mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
