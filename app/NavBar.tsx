"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
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
  const pathname = usePathname();

  return (
    <header className="flex p-5 gap-8 items-center border-y mb-6">
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
            className={classNames({
              "hover:text-slate-800 transition-colors": true,
              "text-slate-900":
                pathname.split("/")[1] === link.href.split("/")[1],
              "text-slate-500":
                pathname.split("/")[1] !== link.href.split("/")[1],
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
