"use client";

import { useState } from "react";
import Image from "next/image";

export default function MarketDeliverySuccessCase() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const features = [
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Catálogo de Produtos Completo",
      description: "Organize seus produtos por categorias, com imagens, preços e controle de estoque em tempo real"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
      title: "Carrinho de Compras Inteligente",
      description: "Carrinho persistente que salva automaticamente seus itens. Adicione, remova e atualize quantidades facilmente"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Sistema de Pedidos Completo",
      description: "Acompanhe pedidos do início ao fim: pendente, confirmado, em preparação, pronto, em entrega e entregue"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Gerenciamento de Endereços de Entrega",
      description: "Cadastre e gerencie múltiplos endereços de entrega para facilitar suas compras"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      title: "Notificações em Tempo Real",
      description: "Receba atualizações instantâneas sobre seus pedidos, promoções e status de entrega via WebSocket"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Painel Administrativo",
      description: "Gerencie usuários, produtos, categorias, pedidos e veja relatórios completos do sistema"
    }
  ];

  const techStack = [
    { name: "Next.js", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Tailwind CSS", color: "bg-cyan-400" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "PostgreSQL", color: "bg-blue-700" },
    { name: "Redis", color: "bg-red-500" },
    { name: "WebSocket", color: "bg-purple-500" }
  ];

  const results = [
    { metric: "200%", description: "Aumento nas vendas" },
    { metric: "50%", description: "Redução em erros de pedidos" },
    { metric: "24/7", description: "Disponibilidade da plataforma" },
    { metric: "95%", description: "Satisfação dos clientes" }
  ];

  const businessBenefits = [
    {
      title: "Escalabilidade Empresarial",
      description: "Plataforma preparada para crescer junto com seu negócio, suportando milhares de pedidos",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Automação de Processos",
      description: "Elimine tarefas manuais e foque no que realmente importa: atender seus clientes",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Experiência Superior",
      description: "Interface intuitiva que encanta clientes e facilita a gestão para administradores",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      title: "Controle Total",
      description: "Tenha visibilidade completa de todos os aspectos do seu negócio em tempo real",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-transparent bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 px-4 py-1.5 text-xs font-medium text-indigo-200 before:h-px before:w-6 before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-200 after:h-px after:w-6 after:bg-gradient-to-l after:from-indigo-500 before:to-indigo-200">
              Caso de Sucesso
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 pt-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              MarketDelivery: Transforme seu Mercado em um Império de Delivery
            </h2>
            <p className="text-lg text-indigo-200/65">
              Diga adeus às anotações em papel. Com o MarketDelivery, você recebe pedidos online e aumenta suas vendas em até 200%. 
              Uma solução completa para mercados, restaurantes e estabelecimentos que querem dominar o delivery.
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
                        <h3 className="text-xl font-semibold text-white">delivery.stelestial.app</h3>
                        <p className="text-indigo-200/65">Plataforma completa de delivery para mercados e restaurantes</p>
                      </div>
                      <a
                        href="https://delivery.stelestial.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                      >
                        Visitar Plataforma
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    
                    <div className="rounded-lg bg-gradient-to-br from-green-900/20 to-blue-900/20 flex items-center justify-center border border-gray-700/50 overflow-hidden">
                      <Image
                        src="/images/market.png"
                        alt="Screenshot da plataforma MarketDelivery"
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
                    Mercados e restaurantes enfrentam dificuldades para competir no mundo digital. 
                    Pedidos anotados em papel, controle manual de estoque e falta de visibilidade 
                    dos processos impedem o crescimento e a eficiência operacional.
                  </p>
                  
                  <h4 className="mb-4 text-xl font-semibold text-white">A Solução</h4>
                  <p className="text-indigo-200/75">
                    O MarketDelivery é uma plataforma completa que transforma estabelecimentos 
                    tradicionais em operações de delivery modernas. Com catálogo digital, 
                    carrinho inteligente e painel administrativo completo, qualquer negócio 
                    pode começar a vender online em minutos.
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

              </div>
            )}

            {/* Technology Tab */}
            {activeTab === "technology" && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-semibold text-white">Tecnologias de Ponta</h3>
                  <p className="text-indigo-200/65">Stack moderno para máxima performance e escalabilidade</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                        Interface responsiva e intuitiva
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Carrinho persistente com localStorage
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Notificações em tempo real via WebSocket
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Otimização para Core Web Vitals
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-sm">
                    <h4 className="mb-4 text-lg font-semibold text-white">Backend Robusto</h4>
                    <ul className="space-y-2 text-sm text-indigo-200/75">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        API RESTful com autenticação JWT
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        Banco PostgreSQL para dados relacionais
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        Redis para cache e sessões
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        WebSocket para notificações em tempo real
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
                  <h3 className="mb-4 text-2xl font-semibold text-white">Impacto Transformador</h3>
                  <p className="text-indigo-200/65">Resultados comprovados que revolucionam o setor de delivery</p>
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
                  <h4 className="mb-6 text-xl font-semibold text-white">Revolução no Delivery</h4>
                  <div className="space-y-4 text-indigo-200/75">
                    <p>
                      O MarketDelivery não é apenas uma plataforma de delivery - é uma solução completa 
                      que transforma estabelecimentos tradicionais em operações digitais modernas. 
                      Com tecnologia de ponta e interface intuitiva, qualquer mercado ou restaurante 
                      pode começar a competir no mundo online.
                    </p>
                    <p>
                      A automação de processos elimina erros manuais, enquanto o controle em tempo real 
                      oferece visibilidade total das operações. Clientes recebem uma experiência de compra 
                      superior, com notificações instantâneas e entregas precisas.
                    </p>
                    <p>
                      Pronto para escalar junto com seu negócio, o MarketDelivery suporta desde pequenos 
                      mercados locais até grandes redes de restaurantes, garantindo que seu estabelecimento 
                      esteja preparado para o futuro do delivery.
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