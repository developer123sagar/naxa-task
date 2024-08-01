import { Button } from "@/components/ui/button";
import { HeaderNavigationMenu } from "@/components/HeaderNavigationMenu";

const Header = () => {
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
      <div className="py-1 px-10 flex items-center justify-between">
        <img
          src="/logo.png"
          alt="Naxa"
          className="object-contain w-[110px] h-[32px]"
        />
        <HeaderNavigationMenu />
        <Button className="bg-yellow-1 rounded-none px-8 text-blue-1">Let's talk</Button>
      </div>
    </header>
  );
};

export default Header;
