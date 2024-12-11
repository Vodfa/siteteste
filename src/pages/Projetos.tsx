import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Lazuli',
    description: 'Residência contemporânea com vista para o mar em Niterói, RJ',
    image: 'https://i.imgur.com/RaIsf9c.jpeg',
    category: 'Residencial',
  },
  {
    id: 2,
    title: 'American Pet',
    description: 'Petshop localizado em Niterói, RJ',
    image: 'https://i.imgur.com/M01jCqd.jpeg',
    category: 'Comercial',
  },
  {
    id: 3,
    title: 'Ed. Rio Branco',
    description: 'Reforma completa com design minimalista',
    image: 'https://i.imgur.com/qT9eDc2.jpeg',
    category: 'Residencial',
  },
  {
    id: 4,
    title: 'Drogaria Venancio',
    description: 'Drogaria localizada',
    image: 'https://i.imgur.com/EtT3dWl.png',
    category: 'Comercial',
  },
  {
    id: 5,
    title: 'Sou+Icaraí',
    description: 'Design moderno de frente para a Praia de Icaraí',
    image: 'https://i.imgur.com/S122Ou1.png',
    category: 'Residencial',
  },
  {
    id: 6,
    title: 'Rua Ator Paulo Gustavo',
    description: 'Design moderno para experiência gastronômica',
    image: 'https://i.imgur.com/mhw2bkV.jpeg',
    category: 'Comercial',
  },
  {
    id: 7,
    title: 'Colégio Salesiano Região Oceânica',
    description: 'Design moderno para experiência gastronômica',
    image: 'https://i.imgur.com/PtRqiHI.png',
    category: 'Educacional',
  },
  {
    id: 8,
    title: 'Residencial Gragoatá',
    description: 'Ambiente acolhedor para o aprendizado',
    image: 'https://i.imgur.com/B7PnD2h.jpeg',
    category: 'Residencial',
  },
  {
    id: 9,
    title: 'Sou+Charitas',
    description: 'Espaço inovador para desenvolvimento técnico',
    image: 'https://i.imgur.com/Y0fZ89s.jpeg',
    category: 'Residencial',
  },
  {
    id: 10,
    title: 'Sou+Piratininga',
    description: 'Integração entre tecnologia e educação',
    image: 'https://i.imgur.com/2M0Vd26.jpeg',
    category: 'Residencial',
  },
  {
    id: 11,
    title: 'Tavares de Macedo',
    description: 'Metodologia de ensino interativa e prática',
    image: 'https://i.imgur.com/UXfsP1q.jpeg',
    category: 'Comercial',
  },
  {
    id: 12,
    title: 'Sede da Carta Fabril',
    description: 'Foco em formação acadêmica e ética',
    image: 'https://i.imgur.com/RuPwrgE.jpeg',
    category: 'Comercial',
  },
  {
    id: 13,
    title: 'Trevo Engenho do Mato',
    description: 'Inovação constante no ensino e aprendizado',
    image: 'https://i.imgur.com/PXoEAnd.jpeg',
    category: 'Comercial',
  },
  {
    id: 14,
    title: 'Avenida Rio Branco',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/8VwRiaj.png',
    category: 'Comercial',
  },
  {
    id: 15,
    title: 'Orquídea',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/XvtTdRk.jpeg',
    category: 'Comercial',
  },
  {
    id: 16,
    title: 'Belizário Augusto',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/EiE9WVW.jpeg',
    category: 'Comercial',
  },
  {
    id: 17,
    title: 'Av. Presid. Roosevel',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/xgQZMCc.png',
    category: 'Comercial',
  },
  {
    id: 18,
    title: 'Hotel Bristol',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/TMnaK0n.jpeg',
    category: 'Hoteleiro',
  },
  {
    id: 19,
    title: 'IBIS',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/QUOPoNb.jpeg',
    category: 'Hoteleiro',
  },
  {
    id: 20,
    title: 'Shopping Galeria',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/6n66VXo.jpeg',
    category: 'Comercial',
  },
  {
    id: 21,
    title: 'Delta',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/sCEZeE2.jpeg',
    category: 'Comercial',
  },
  {
    id: 22,
    title: 'Dom Bosco',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/F8SFO6K.jpeg',
    category: 'Residencial',
  },
  {
    id: 23,
    title: 'The Point Offices',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/AJgqdsc.jpeg',
    category: 'Comercial',
  },
  {
    id: 24,
    title: 'Salve Simpatia',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/JOThZTs.jpeg',
    category: 'Comercial',
  },
  {
    id: 25,
    title: 'Fabio Marcondes',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/O0JQ8VJ.jpeg',
    category: 'Comercial',
  },
  {
    id: 26,
    title: 'João Fortes',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/b08An8n.jpeg',
    category: 'Comercial',
  },
  {
    id: 27,
    title: 'Costazul',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/FRfXuj5.jpeg',
    category: 'Comercial',
  },
  {
    id: 28,
    title: 'Gavião Peixoto, 360',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/t32mr4g.jpeg',
    category: 'Comercial',
  },
  {
    id: 29,
    title: 'La Mole',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/gLZnlTQ.jpeg',
    category: 'Residencial',
  },
  {
    id: 30,
    title: 'Presid. Backer',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/gPfTq7O.jpeg',
    category: 'Residencial',
  },
  {
    id: 31,
    title: 'Rogério Maciel',
    description: 'Preparação para um futuro de sucesso',
    image: 'https://i.imgur.com/3q0wEnc.jpeg',
    category: 'Residencial',
  },
];

export function Projetos() {
  const [filter, setFilter] = React.useState<string>('Todos');
  const [isMoreCategoriesActive, setMoreCategoriesActive] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const mainCategories: string[] = ['Todos', 'Residencial', 'Comercial'];
  const additionalCategories: string[] = [
    'Educacional',
    'Hospitalar',
    'Misto',
    'Institucional',
    'Hoteleiro',
    'Urbanismo',
  ];

  const handleFilterChange = (category: string): void => {
    setFilter(category);
    setMoreCategoriesActive(false);
  };

  const handleMoreCategoriesClick = (): void => {
    setMoreCategoriesActive(!isMoreCategoriesActive);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if ((e.target as HTMLDivElement).id === 'modal-backdrop') {
      setMoreCategoriesActive(false);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'Todos' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif mb-8">Nossos Projetos</h1>

        {/* Barra de Pesquisa */}
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar projetos..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Filtros */}
        <div className="flex items-center space-x-4 mb-8 relative">
          {mainCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}

          <button
            onClick={handleMoreCategoriesClick}
            className={`px-4 py-2 rounded-md transition-colors ${
              isMoreCategoriesActive
                ? 'bg-gray-400 text-gray-100'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Mais Categorias
          </button>
        </div>

        {/* Modal de Categorias Adicionais */}
        {isMoreCategoriesActive && (
          <div
            id="modal-backdrop"
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white p-8 rounded-md shadow-lg w-3/4 max-w-md">
              <h2 className="text-2xl font-serif mb-4">Mais Categorias</h2>
              <div className="grid grid-cols-2 gap-4">
                {additionalCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === category
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setMoreCategoriesActive(false)}
                className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-200 text-sm mt-1">{project.description}</p>
                <span className="text-gray-400 text-sm mt-1">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
