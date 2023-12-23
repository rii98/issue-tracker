import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <header className="flex p-5 gap-8 items-center border-y">
      <nav>
        <Link href="/" className="text-xl">
          <FaBug />
        </Link>
      </nav>
      <ul className="flex gap-4 items-center">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index + 1}
            className="text-lg text-slate-500 hover:text-slate-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
