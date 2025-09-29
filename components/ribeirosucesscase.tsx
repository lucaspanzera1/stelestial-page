"use client";

import { useState } from "react";
import Image from "next/image";

// Você precisará adicionar essas imagens ao seu projeto
import RibeiroHomeImg from "@/public/images/ribeiro.png";
// import RibeiroMobileImg from "@/public/images/ribeiro-mobile.jpg";
// import CarlosImg from "@/public/images/carlos-photo.jpg";

export default function RibeiroSuccessCase() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const features = [
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
        </svg>
      ),
      title: "Design Profissional",
      description: "Interface moderna e elegante que transmite credibilidade e confiança para os clientes"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Totalmente Responsivo",
      description: "Adaptação perfeita para todos os dispositivos, garantindo experiência otimizada em mobile e desktop"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.94l1-4H9.03z" clipRule="evenodd" />
        </svg>
      ),
      title: "SEO Otimizado",
      description: "Estrutura técnica para melhor posicionamento nos buscadores e maior visibilidade online"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Apresentação Corporativa",
      description: "Layout focado em destacar a expertise e experiência da empresa no mercado"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: "Formulário de Contato",
      description: "Sistema integrado para captura de leads e facilitar comunicação com prospects"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      title: "Performance Otimizada",
      description: "Carregamento ultra-rápido e experiência fluida para manter visitantes engajados"
    }
  ];

  const techStack = [
    { name: "Next.js", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Tailwind CSS", color: "bg-cyan-400" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Vercel", color: "bg-gray-900" },
    { name: "Framer Motion", color: "bg-purple-500" }
  ];

  const results = [
    { metric: "200%", description: "Aumento em leads qualificados" },
    { metric: "85%", description: "Melhoria na primeira impressão" },
    { metric: "3s", description: "Tempo de carregamento" },
    { metric: "100%", description: "Compatibilidade mobile" }
  ];

  const businessBenefits = [
    {
      title: "Credibilidade Digital",
      description: "Presença online profissional que gera confiança instantânea",
      icon: "🏆"
    },
    {
      title: "Geração de Leads",
      description: "Formulários estratégicos que convertem visitantes em oportunidades",
      icon: "📈"
    },
    {
      title: "Alcance Ampliado",
      description: "Visibilidade 24/7 para clientes em potencial",
      icon: "🌐"
    },
    {
      title: "Diferenciação Competitiva",
      description: "Destaque no mercado com apresentação moderna e profissional",
      icon: "⭐"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-transparent bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 px-4 py-1.5 text-xs font-medium text-indigo-200 before:h-px before:w-6 before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-200 after:h-px after:w-6 after:bg-gradient-to-l after:from-indigo-500 after:to-indigo-200">
              Caso de Sucesso
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 pt-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Ribeiro Representações: Presença Digital de Elite
            </h2>
            <p className="text-lg text-indigo-200/65">
              Como elevamos a marca de uma empresa consolidada através de um site institucional 
              moderno que transmite credibilidade e gera novas oportunidades de negócio.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="mx-auto mb-12 flex max-w-md justify-center">
            <div className="relative inline-flex rounded-[1.25rem] bg-gray-800/40 p-1">
              <button
                className={`flex h-8 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${
                  activeTab === "overview"
                    ? "bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 text-white before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))]_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Visão Geral
              </button>
              <button
                className={`flex h-8 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${
                  activeTab === "technology"
                    ? "bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("technology")}
              >
                Tecnologia
              </button>
              <button
                className={`flex h-8 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${
                  activeTab === "results"
                    ? "bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("results")}
              >
                Resultados
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-5xl">
            
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-12">
                
                {/* Hero Image */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-[inherit] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"></div>
                  
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">ribeiro.stelestial.app</h3>
                        <p className="text-indigo-200/65">Site institucional premium para empresa de representações</p>
                      </div>
                      <a
                        href="https://ribeiro.stelestial.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                      >
                        Visitar Site
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    
                    <div className="rounded-lg bg-gradient-to-br from-blue-900/20 to-indigo-900/20 flex items-center justify-center border border-gray-700/50 overflow-hidden">
                      <Image
                        src={RibeiroHomeImg}
                        alt="Screenshot do site Ribeiro Representações"
                        width={1200}
                        height={600}
                        className="object-cover rounded-lg"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        priority
                        quality={100}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-4 text-xl font-semibold text-white">O Desafio</h4>
                  <p className="mb-6 text-indigo-200/75">
                    A Ribeiro Representações precisava de uma presença digital que refletisse sua solidez no mercado. 
                    Com décadas de experiência, a empresa buscava um site que transmitisse profissionalismo, 
                    credibilidade e facilitasse o contato com novos clientes e parceiros.
                  </p>
                  
                  <h4 className="mb-4 text-xl font-semibold text-white">A Solução</h4>
                  <p className="text-indigo-200/75">
                    Desenvolvemos um site institucional moderno e elegante, focado na experiência do usuário. 
                    O design limpo destaca a expertise da empresa, enquanto a estrutura otimizada garante 
                    carregamento rápido e navegação intuitiva em todos os dispositivos.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
                        {feature.icon}
                      </div>
                      <h4 className="mb-2 font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-indigo-200/65">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                    <div className="mb-6 md:mb-0">
                      <div className="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600">
                        <Image
                          src="/images/testimonial-05.jpg"
                          alt="Foto do Ribeiro"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <blockquote className="mb-4 text-lg text-indigo-200/90">
                        "Nosso novo site elevou a forma como apresentamos a empresa. Está profissional, responsivo e trouxe mais oportunidades de negócios. A experiência foi excelente do início ao fim."
                      </blockquote>
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="font-semibold text-white">Carlos R.</div>
                          <div className="text-sm text-indigo-200/65">Diretor - Ribeiro Representações</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Technology Tab */}
            {activeTab === "technology" && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-semibold text-white">Tecnologias Premium</h3>
                  <p className="text-indigo-200/65">Stack moderno para máxima performance e experiência superior</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    >
                      <div className={`h-3 w-3 rounded-full ${tech.color}`}></div>
                      <span className="font-medium text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-sm">
                    <h4 className="mb-4 text-lg font-semibold text-white">Frontend Moderno</h4>
                    <ul className="space-y-2 text-sm text-indigo-200/75">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Interface responsiva e elegante
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Animações suaves com Framer Motion
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Otimização para Core Web Vitals
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Carregamento progressivo de imagens
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-sm">
                    <h4 className="mb-4 text-lg font-semibold text-white">SEO & Performance</h4>
                    <ul className="space-y-2 text-sm text-indigo-200/75">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        Meta tags otimizadas
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        Estrutura semântica HTML5
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        Schema markup para negócios
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        Sitemap e robots.txt otimizados
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Results Tab */}
            {activeTab === "results" && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-semibold text-white">Impacto Empresarial</h3>
                  <p className="text-indigo-200/65">Resultados mensuráveis que transformaram a presença digital da empresa</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="text-center rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    >
                      <div className="mb-2 text-3xl font-bold text-indigo-400">{result.metric}</div>
                      <div className="text-sm text-indigo-200/65">{result.description}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {businessBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="text-2xl">{benefit.icon}</div>
                        <h4 className="font-semibold text-white">{benefit.title}</h4>
                      </div>
                      <p className="text-sm text-indigo-200/65">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 backdrop-blur-sm">
                  <h4 className="mb-6 text-xl font-semibold text-white">Transformação Digital Completa</h4>
                  <div className="space-y-4 text-indigo-200/75">
                    <p>
                      O novo site da Ribeiro Representações não é apenas uma presença online - é uma ferramenta estratégica 
                      de negócios que elevou a percepção da marca e gerou resultados concretos.
                    </p>
                    <p>
                      Com uma interface moderna e profissional, a empresa agora projeta confiança e credibilidade, 
                      atraindo clientes de maior qualidade e facilitando o processo de vendas através de formulários 
                      otimizados para conversão.
                    </p>
                    <p>
                      A otimização para mecanismos de busca garantiu maior visibilidade online, enquanto a performance 
                      superior mantém os visitantes engajados, reduzindo drasticamente a taxa de rejeição.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}