import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { HeaderNavigationMenu } from "@/components/HeaderNavigationMenu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="bg-yellow-1 text-center py-1">
        <a
          href="https://naxa.com.np/blog/unified-action-naxa-nepal-flying-labs-and-partners-respond-to-the-western-nepal-earthquake-2023-28"
          target="_blank"
          className="inline-block underline text-sm cursor-pointer text-gray-2 hover:text-blue-1 hover:-translate-x-1 transition duration-300"
        >
          We have been working on several initiatives during the Jajarkot-Rukum
          Earthquake Response 2023. Check them out
        </a>
      </div>
      <div className="py-1 px-2 sm:px-20 flex items-center justify-between bg-gray-200/60">
        <img
          src="/logo.png"
          alt="Naxa"
          className="object-contain w-[110px] h-[32px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="hidden lg:block">
          <HeaderNavigationMenu />
        </div>
        <Button
          onClick={() => navigate("/contact")}
          className="bg-yellow-1 hover:bg-yellow-3 transition-colors duration-300 rounded-none w-[150px]"
        >
          <p className="text-blue-1 flex items-center gap-2 hover:-translate-x-1 group transition duration-300">
            Let's talk
            <ArrowRight className="hidden group-hover:block" />
          </p>
        </Button>
      </div>
    </header>
  );
};

export default Header;
