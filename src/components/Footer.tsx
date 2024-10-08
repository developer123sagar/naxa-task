import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_EVENTS_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_SOCIALMEDIA_LINKS,
} from "@/constants";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="relative top-20 z-40 footer-up w-[95%] sm:w-[80%] mx-auto flex-col-center rounded-2xl h-[240px]">
          <img
            src="/1.svg"
            className="absolute left-0 bottom-0 rounded-b-2xl"
          />
          <img
            src="/2.svg"
            className="absolute right-0 top-0 rounded-2xl object-contain h-[240px]"
          />
          <h2 className="text-white-1 text-center text-3xl font-medium z-30">
            Seeking <span className="text-yellow-2">Collaboration</span>?
          </h2>
          <p className="text-center text-white-1 mt-4 z-30">
            We constantly look forward to exploring ideas, collaborations, and
            technical <br />
            innovations. If you want to partner with us, we are just an email
            away.
          </p>
          <div className="flex-center mt-5 z-30">
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
        </div>
      </div>
      <footer className="bg-gray-200/60 pt-40 pb-16 px-2 sm:px-20 relative">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <li>
            <img
              src="/logo.png"
              alt="Naxa"
              className="object-contain w-[110px] h-[32px] cursor-pointer"
            />
            <h1 className="text-gray-2 text-sm my-5 font-medium">
              Naxa Pvt Ltd.
            </h1>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm text-gray-1 font-light">
                Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal
              </p>
              <a className="text-sm text-gray-1 font-light" href="tel:14516543">
                14516543
              </a>
              <a
                className="text-sm text-gray-1 font-light underline"
                href="mailto:info@naxa.com.np"
                target="_blank"
              >
                info@naxa.com.np
              </a>
            </div>
          </li>
          <li className="flex flex-col gap-y-6">
            <div>
              <h1 className="footer-title">Services</h1>
              <div className="flex flex-col gap-2">
                {FOOTER_SERVICE_LINKS.map((item) => (
                  <Link className="footer-link" key={item} to={`/${item}`}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h1 className="footer-title">Portfolio</h1>
              <div className="flex flex-col gap-4">
                <Link className="footer-link" to={"/general"}>
                  General
                </Link>
                <Link className="footer-link" to={"/international"}>
                  International
                </Link>
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-y-6">
            <div>
              <h1 className="footer-title">Company</h1>
              <div className="flex flex-col gap-2">
                {FOOTER_COMPANY_LINKS.map((item) => (
                  <Link className="footer-link" key={item} to={`/${item}`}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h1 className="footer-title">Events & Media</h1>
              <div className="flex flex-col gap-2">
                {FOOTER_EVENTS_LINKS.map((item) => (
                  <Link className="footer-link" key={item} to={`/${item}`}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link className="footer-title" to="/blog">
                Blog
              </Link>
              <Link className="footer-title" to={"/contact"}>
                Contact
              </Link>
            </div>
          </li>
        </ul>
        <ul className="flex justify-between items-center">
          <li className="flex gap-4 items-center">
            {FOOTER_SOCIALMEDIA_LINKS.map((item) => (
              <a href={item.link} key={item.img} target="_blank">
                <img
                  src={`${item.img}`}
                  alt={item.img}
                  className="w-4 h-4 object-contain"
                />
              </a>
            ))}
          </li>
          <li className="text-gray-1 text-[10px]">
            © NAXA 2023. All Rights Reserved.
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
