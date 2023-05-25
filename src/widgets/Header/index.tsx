import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#section-card-1", label: "O Processo" },
  { href: "#section-card-2", label: "Utilização Mais Comum" },
  { href: "#section-card-3", label: "Solda a Ponto" },
  { href: "#section-card-4", label: "Parametros" },
  { href: "#calculadora-solda", label: "Calculadora" },
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
              <a
                key={`nav-link-${i}`}
                href={href}
                className={`hover:bg-gray-300 block mt-4 lg:inline-block lg:mt-0 mr-4 rounded-md px-3 py-2 ${
                  i >= 0 ? "hidden lg:inline-block" : ""
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
