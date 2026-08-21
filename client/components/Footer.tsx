import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#6699FF_-70.22%,#003399_113.8%)] py-[100px] px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
            <div className="flex flex-col gap-8 lg:gap-4 w-full md:w-[280px]">
              <Link to="/" className="hidden lg:flex  mx-auto lg:mx-0">
                <img
                  src="/assets/images/LogoOriClarityHorizontalWhite.svg"
                  alt="Origin Clarity AI"
                  className="h-9 w-auto"
                />
              </Link>

              <Link to="/" className="flex lg:hidden  mx-auto lg:mx-0">
                <img
                  src="/assets/images/LogoOriClarityStackedWhite.svg"
                  alt="Origin Clarity AI"
                  className="h-14 w-auto"
                />
              </Link>

              <div className="flex flex-col">
                <p className="font-montserrat font-medium text-sm leading-5 text-white text-center lg:text-left mx-auto lg:mx-0">
                  © 2025 Origin Clarity AI.
                  <br />
                  Todos los derechos reservados.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[280px]">
              <h4 className="font-montserrat font-bold text-sm leading-5 text-white mx-auto lg:mx-0">
                Información de Contacto
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:contacto@originclarity.ai"
                  className="font-montserrat font-medium text-sm leading-5 text-white hover:underline mx-auto lg:mx-0"
                >
                  contacto@originclarity.ai
                </a>
                <a
                  href="tel:+00000000000"
                  className="font-montserrat font-medium text-sm leading-5 text-white hover:underline mx-auto lg:mx-0"
                >
                  +00 000 000 000
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-[280px]">
              <h4 className="font-montserrat font-bold text-sm leading-5 text-white mx-auto lg:mx-0">
                Enlaces a Políticas
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="#"
                  className="font-montserrat font-medium text-sm leading-5 text-white hover:underline mx-auto lg:mx-0"
                >
                  Términos y Condiciones
                </Link>
                <Link
                  to="#"
                  className="font-montserrat font-medium text-sm leading-5 text-white hover:underline mx-auto lg:mx-0"
                >
                  Privacidad
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-fit">
              <h4 className="font-montserrat font-bold text-sm leading-5 text-white mx-auto lg:mx-0">
                Redes Sociales
              </h4>
              <div className="flex items-center gap-3 w-fit mx-auto">
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 p-1 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-brand-primary stroke-[1.5px]" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 p-1 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-brand-primary stroke-[1.5px]" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 p-1 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-brand-primary stroke-[1.5px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 w-fit mx-auto lg:mx-0">
              <span className="font-montserrat font-medium italic text-xs leading-[16.302px] text-white">
                POWERED BY
              </span>
              <img src="/assets/images/origin-solutions-logo-white.svg" alt="Origin Solutions" className="w-[88px] h-[24px]" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
