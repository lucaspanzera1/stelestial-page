import React from 'react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Página de Destino',
      price: 'A partir de R$ 500',
      features: [
        'Design de landing page',
        'Desenvolvimento responsivo',
        'Otimização básica de SEO',
        'Integração de formulário de contato',
        '3 revisões incluídas',
        'Entrega em 1 semana'
      ],
      delivery: '1 semana',
      popular: false
    },
    {
      name: 'Site Multi-página',
      price: 'A partir de R$ 1.500',
      features: [
        'Site multi-página',
        'Desenvolvimento responsivo',
        'Implementação de soluções customizadas',
        'Otimização básica de SEO',
        'Integração de formulário de contato',
        '1 revisão incluída',
        'Entrega em 3 semanas'
      ],
      delivery: '3 semanas',
      popular: true
    },
    {
      name: 'Empresarial',
      price: 'A partir de R$ 3.000',
      features: [
        'Desenvolvimento Full-Stack',
        'Criação de banco de dados',
        'Integrações de terceiros',
        'Otimização de performance',
        'Implementação de segurança',
        'Revisões ilimitadas',
        'Entrega em 8 semanas'
      ],
      delivery: '8 semanas',
      popular: false
    }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Nossos Valores
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Soluções para seu negócio
            </h2>
            <p className="text-lg text-indigo-200/65">
              Escolha o pacote ideal para transformar sua ideia em realidade digital.
            </p>
          </div>
          {/* Pricing cards */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative rounded-2xl bg-gray-900/50 p-6 shadow-xl ${tier.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
                    MAIS POPULAR
                  </div>
                )}
                <div className="text-center">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">{tier.name}</h3>
                  <div className="mb-4 text-3xl font-bold text-indigo-400">{tier.price}</div>
                  <ul className="mb-6 space-y-2 text-left text-sm text-indigo-200/65">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="mr-2 h-4 w-4 fill-indigo-500" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4 text-sm text-indigo-200/65">
                    Entrega em {tier.delivery}
                  </div>
                  <a
                    className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                    href="https://api.whatsapp.com/send/?phone=553193713160"
                    target="_blank"
                  >
                    <span className="relative inline-flex items-center">
                      Vamos Conversar
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}