import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent, fixed, w-full, z-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div>
            Oni
        </div>
        <div>
          {["Home", "Features", "Pricing", "Docs", "Dashboard"].map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link.toLowerCase()}>
              <a className="px-3 py-2 font-semibold text-white hover:text-gray-300">
                {link}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;