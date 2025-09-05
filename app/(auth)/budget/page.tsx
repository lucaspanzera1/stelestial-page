"use client";

import Link from "next/link";
import { useState } from "react";

export default function BudgetForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhone = (value) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (11) 99999-9999
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return numbers.slice(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    e.target.value = formatted;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Solicitar Orçamento
            </h1>
            <p className="mt-4 text-lg text-indigo-200/65">
              Conte-nos sobre seu projeto e receba uma proposta personalizada
            </p>
          </div>
          
          {/* Budget form */}
          <form className="mx-auto max-w-[500px]" onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Informações de contato */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="name"
                  >
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="phone"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input w-full"
                    placeholder="(11) 99999-9999"
                    onChange={handlePhoneChange}
                    maxLength="15"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="company"
                >
                  Empresa <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>

              {/* Tipo de projeto */}
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="project-type"
                >
                  Tipo de Projeto <span className="text-red-500">*</span>
                </label>
                <select
                  id="project-type"
                  className="form-input w-full"
                  required
                >
                  <option value="">Selecione o tipo de projeto</option>
                  <option value="website">Website Institucional</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="webapp">Aplicação Web</option>
                  <option value="mobile">Aplicativo Mobile</option>
                  <option value="system">Sistema Corporativo</option>
                  <option value="api">API/Integração</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              {/* Orçamento estimado */}
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="budget-range"
                >
                  Orçamento Estimado
                </label>
                <select
                  id="budget-range"
                  className="form-input w-full"
                >
                  <option value="">Selecione a faixa de orçamento</option>
                  <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                  <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                  <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k+">R$ 100.000+</option>
                  <option value="not-sure">Não tenho certeza</option>
                </select>
              </div>

              {/* Prazo */}
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="timeline"
                >
                  Prazo Desejado
                </label>
                <select
                  id="timeline"
                  className="form-input w-full"
                >
                  <option value="">Selecione o prazo</option>
                  <option value="urgent">Urgente (até 1 mês)</option>
                  <option value="fast">Rápido (1-2 meses)</option>
                  <option value="normal">Normal (2-4 meses)</option>
                  <option value="flexible">Flexível (4+ meses)</option>
                </select>
              </div>

              {/* Descrição do projeto */}
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="project-description"
                >
                  Descrição do Projeto <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="project-description"
                  rows="4"
                  className="form-input w-full resize-none"
                  placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas e qualquer informação relevante..."
                  required
                ></textarea>
              </div>

              {/* Funcionalidades específicas */}
              <div>
                <label className="mb-3 block text-sm font-medium text-indigo-200/65">
                  Funcionalidades Desejadas (opcional)
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-indigo-200/65">Sistema de Login</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-indigo-200/65">Pagamentos Online</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-indigo-200/65">Dashboard Admin</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-indigo-200/65">API Integration</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-indigo-200/65">Design Responsivo</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-indigo-200/65">SEO Otimizado</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}
              </button>
              <p className="mt-3 text-center text-xs text-indigo-200/45">
                Entraremos em contato em até 24 horas úteis
              </p>
            </div>
          </form>

          {/* Bottom info */}
          <div className="mt-8 text-center">
            <div className="mt-6 text-sm text-indigo-200/65">
              Tem dúvidas?{" "}
              <Link className="font-medium text-indigo-500 hover:text-indigo-400" href="/contact">
                Entre em contato
              </Link>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
              <div className="relative max-w-md w-full bg-gray-800 rounded-lg border border-gray-700 shadow-2xl">
                <div className="p-6">
                  {/* Ícone de sucesso */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-center text-xl font-semibold text-white mb-2">
                    Solicitação Enviada!
                  </h3>
                  
                  {/* Mensagem */}
                  <p className="text-center text-indigo-200/75 mb-6">
                    Recebemos sua solicitação de orçamento. Nossa equipe analisará suas necessidades e retornará em até 24 horas úteis com uma proposta personalizada.
                  </p>
                  
                  {/* Informações adicionais */}
                  <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-indigo-200/65 text-center">
                      📧 Você receberá uma confirmação por e-mail em alguns minutos
                    </p>
                  </div>
                  
                  {/* Botão de fechar */}
                  <button
                    onClick={closeModal}
                    className="w-full btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                  >
                    Entendi, obrigado!
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}