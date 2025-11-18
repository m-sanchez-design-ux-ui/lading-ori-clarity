import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bot,
  BotMessageSquare,
  MessageCircle,
  MessageCircleCode,
  MessageCircleMore,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <div className="flex flex-col items-center">
        <section className="w-full bg-gradient-to-r from-[#DAEDFF] via-[#F8FAFC] to-[#DAEDFF] py-[120px] px-10 pb-[100px] relative overflow-hidden">
          <Header />

          <div className="max-w-[1200px] mx-auto mt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
              <div className="flex flex-col items-start gap-6 w-full lg:w-[600px] max-w-[600px]">
                <h1 className="font-montserrat font-extrabold text-[40px] leading-[51px] tracking-[0.8px] text-oc-gray-700">
                  Origin Clarity AI: El Experto Corporativo 24/7 que Conecta su
                  Negocio.
                </h1>

                <p className="font-montserrat font-normal text-base leading-7 text-oc-gray-700">
                  Transforme su conocimiento fragmentado en un Asistente
                  Inteligente. Productividad inmediata, costos reducidos y
                  experiencia del cliente superior en WhatsApp, Teams y
                  Telegram.
                </p>

                <button className="w-full lg:w-auto px-6 py-3 rounded-lg bg-oc-blue-400 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] hover:bg-oc-blue-500 transition-colors">
                  <span className="font-montserrat font-semibold text-lg leading-7 text-white">
                    SOLICITAR DEMO
                  </span>
                </button>
              </div>

              <div className="relative w-full lg:w-[448px] max-w-[448px]">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_0_1px_#E2E8F0,0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-[42.188px] h-[42.188px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            width="37"
                            height="37"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="36.1607"
                              height="36.1607"
                              rx="6.02679"
                              fill="url(#paint0_linear_card)"
                            />
                            <path
                              d="M11.4909 25.5569L11.4909 23.9946C12.4537 24.5373 13.4339 24.9311 14.4317 25.1762C15.4383 25.43 16.506 25.5569 17.6351 25.5569C18.7642 25.5569 19.8276 25.43 20.8254 25.1762C21.8319 24.9311 22.8165 24.5373 23.7793 23.9946L23.7793 25.5569C23.0003 26.0821 22.0813 26.4803 21.0223 26.7516C19.972 27.023 18.8429 27.1586 17.6351 27.1586C16.4273 27.1586 15.2982 27.023 14.2479 26.7516C13.2064 26.4803 12.2874 26.0821 11.4909 25.5569Z"
                              fill="white"
                            />
                            <path
                              d="M11.5114 20.3188C10.7937 20.3188 10.1329 20.2007 9.52902 19.9643C8.92511 19.728 8.39996 19.3998 7.95359 18.9797C7.50722 18.5508 7.1615 18.0519 6.91643 17.483C6.67136 16.9054 6.54883 16.2752 6.54883 15.5925C6.54883 14.9098 6.67136 14.284 6.91643 13.7151C7.1615 13.1375 7.50722 12.6386 7.95359 12.2185C8.39996 11.7896 8.92511 11.457 9.52902 11.2207C10.1329 10.9844 10.7894 10.8662 11.4983 10.8662C12.216 10.8662 12.8724 10.9844 13.4676 11.2207C14.0715 11.457 14.5967 11.7896 15.043 12.2185C15.4894 12.6386 15.8351 13.1375 16.0802 13.7151C16.3253 14.284 16.4478 14.9098 16.4478 15.5925C16.4478 16.2752 16.3253 16.9054 16.0802 17.483C15.8351 18.0607 15.4894 18.5596 15.043 18.9797C14.5967 19.3998 14.0715 19.728 13.4676 19.9643C12.8724 20.2007 12.2204 20.3188 11.5114 20.3188ZM11.4983 18.8222C11.9622 18.8222 12.3911 18.7434 12.7849 18.5858C13.1788 18.4283 13.5201 18.2051 13.809 17.9163C14.0978 17.6187 14.321 17.2773 14.4785 16.8922C14.6448 16.4984 14.728 16.0651 14.728 15.5925C14.728 15.1199 14.6448 14.691 14.4785 14.3059C14.321 13.912 14.0978 13.5707 13.809 13.2819C13.5201 12.9843 13.1788 12.7567 12.7849 12.5992C12.3911 12.4416 11.9622 12.3629 11.4983 12.3629C11.0344 12.3629 10.6056 12.4416 10.2117 12.5992C9.82661 12.7567 9.48526 12.9843 9.18768 13.2819C8.89885 13.5707 8.67129 13.912 8.50499 14.3059C8.34745 14.691 8.26868 15.1199 8.26868 15.5925C8.26868 16.0564 8.34745 16.4853 8.50499 16.8791C8.67129 17.273 8.89885 17.6187 9.18768 17.9163C9.47651 18.2051 9.81785 18.4283 10.2117 18.5858C10.6056 18.7434 11.0344 18.8222 11.4983 18.8222Z"
                              fill="white"
                            />
                            <path
                              d="M24.4033 13.3276C25.0859 13.3276 25.7164 13.4498 26.2939 13.6948C26.8716 13.9399 27.3709 14.2856 27.791 14.7319C28.2198 15.1782 28.5478 15.6994 28.7754 16.2944C29.0117 16.8895 29.1298 17.5417 29.1299 18.2505V18.2515H27.6318C27.6237 17.8003 27.5455 17.3841 27.3965 17.0034C27.2389 16.6097 27.0163 16.2638 26.7275 15.9663C26.4387 15.6775 26.097 15.45 25.7031 15.2837C25.3093 15.1262 24.8759 15.0474 24.4033 15.0474C23.9308 15.0474 23.4973 15.1262 23.1035 15.2837C22.7099 15.4499 22.3688 15.6776 22.0801 15.9663C21.7913 16.2638 21.5677 16.6096 21.4102 17.0034C21.2612 17.3841 21.1839 17.8003 21.1758 18.2515H19.6777C19.6777 18.2469 19.6777 18.2424 19.6777 18.2378C19.6777 17.5377 19.791 16.8856 20.0186 16.2817C20.2548 15.6866 20.5829 15.1656 21.0029 14.7192C21.4318 14.2817 21.9351 13.9399 22.5127 13.6948C23.0903 13.4498 23.7207 13.3277 24.4033 13.3276Z"
                              fill="white"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_card"
                                x1="18.0804"
                                y1="16.0714"
                                x2="18.0804"
                                y2="76.8415"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#4F8CFF" />
                                <stop offset="1" stopColor="#003A99" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="absolute inset-0 border-[1.507px] border-oc-blue-400 rounded-[8.036px]"></div>
                      </div>
                      <span className="font-montserrat font-semibold text-sm leading-[32.813px] tracking-[-0.586px] bg-gradient-to-b from-[#4F8CFF] to-[#003A99] bg-clip-text text-transparent">
                        ORIGIN CLARITY AI
                      </span>
                    </div>

                    <p className="font-montserrat font-normal text-base leading-6 text-center text-oc-gray-700">
                      Inteligencia aplicada a su ecosistema corporativo.
                      <br />
                      Precisión, contexto y disponibilidad total.
                    </p>

                    <div className="flex justify-center items-start gap-4 w-full">
                      <div className="flex-1 flex flex-col items-center gap-2 p-4 rounded-lg border border-oc-gray-300">
                        <div className="w-12 h-12 rounded-full bg-[#32D951] flex items-center justify-center shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              fill="#32D951"
                            />
                            <path
                              d="M15.3259 12.585C15.0349 12.4255 13.6057 11.6542 13.3371 11.5451C13.069 11.4361 12.8737 11.3798 12.6647 11.6688C12.4564 11.9574 11.8626 12.6035 11.6831 12.7948C11.3417 13.1567 10.6771 12.6806 10.3054 12.4735C9.87754 12.2353 9.31677 11.868 8.71009 11.2849C7.85881 10.4663 7.30046 9.47413 7.13869 9.17095C6.89139 8.70829 7.75759 8.16773 8.02343 7.67243C8.03801 7.64523 8.05374 7.61651 8.07024 7.58624C8.17625 7.39168 8.13362 7.21732 8.06473 7.06606C7.99583 6.91565 7.45804 5.43487 7.23321 4.83252C6.94811 4.06782 5.68659 4.12926 5.21409 4.60803C4.93152 4.89425 4.13891 5.58214 4.08406 7.04089C4.02977 8.4985 5.0385 9.94738 5.17912 10.1505C5.32014 10.3541 7.10559 13.5146 10.0735 14.8142C11.8296 15.5828 13.2297 16.2951 14.9207 15.1454C15.2542 14.919 15.5401 14.6422 15.655 14.3544C15.9279 13.672 15.9499 13.0787 15.8802 12.9523C15.8109 12.8263 15.6164 12.744 15.3255 12.5854L15.3259 12.585Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="font-montserrat font-semibold text-sm text-oc-gray-700">
                          WhatsApp
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col items-center gap-2 p-4 rounded-lg border border-oc-gray-300">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0074 11.0635H21.644C22.271 11.0635 22.779 11.5812 22.779 12.2198V18.377C22.779 20.7241 20.911 22.6269 18.607 22.6269H18.587C16.2827 22.6272 14.4144 20.7247 14.4141 18.3776V11.6678C14.4141 11.334 14.6797 11.0635 15.0074 11.0635Z"
                              fill="#5059C9"
                            />
                            <path
                              d="M19.458 9.83353C20.885 9.83353 22.042 8.62189 22.042 7.12723C22.042 5.63258 20.885 4.42093 19.458 4.42093C18.032 4.42093 16.875 5.63258 16.875 7.12723C16.875 8.62189 18.032 9.83353 19.458 9.83353Z"
                              fill="#5059C9"
                            />
                            <path
                              d="M11.2158 9.83353C13.3898 9.83353 15.1522 8.12607 15.1522 6.02C15.1522 3.91393 13.3898 2.20648 11.2158 2.20648C9.04174 2.20648 7.2793 3.91393 7.2793 6.02C7.2793 8.12607 9.04174 9.83353 11.2158 9.83353Z"
                              fill="#7B83EB"
                            />
                            <path
                              d="M16.2778 11.0635H5.41406C4.79977 11.0789 4.31377 11.5954 4.32797 12.2179V19.1449C4.24217 22.8802 7.15906 25.9799 10.846 26.0713C14.5328 25.9799 17.4497 22.8802 17.3639 19.1449V12.2179C17.3781 11.5954 16.8921 11.0789 16.2778 11.0635Z"
                              fill="#7B83EB"
                            />
                          </svg>
                        </div>
                        <span className="font-montserrat font-semibold text-sm text-oc-gray-700">
                          Teams
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <BotMessageSquare
                  className="absolute -right-11 -bottom-5 text-[#D6E6FF]"
                  size={132}
                  strokeWidth={1.5}
                />
                <Bot
                  className="absolute -left-28 top-20 text-[#D6E6FF]"
                  size={181}
                  strokeWidth={1}
                />
                <MessageCircleMore
                  className="absolute -right-9 top-5 text-[#D6E6FF]"
                  size={113}
                  strokeWidth={1.5}
                />
                <MessageCircleCode
                  className="absolute -left-16 -bottom-14 text-[#D6E6FF]"
                  size={79}
                  strokeWidth={1.5}
                />
                <MessageCircle
                  className="absolute left-4 top-0 text-[#D6E6FF]"
                  size={131}
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-[100px] px-10">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/69fcaf92cb7cc66d98a4a177cab929e33077db3b?width=370"
                alt="Keyboard with question keycap"
                className="w-[185px] h-[157px] object-contain"
              />

              <div className="flex flex-col items-start gap-6 w-full md:w-[600px] max-w-[600px]">
                <h2 className="font-montserrat font-bold text-2xl leading-9 text-oc-gray-700">
                  ¿Su conocimiento está siendo su mayor cuello de botella?
                </h2>

                <p className="font-montserrat font-normal text-base leading-7 text-oc-gray-700">
                  En el mercado actual, la información es su activo más
                  valioso, pero a menudo se encuentra inaccesible, dispersa y
                  desaprovechada. Sus equipos invierten hasta un 20% de su
                  tiempo buscando respuestas. Es hora de liberar ese potencial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-oc-blue-50 py-[100px] px-10 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center gap-16">
              <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[900px] gap-12">
                <div className="flex flex-col items-center gap-6 w-full md:w-[600px] max-w-[600px]">
                  <h2 className="font-montserrat font-bold text-2xl leading-9 text-oc-gray-700 w-full">
                    Presentamos Origin Clarity AI: Su asistente inteligente
                    corporativo.
                  </h2>

                  <p className="font-montserrat font-normal text-base leading-7 text-oc-gray-700 w-full">
                    Una solución de IA de vanguardia diseñada para conectar su
                    ecosistema empresarial directamente con su documentación
                    oficial.
                  </p>

                  <p className="font-montserrat font-semibold text-base leading-6 text-oc-blue-500 w-full">
                    Integración Nativa: Funciona en los canales que sus equipos
                    y clientes ya usan: WhatsApp, Telegram y Microsoft Teams.
                  </p>
                </div>

                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/29b85e31374447a9abe1853f120da0594e850fa2?width=567"
                  alt="AI Robot illustration"
                  className="w-[283.333px] h-[250px] object-contain"
                />

                <Bot
                  className="absolute -right-15 top-44 text-[#D6E6FF]"
                  size={238}
                  strokeWidth={1}
                />
              </div>

              <div className="relative w-full max-w-[900px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ebddae012588348e4a8612b4f0fdb44b011938f2?width=1800"
                  alt="Laptop showing Origin Clarity AI interface"
                  className="w-full h-auto object-contain"
                />

                <MessageCircleMore
                  className="absolute -right-20 -bottom-32 text-[#D6E6FF]"
                  size={212}
                  strokeWidth={1.5}
                />
                <MessageCircleMore
                  className="absolute -left-14 -bottom-12 text-[#D6E6FF]"
                  size={212}
                  strokeWidth={1.5}
                />
                <BotMessageSquare
                  className="absolute left-7 top-6 text-[#D6E6FF]"
                  size={132}
                  strokeWidth={1.5}
                />
                <MessageCircleCode
                  className="absolute right-40 -top-96 text-[#D6E6FF]"
                  size={109}
                  strokeWidth={1.5}
                />
              </div>

              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c4aa262bdc09d4d316f097d30a5d0348ba6d4e04?width=596"
                alt="Robot mascot"
                className="w-[298px] h-[371.467px] object-contain self-end mr-44"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
