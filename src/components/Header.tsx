import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { HeaderNavigationMenu } from "@/components/HeaderNavigationMenu";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
        <button
          className="lg:hidden flex items-center text-gray-700"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      {isDrawerOpen && (
        <div className="bg-slate-200/20 backdrop-blur p-8 fixed  inset-0 z-[9999] grid place-items-center overflow-y-scroll scrollbar-hide cursor-pointer">
          <div className="lg:hidden fixed top-0 left-0 w-[85%] h-full bg-gray-100 shadow-lg z-50 transition-all ease-in-out duration-1000 transform -translate-x-0">
            <div className="flex justify-between items-center px-2 mb-4">
              <div className="flex justify-between p-4">
                <p
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-gray-700"
                >
                  <X size={24} />
                </p>
              </div>
              <Button
                onClick={() => {
                  setIsDrawerOpen(false);
                  navigate("/contact");
                }}
                className="bg-yellow-1 hover:bg-yellow-3 transition-colors duration-300 rounded-none w-[150px]"
              >
                <p className="text-blue-1 flex items-center gap-2">
                  Let's talk
                  <ArrowRight />
                </p>
              </Button>
            </div>
            <HeaderNavigationMenu />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
