import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import oniLogo from "../../assets/Oni_500x1000.svg";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full z-30">
      {/* Mobile version */}
      <div className="container mx-auto flex items-center justify-between px-4 py-6 lg:hidden">
        <Image src={oniLogo} alt="Oni Logo" width={100} height={200} />
        <button
          className="px-3 py-2 text-gray-800 rounded-xl outline-none border-2 border-gray-800 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white font-poppins text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
        {/* Only render the menu when it is open */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 left-0 mt-24 py-4 bg-white rounded-md shadow-xl z-40">
            {/* Use flexbox to make the menu items go down instead of to the right */}
            <div className="flex flex-col w-full">
              {["Home", "Features", "Pricing", "Docs", "Dashboard"].map(
                (link) => (
                  <Link
                    href={`/${link.toLowerCase()}`}
                    key={link.toLowerCase()}
                  >
                    <div
                      className={`inline-block px-7 py-2 text-gray-800 font-poppins font-medium text-[16px] hover:underline ${
                        router.pathname === `/${link.toLowerCase()}`
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      {link}
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
      {/* Desktop version */}
      <div className="hidden lg:flex lg:items-center lg:justify-between mx-24 py-6">
        <Image src={oniLogo} alt="Oni Logo" width={100} height={200} />
        <div>
          <Link href="/" key="home">
            <div
              className={`inline-block px-7 py-2 text-gray-800 font-poppins text-[16px] hover:underline ${
                router.pathname === "/" ? "font-bold" : ""
              }`}
            >
              Home
            </div>
          </Link>
          {["Features", "Pricing", "Docs"].map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link.toLowerCase()}>
              <div
                className={`inline-block px-7 py-2 text-gray-800 font-medium font-poppins text-[16px] hover:underline ${
                  router.pathname === `/${link.toLowerCase()}`
                    ? "font-bold"
                    : ""
                }`}
              >
                {link}
              </div>
            </Link>
          ))}
          <div className="inline-block px-7 py-2">
            <button className="inline-block px-4 py-2 text-gray-800 font-medium rounded-xl outline-none border-2 border-gray-800 hover:bg-gray-800 hover:text-white font-poppins hover:underline text-[16px]">
              <Link href="/dashboard" key="dashboard">
                Dashboard
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
