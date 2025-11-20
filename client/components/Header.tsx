import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-oc-gray-200 bg-oc-white px-10">
      <div className="max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center min-h-[68px] py-4">
          <Link to="/" className="flex flex-col min-[425px]:flex-row items-center gap-1 min-[425px]:gap-2">
            <img src="/assets/images/IsoLogoOriClarity.svg" alt="Origin Clarity AI" className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="font-montserrat font-semibold text-xs min-[425px]:text-base leading-7 tracking-[-0.5px] bg-gradient-to-b from-[#4F8CFF] via-[#4F8CFF] to-[#003A99] bg-clip-text text-transparent">
                ORIGIN CLARITY AI
              </span>
            </div>
          </Link>

          <button className="flex items-center justify-center px-4 py-2 rounded-md bg-oc-blue-400 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] hover:bg-oc-blue-500 transition-colors">
            <span className="font-montserrat font-semibold text-sm leading-5 text-white">
              Solicitar Demo
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
