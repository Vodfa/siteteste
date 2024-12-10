import { useState } from 'react';

const team = [
  {
    name: 'João Massena',
    role: 'Arquiteto',
    bio: 'Arquiteto formado pela UFRJ (1973), com pós-graduação em Tecnologia Industrial Básica (Universidade Cândido Mendes) e mestrado em Engenharia Civil (UFF). Foi funcionário público na Secretaria de Urbanismo da Prefeitura de Niterói de 1976 a 2004, exercendo cargos como Diretor de Departamento, Membro da Comissão de Análise de Edificações e Chefe da Divisão de Fiscalização de Obras. Contribuiu na elaboração de legislações como o Plano Diretor e Planos Urbanísticos. Professor concursado na FAETEC (1976-2006), com experiência na iniciativa privada, incluindo a coordenação do projeto da Hidrelétrica de Itaipu e desenvolvimento de projetos de acústica, instalações e iluminação. Em 2005, fundou a Massena Monnerat Arquitetos, focada em projetos de arquitetura e gestão de negócios, com destaque para Niterói.',
    image: 'https://i.imgur.com/bdelEE6.jpeg'
  },
  {
    name: 'Christina Monnerat',
    role: 'Engenheira Civil',
    bio: 'Engenheira Civil formada pela Universidade Nuno Lisboa (1982), com mais de 40 anos de experiência em desenvolvimento de projetos, incluindo desde a era anterior ao CAD. Atuou na Prefeitura de Niterói/RJ, desempenhando funções como Chefe de Análise de Projetos, Diretora, Assessora, e colaborando na criação de legislações como o Plano Diretor (1992) e o Plano Urbanístico Regional (1995, 2002). Em 2005, fundou a Massena Monnerat Arquitetos, especializada em legislação municipal e criação de edificações em Niterói. Foi Secretária de Urbanismo e Habitação (2009-2012) e também atuou na Secretaria de Governo e na Secretaria Municipal de Fazenda. Foi membro do Conselho Municipal do Patrimônio Cultural e deu palestras na Universidade Federal Fluminense (UFF).',
    image: 'https://i.imgur.com/IDrazYk.jpeg'
  },
  {
    name: 'Felipe Monnerat',
    role: 'Arquiteto',
    bio: 'Formado em Arquitetura e Urbanismo pela UFF (2010), com estudos na Universidad de Sevilla (2008/09), iniciou sua carreira desenvolvendo projetos, incluindo arenas esportivas e obras públicas. Em 2013, obteve o mestrado em Arquitetura Sustentável pela UPC em Barcelona e o certificado Passiv Haus em Bruxelas. Em 2014, se tornou sócio da Massena Monnerat Arquitetos, coordenando projetos no Rio de Janeiro. Continuou seus estudos com mestrado em BIM Manager (2018/19) e em Desenho Paramétrico (2019/20) pela UPC, aplicando esses conhecimentos no Brasil. Atualmente, utiliza suas especializações em arquitetura, influenciado pela cultura carioca e catalã, além de ter interesse por pintura e música.',
    image: 'https://i.imgur.com/iaYuF8L.jpeg'
  },
];

export function Equipe() {
  const [expanded, setExpanded] = useState(null);

  const toggleBio = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the visibility
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Nossa Equipe</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais dedicados que fazem da MassenaMonnerat
            um escritório de referência em arquitetura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif mb-2">{member.name}</h3>
              <p className="text-gray-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm">
                {expanded === index ? member.bio : `${member.bio.substring(0, 150)}...`}
                <button
                  onClick={() => toggleBio(index)}
                  className="ml-2 text-blue-500 font-semibold"
                >
                  {expanded === index ? <strong>Ler menos</strong> : <strong>Saiba mais</strong>}
                </button>
              </p>
            </div>
          ))}
        </div>

        {/* Valores da Equipe */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Inovação',
                description: 'Buscamos constantemente novas soluções e tecnologias para nossos projetos.'
              },
              {
                title: 'Sustentabilidade',
                description: 'Comprometimento com práticas sustentáveis e responsabilidade ambiental.'
              },
              {
                title: 'Excelência',
                description: 'Dedicação à qualidade e atenção aos detalhes em cada projeto.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
