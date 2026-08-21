import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Bot,
  BotMessageSquare,
  MessageCircle,
  MessageCircleCode,
  MessageCircleMore,
} from "lucide-react";

export default function Index() {
  return (

      <div className="relative flex flex-col items-center w-full bg-white font-montserrat">
        <Header />
        <section className="relative w-full bg-gradient-to-r from-surface-light via-slate-50 to-surface-light px-10 py-[100px] relative overflow-hidden flex flex-col items-center">
          <MessageCircleMore
            className="hidden lg:block float-icons absolute left-6 -top-12 text-brand-bg pointer-events-none"
            size={113}
            strokeWidth={1}
          />
          <div className="max-w-[1440px] mx-auto w-full mt-0 pt-0">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
              <div className="z-10 flex flex-col items-start gap-6 w-full lg:w-[600px] max-w-[600px]">
                <h1 className="font-montserrat font-extrabold text-[32px] sm:text-[40px] leading-[1.275] tracking-[0.8px] text-oc-gray-700">
                  Origin Clarity AI: El Experto Corporativo 24/7 que Conecta su
                  Negocio.
                </h1>

                <p className="font-montserrat font-normal text-base leading-7 text-oc-gray-700">
                  Transforme su conocimiento fragmentado en un Asistente
                  Inteligente. Productividad inmediata, costos reducidos y
                  experiencia del cliente superior en WhatsApp, Teams y
                  Telegram.
                </p>

                <Button variant="brand" size="large" className="w-full sm:w-auto">
                  SOLICITAR DEMO
                </Button>
              </div>

              <div className="relative w-full max-w-[600px] lg:max-w-[448px] lg:flex-shrink-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_0_1px_#E2E8F0,0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)] relative z-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src="/assets/images/LogoOriClarityStacked.svg"
                        alt="Origin Clarity AI"
                        className="w-48 h-auto"
                      />
                    </div>

                    <p className="font-montserrat font-normal text-base leading-6 text-center text-oc-gray-700">
                      Inteligencia aplicada
                      <br />
                      a su ecosistema corporativo.
                      <br />
                      <br />
                      Precisión, contexto y disponibilidad total.
                    </p>

                    <div className="flex justify-center items-start gap-4 w-full">
                      <div className="flex-1 flex flex-col items-center gap-2 p-4 rounded-lg border border-oc-gray-300">
                        <img src="/assets/images/Icon-ws.svg" alt="WhatsApp" className="w-12 h-12" />
                        <span className="font-montserrat font-semibold text-xs min-[425px]:text-sm text-oc-gray-700">
                          WhatsApp
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col items-center gap-2 p-4 rounded-lg border border-oc-gray-300">
                        <img src="/assets/images/Icon-teams.svg" alt="WhatsApp" className="w-12 h-12" />
                        <span className="font-montserrat font-semibold text-xs min-[425px]:text-sm text-oc-gray-700">
                          Teams
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <BotMessageSquare
                  className="hidden lg:block float-icons absolute -right-16 -bottom-20 text-brand-bg pointer-events-none"
                  size={132}
                  strokeWidth={1}
                />
                <Bot
                  className="hidden lg:block float-icons absolute -left-24 xl:-left-64 -top-20 text-brand-bg pointer-events-none"
                  size={181}
                  strokeWidth={0.75}
                />
                <MessageCircleMore
                  className="hidden lg:block float-icons absolute -right-24 -top-32 text-brand-bg pointer-events-none"
                  size={113}
                  strokeWidth={1}
                />
                <MessageCircleCode
                  className="hidden lg:block float-icons absolute -left-40 -bottom-14 text-brand-bg pointer-events-none"
                  size={79}
                  strokeWidth={1.25}
                />
                <MessageCircle
                  className="hidden lg:block float-icons absolute -left-10 xl:-left-16 top-28 text-brand-bg pointer-events-none"
                  size={131}
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-[100px] px-10">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
              <img
                src="/assets/images/keyboard.png"
                alt="Keyboard Illustration"
                className="float-icons w-[150px] md:w-[185px] h-auto object-contain flex-shrink-0"
              />

              <div className="flex flex-col items-start gap-6 w-full md:w-[600px] max-w-[600px]">
                <h2 className="font-montserrat font-bold text-2xl leading-9 text-oc-gray-700 text-center md:text-left w-full max-w-[400px] md:max-w-full mx-auto">
                  ¿Su conocimiento está siendo su mayor cuello de botella?
                </h2>

                <p className="font-montserrat font-normal text-base leading-7 text-oc-gray-700 text-center md:text-left">
                  En el mercado actual, la información es su activo más
                  valioso, pero a menudo se encuentra inaccesible, dispersa y
                  desaprovechada. Sus equipos invierten hasta un 20% de su
                  tiempo buscando respuestas. Es hora de liberar ese potencial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-surface-light py-[100px] px-10 relative overflow-hidden">

          <Bot
            className="hidden lg:block float-icons absolute -right-20 xl:right-20 top-64 xl:top-44 text-brand-bg pointer-events-none"
            size={238}
            strokeWidth={0.65}
          />
                   
          <MessageCircleCode
            className="hidden lg:block float-icons absolute left-16 xl:left-40 top-96 text-brand-bg pointer-events-none"
            size={109}
            strokeWidth={1.25}
          />

          <BotMessageSquare
            className="hidden lg:block float-icons absolute left-0 xl:left-7 top-6 text-brand-bg pointer-events-none"
            size={132}
            strokeWidth={1}
          />

          <MessageCircleMore
            className="hidden lg:block float-icons absolute left-28 xl:-left-10 -bottom-24 xl:-bottom-16 text-brand-bg pointer-events-none"
            size={212}
            strokeWidth={0.75}
          />

          <MessageCircleMore
            className="hidden lg:block float-icons absolute -right-20 bottom-24 text-brand-bg pointer-events-none"
            size={212}
            strokeWidth={0.75}
          />

          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center gap-16">
              <div className="z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-[900px] gap-12 md:gap-8 relative">
                <div className="flex flex-col items-center gap-6 w-full md:w-[600px] max-w-[600px]">
                  <h2 className="font-montserrat font-bold text-2xl leading-9 text-oc-gray-700 w-full text-center md:text-left">
                    Presentamos Origin Clarity AI: Su asistente inteligente
                    corporativo.
                  </h2>

                  <p className="font-montserrat font-normal text-base leading-7 text-oc-gray-700 w-full text-center md:text-left">
                    Una solución de IA de vanguardia diseñada para conectar su
                    ecosistema empresarial directamente con su documentación
                    oficial.
                  </p>

                  <p className="font-montserrat font-semibold text-base leading-6 text-brand-primary w-full text-center md:text-left">
                    Integración Nativa: Funciona en los canales que sus equipos
                    y clientes ya usan: WhatsApp, Telegram y Microsoft Teams.
                  </p>
                </div>

                <img
                  src="/assets/images/robot-01.png"
                  alt="AI Robot illustration"
                  className="hidden md:block float-icons w-[283.333px] h-auto object-contain flex-shrink-0"
                />
              </div>

              <div className="relative w-full max-w-[900px]">
                <img
                  src="/assets/images/laptop.png"
                  alt="Laptop showing Origin Clarity AI interface"
                  className="w-full h-auto object-contain"
                />
                <img
                  src="/assets/images/robot-02.png"
                  alt="Robot mascot"
                  className="hidden md:block float-icons absolute -left-20 top-48  min-[800px]:-left-18 min-[800px]:top-56 min-[900px]:-left-24 min-[900px]:top-64 lg:-left-36 lg:top-80 w-[298px] h-auto object-contain self-end mr-0 md:mr-44"
                />
              </div>

            </div>
          </div>
        </section>

        <section className="w-full bg-white py-[100px] px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col justify-center items-center gap-12">
              <h2 className="font-montserrat font-bold text-2xl leading-9 text-center text-oc-gray-700 w-full max-w-[400px] lg:max-w-[1200px]">
                Impacto medible en 4 pilares estratégicos de su negocio:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm md:min-h-[360px] lg:min-h-[406px]">
                  <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img
                      src="/assets/images/coin.png"
                      alt="Coin icon"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-base leading-7 text-center text-brand-primary">
                    Transformación Económica y ROI Acelerado
                  </h3>
                  <div className="flex flex-col gap-3 w-full max-w-full lg:max-w-[243px]">
                    <p className="font-montserrat font-normal text-center lg:text-left lg:text-base leading-6 text-oc-gray-700">
                      • Reducción de costos drástica.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Productividad disparada.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Onboarding rápido y eficiente.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm md:min-h-[360px] lg:min-h-[406px]">
                  <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img
                      src="/assets/images/medal.png"
                      alt="Medal icon"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-base leading-7 text-center text-brand-primary">
                    Liderazgo de Marca y Prestigio
                  </h3>
                  <div className="flex flex-col gap-3 w-full max-w-full lg:max-w-[243px]">
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Respuestas consistentes y alineadas a su identidad.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Experiencias memorables en canales clave.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Disponibilidad 24/7 con calidad premium.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm md:min-h-[360px] lg:min-h-[406px]">
                  <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img
                      src="/assets/images/trophy.png"
                      alt="Trophy icon"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-base leading-7 text-center text-brand-primary">
                    Excelencia Operativa Optimizada
                  </h3>
                  <div className="flex flex-col gap-3 w-full max-w-full lg:max-w-[243px]">
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Automatización de tareas repetitivas.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Respuestas verificadas y auditables.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Integración fluida con sistemas existentes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm md:min-h-[360px] lg:min-h-[406px]">
                  <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img
                      src="/assets/images/rocket.png"
                      alt="Rocket icon"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-base leading-7 text-center text-brand-primary">
                    Tecnología de Vanguardia ('State of the Art')
                  </h3>
                  <div className="flex flex-col gap-3 w-full max-w-full lg:max-w-[243px]">
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Arquitectura escalable y segura.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Modelos de lenguaje de última generación.
                    </p>
                    <p className="font-montserrat font-normal text-center lg:text-left text-base leading-6 text-oc-gray-700">
                      • Actualizaciones continuas con zero-downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-surface-light py-[100px] px-10 relative overflow-hidden">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-12 z-10">
                <img
                  src="/assets/images/quote.png"
                  alt="Quote illustration"
                  className="float-icons w-[125px] lg:w-[150px] h-auto object-contain flex-shrink-0"
                />
                <div className="flex flex-col gap-7 flex-1 max-w-[600px]">
                  <h2 className="font-montserrat font-bold text-2xl leading-9 text-oc-gray-700 w-full max-w-[400px] md:max-w-full mx-auto text-center md:text-left">
                    Una inversión en inteligencia, No en riesgo.
                  </h2>
                  <p className="font-montserrat font-normal text-base leading-6 text-oc-gray-700 text-center md:text-left">
                    <span className="font-bold text-brand-light">
                      Origin Clarity AI
                    </span>{" "}
                    utiliza la{" "}
                    <span className="font-bold text-brand-light">
                      Arquitectura RAG
                    </span>
                    , el estándar de oro para la IA empresarial, asegurando que
                    cada respuesta es precisa, verificada y basada
                    exclusivamente en su documentación privada.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full z-10">
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="/assets/images/quote-person-01.png"
                    alt="Client testimonial"
                    className="w-[120px] h-[120px] rounded-full border-[1.5px] border-brand-light object-cover"
                  />
                  <blockquote className="font-montserrat font-medium text-base leading-6 text-center text-brand-light">
                    "Excelente precisión y reducción de tiempos de respuesta.
                    Una herramienta clave para nuestro crecimiento."
                  </blockquote>
                  <p className="font-normal text-sm leading-5 text-center text-oc-gray-500">
                    Testimonio de Cliente
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="/assets/images/quote-person-02.png"
                    alt="Client testimonial"
                    className="w-[120px] h-[120px] rounded-full border-[1.5px] border-brand-light object-cover"
                  />
                  <blockquote className="font-montserrat font-medium text-base leading-6 text-center text-brand-light">
                    "Implementación rápida y segura. El impacto en atención al
                    cliente fue inmediato."
                  </blockquote>
                  <p className="font-normal text-sm leading-5 text-center text-oc-gray-500">
                    Testimonio de Cliente
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="/assets/images/quote-person-03.png"
                    alt="Client testimonial"
                    className="w-[120px] h-[120px] rounded-full border-[1.5px] border-brand-light object-cover"
                  />
                  <blockquote className="font-montserrat font-medium text-base leading-6 text-center text-brand-light">
                    "Integración perfecta con nuestros canales. Altamente
                    recomendado para empresas serias."
                  </blockquote>
                  <p className="font-normal text-sm leading-5 text-center text-oc-gray-500">
                    Testimonio de Cliente
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MessageCircleCode
            className="hidden lg:block float-icons absolute left-10 xl:left-40 top-64 xl:top-72 text-brand-bg pointer-events-none"
            size={91}
            strokeWidth={1.25}
          />
          <BotMessageSquare
            className="hidden lg:block float-icons absolute -right-14 xl:right-20 top-12 text-brand-bg pointer-events-none"
            size={168}
            strokeWidth={0.75}
          />
          <MessageCircleMore
            className="hidden lg:block float-icons absolute -left-8 -bottom-12 text-brand-bg pointer-events-none"
            size={168}
            strokeWidth={1}
          />
          <MessageCircleMore
            className="hidden lg:block float-icons absolute -right-16 bottom-56 text-brand-bg pointer-events-none"
            size={168}
            strokeWidth={0.85}
          />
          <Bot
            className="hidden lg:block float-icons absolute -left-20 xl:left-10 top-8 text-brand-bg pointer-events-none"
            size={173}
            strokeWidth={0.75}
          />
          <MessageCircleCode
            className="hidden lg:block float-icons absolute right-40 bottom-10 xl:bottom-20 text-brand-bg pointer-events-none"
            size={78}
            strokeWidth={1.25}
          />
        </section>

        <section className="w-full bg-white py-[100px] px-10">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex flex-row flex-nowrap gap-12 w-full max-w-[600px]">
                  <div className="flex flex-col gap-7 flex-1 max-w-[600px]">
                    <h2 className="font-montserrat font-bold text-2xl leading-9 text-oc-gray-700">
                      ¿Listo para el futuro? Hablemos sobre su implementación
                    </h2>
                    <p className="font-montserrat font-normal text-base leading-6 text-oc-gray-700">
                      <span className="font-bold text-brand-light">
                        Origin Clarity AI
                      </span>{" "}
                      es su socio estratégico para desbloquear un nuevo nivel de
                      productividad, fortalecer su marca y asegurar su posición
                      como líder en la era de la inteligencia artificial.
                    </p>
                  </div>
                  <img
                    src="/assets/images/robot-03.png"
                    alt="Robot with megaphone"
                    className="float-icons hidden md:block lg:hidden w-[220px] h-auto object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-end gap-12">
                <div className="flex-1 max-w-[600px] w-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm mx-auto">
                  <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <label className="font-montserrat font-semibold text-xs leading-5 text-brand-primary">
                        Nombre
                      </label>
                      <input
                        type="text"
                        placeholder="Ingresar..."
                        className="px-3 py-2 rounded-lg border border-oc-gray-200 bg-oc-gray-50 text-sm font-normal text-oc-gray-400 placeholder:text-oc-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-montserrat font-semibold text-xs leading-5 text-brand-primary">
                        Empresa de donde nos contactas
                      </label>
                      <input
                        type="text"
                        placeholder="Ingresar..."
                        className="px-3 py-2 rounded-lg border border-oc-gray-200 bg-oc-gray-50 text-sm font-normal text-oc-gray-400 placeholder:text-oc-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-montserrat font-semibold text-xs leading-5 text-brand-primary">
                        Cargo en la empresa
                      </label>
                      <input
                        type="text"
                        placeholder="Ingresar..."
                        className="px-3 py-2 rounded-lg border border-oc-gray-200 bg-oc-gray-50 text-sm font-normal text-oc-gray-400 placeholder:text-oc-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-montserrat font-semibold text-xs leading-5 text-brand-primary">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        placeholder="011 0000 0000"
                        className="px-3 py-2 rounded-lg border border-oc-gray-200 bg-oc-gray-50 text-sm font-normal text-oc-gray-400 placeholder:text-oc-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-montserrat font-semibold text-xs leading-5 text-brand-primary">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="ejemplo@email.com"
                        className="px-3 py-2 rounded-lg border border-oc-gray-200 bg-oc-gray-50 text-sm font-normal text-oc-gray-400 placeholder:text-oc-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="brand"
                      size="regular"
                      className="w-full sm:w-fit mx-auto"
                    >
                      Solicitar Demo
                    </Button>
                  </form>
                </div>

                <img
                  src="/assets/images/robot-03.png"
                  alt="Robot with megaphone"
                  className="float-icons hidden lg:block w-[252px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

  );
}
