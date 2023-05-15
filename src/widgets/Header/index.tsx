import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header id="header">
      <nav
        className="flex p-8 justify-between max-w-screen-2xl m-auto"
        id="navbar"
      >
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <Image src="/next.svg" alt="Your logo" width={120} height={120} />
            <span className="ml-12 font-semibold text-xl tracking-tight ">
              Solda por Resistência
            </span>
          </a>
        </Link>
        <div className=" block lg:flex lg:items-center w-auto">
          <div className="text-sm lg:flex-grow">
            {links.map(({ href, label }, i) => (
              <Link key={`nav-link-${i}`} href={href} passHref legacyBehavior>
                <a
                  className={`hover:bg-gray-300 block mt-4 lg:inline-block lg:mt-0 mr-4 rounded-md px-3 py-2 ${
                    i >= 0 ? "hidden md:inline-block" : ""
                  }`}
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
