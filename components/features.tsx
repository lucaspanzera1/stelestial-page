import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Soluções digitais
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Com tecnologias de ponta.
            </h2>
            <p className="text-lg text-indigo-200/65">
              Softwares modernos, seguros e escaláveis para impulsionar seu negócio.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            {/*<Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
             */}
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
    <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 fill-indigo-500" height="24px" viewBox="0 -960 960 960" width="24px">
    <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/></svg>
  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    Desenvolvimento Web
  </h3>
  <p className="text-indigo-200/65">
    Transforme sua presença digital com sites e aplicações web de alta performance que convertem visitantes em clientes.
  </p>
</article>

<article>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M323-160q-11 0-20.5-5.5T288-181l-78-139h58l40 80h92v-40h-68l-40-80H188l-57-100q-2-5-3.5-10t-1.5-10q0-4 5-20l57-100h104l40-80h68v-40h-92l-40 80h-58l78-139q5-10 14.5-15.5T323-800h97q17 0 28.5 11.5T460-760v160h-60l-40 40h100v120h-88l-40-80h-92l-40 40h108l40 80h112v200q0 17-11.5 28.5T420-160h-97Zm217 0q-17 0-28.5-11.5T500-200v-200h112l40-80h108l-40-40h-92l-40 80h-88v-120h100l-40-40h-60v-160q0-17 11.5-28.5T540-800h97q11 0 20.5 5.5T672-779l78 139h-58l-40-80h-92v40h68l40 80h104l57 100q2 5 3.5 10t1.5 10q0 4-5 20l-57 100H668l-40 80h-68v40h92l40-80h58l-78 139q-5 10-14.5 15.5T637-160h-97Z"/></svg>
  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    Back-End Robusto
  </h3>
  <p className="text-indigo-200/65">  
  Construímos a base sólida do seu negócio com APIs seguras, sistemas escaláveis e integração perfeita entre plataformas.
  </p>
</article>

<article>
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg>
  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    Tecnologia em Nuvem
  </h3>
  <p className="text-indigo-200/65">
Escale seu negócio sem limites com infraestrutura em nuvem inteligente que reduz custos e maximiza performance.
  </p>
</article>
<article>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M160-120v-200q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v200H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM240-200h480v-120H240v120Zm120-320h240q50 0 85-35t35-85q0-50-35-85t-85-35H360q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm240 0q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600ZM480-200Zm0-440Z"/></svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Inteligência Artificial
    </h3>
    <p className="text-indigo-200/65">
      Automatize processos e tome decisões mais inteligentes com IA personalizada para impulsionar sua produtividade.
    </p>
</article>

<article>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm40-40v-120h80v120h-80Zm120 0v-200h80v200h-80Zm120 0v-160h80v160h-80Zm120 0v-280h80v280h-80Zm120 0v-80h80v80h-80ZM160-640v-80 480-400Z"/></svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Analytics & BI
    </h3>
    <p className="text-indigo-200/65">
      Transforme dados em insights valiosos com dashboards interativos que guiam suas estratégias de crescimento.
    </p>
</article>

<article>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Segurança Digital
    </h3>
    <p className="text-indigo-200/65">
      Proteja seu negócio com soluções de cibersegurança avançadas e monitoramento 24/7 contra ameaças digitais.
    </p>
</article>

<article>
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-162v82h560v-350L522-280 360-442 200-282Zm0-114 160-160 158 158 242-272v-90H200v364Zm0-154v-120 272-158 274-160 162-270Zm0 154v-364 362-158 160Zm0 114v-160 162-270 350-82Z"/></svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Consultoria Digital
    </h3>
    <p className="text-indigo-200/65">
      Acelere sua transformação digital com estratégias personalizadas e expertise técnica para superar a concorrência.
    </p>
</article>

<article>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M296-270q-42 35-87.5 32T129-269q-34-28-46.5-73.5T99-436l75-124q-25-22-39.5-53T120-680q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47q-9 0-18-1t-17-3l-77 130q-11 18-7 35.5t17 28.5q13 11 31 12.5t35-12.5l420-361q42-35 88-31.5t80 31.5q34 28 46 73.5T861-524l-75 124q25 22 39.5 53t14.5 67q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47q9 0 17.5 1t16.5 3l78-130q11-18 7-35.5T782-630q-13-11-31-12.5T716-630L296-270Zm-16-330q33 0 56.5-23.5T360-680q0-33-23.5-56.5T280-760q-33 0-56.5 23.5T200-680q0 33 23.5 56.5T280-600Zm400 400q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200ZM280-680Zm400 400Z"/></svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Automação de Processos
    </h3>
    <p className="text-indigo-200/65">
      Elimine tarefas repetitivas e aumente a eficiência operacional com automação inteligente sob medida.
    </p>
</article>

<article>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="mb-3 fill-indigo-500"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q0-42-29-71t-71-29q-42 0-71 29t-29 71v370q0 71 49.5 120.5T470-160q71 0 120.5-49.5T640-330v-390h80v390Z"/></svg>
    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
      Integração de Sistemas
    </h3>
    <p className="text-indigo-200/65">
      Conecte todas suas ferramentas em um ecossistema único e otimizado para máxima produtividade empresarial.
    </p>
</article>
          </div>
        </div>
      </div>
    </section>
  );
}
