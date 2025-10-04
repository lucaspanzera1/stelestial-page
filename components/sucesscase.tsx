"use client";

import { useState } from "react";
import Image from "next/image";

export default function SuccessCase() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const features = [
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Catálogo Completo",
      description: "Sistema de gestão de produtos com categorias, fotos múltiplas e descrições detalhadas"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
        </svg>
      ),
      title: "Gestão de Pedidos",
      description: "Acompanhamento completo desde o pedido até a entrega, com notificações automáticas"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Design Responsivo",
      description: "Interface adaptada para todos os dispositivos, garantindo uma experiência perfeita"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Pagamento Seguro",
      description: "Integração com múltiplas formas de pagamento e checkout otimizado"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Painel Admin",
      description: "Dashboard completo para controle de estoque, vendas e relatórios em tempo real"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      title: "Performance",
      description: "Otimização completa para carregamento rápido e excelente experiência do usuário"
    }
  ];

  const techStack = [
    { name: "Next.js", color: "bg-blue-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "Docker", color: "bg-purple-500" },
    { name: "PostgreSQL", color: "bg-blue-700" },
    { name: "Radis", color: "bg-gray-900" }
  ];

  const results = [
    { metric: "300%", description: "Aumento nas vendas online" },
    { metric: "50%", description: "Redução no tempo de gestão" },
    { metric: "95%", description: "Satisfação dos clientes" },
    { metric: "24/7", description: "Disponibilidade da loja" }
  ];

  return (
  <section id="sucesscase" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-transparent bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 px-4 py-1.5 text-xs font-medium text-indigo-200 before:h-px before:w-6 before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-200 after:h-px after:w-6 after:bg-gradient-to-l after:from-indigo-500 after:to-indigo-200">
              Caso de Sucesso
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 pt-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Novo de Novo: Revolucionando o Second Hand
            </h2>
            <p className="text-lg text-indigo-200/65">
              Como transformamos uma loja física em uma plataforma e-commerce completa, 
              multiplicando as vendas e otimizando a gestão do negócio.
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
                        <h3 className="text-xl font-semibold text-white">novoden0v0.com.br</h3>
                        <p className="text-indigo-200/65">E-commerce completo para moda second hand</p>
                      </div>
                      <a
                        href="https://novoden0v0.com.br/"
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
                    
                    <div className="rounded-lg bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center border border-gray-700/50 overflow-hidden">
                      <Image
                        src="/images/novodenovo.png"
                        alt="Screenshot do site Novo de Novo"
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
                      <div className="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
                        <Image
                          src="/images/ana.png"
                          alt="Foto de Ana"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <blockquote className="mb-4 text-lg text-indigo-200/90">
                        "O sistema ficou incrível! Ele trouxe praticidade para o dia a dia da empresa e deixou nossos processos muito mais organizados. Fácil de usar e totalmente adaptado às nossas necessidades."
                      </blockquote>
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="font-semibold text-white">Ana</div>
                          <div className="text-sm text-indigo-200/65">Fundadora - Novo de Novo</div>
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
                  <h3 className="mb-4 text-2xl font-semibold text-white">Stack Tecnológica</h3>
                  <p className="text-indigo-200/65">Utilizamos as tecnologias mais modernas para garantir performance, segurança e escalabilidade</p>
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

                <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 backdrop-blur-sm">
                  <h4 className="mb-4 text-xl font-semibold text-white">Arquitetura & Funcionalidades</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 font-medium text-indigo-200">Frontend</h5>
                      <ul className="space-y-1 text-sm text-indigo-200/65">
                        <li>• Interface responsiva e moderna</li>
                        <li>• Carregamento otimizado de imagens</li>
                        <li>• SEO estruturado</li>
                        <li>• Experiência mobile-first</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 font-medium text-indigo-200">Backend</h5>
                      <ul className="space-y-1 text-sm text-indigo-200/65">
                        <li>• API REST segura</li>
                        <li>• Banco de dados otimizado</li>
                        <li>• Sistema de autenticação</li>
                        <li>• Integração com pagamentos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Results Tab */}
            {activeTab === "results" && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-semibold text-white">Resultados Conquistados</h3>
                  <p className="text-indigo-200/65">O impacto transformador da solução digital no negócio</p>
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

                <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 backdrop-blur-sm">
                  <h4 className="mb-6 text-xl font-semibold text-white">Benefícios Alcançados</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="font-medium text-white">Vendas Online 24/7</div>
                          <div className="text-sm text-indigo-200/65">Loja funcionando independente do horário físico</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="font-medium text-white">Gestão Centralizada</div>
                          <div className="text-sm text-indigo-200/65">Controle total do estoque e pedidos</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="font-medium text-white">Alcance Expandido</div>
                          <div className="text-sm text-indigo-200/65">Clientes de todo o Brasil</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="font-medium text-white">Automatização</div>
                          <div className="text-sm text-indigo-200/65">Processos manuais eliminados</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="font-medium text-white">Experiência Premium</div>
                          <div className="text-sm text-indigo-200/65">Interface moderna e intuitiva</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-green-400"></div>
                        <div>
                          <div className="font-medium text-white">Escalabilidade</div>
                          <div className="text-sm text-indigo-200/65">Pronto para crescimento futuro</div>
                        </div>
                      </div>
                    </div>
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