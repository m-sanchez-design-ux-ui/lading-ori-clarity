import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-oc-gray-200 bg-surface-navbar backdrop-blur-[6px] px-10">
      <div className="max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center min-h-[68px] py-4">
          <Link to="/" className="hidden lg:flex">
            <img
              src="/assets/images/LogoOriClarityHorizontal.svg"
              alt="Origin Clarity AI"
              className="h-9 w-auto"
            />
          </Link>
          <Link to="/" className="flex lg:hidden">
            <img
              src="/assets/images/LogoOriClarityStacked.svg"
              alt="Origin Clarity AI"
              className="h-14 w-auto"
            />
          </Link>
          <Button variant="brand" size="regular">
            Solicitar Demo
          </Button>
        </nav>
      </div>
    </header>
  );
}
