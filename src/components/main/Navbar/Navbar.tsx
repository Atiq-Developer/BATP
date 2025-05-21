"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Navigation Links: 3 links per row (2 rows)
  const navItems = [
    ["Home", "About Us", "Services"], // Row 1
    ["Join our Team", "Legal / Privacy", "Contact"], // Row 2
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md border-b-4 border-blue-600 transition-opacity duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-row items-center justify-between px-6 md:px-20 lg:px-28  max-w-[1900px] mx-auto py-4">
        {/* Logo Section (Left) */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="Logo"
              width={120}
              height={90}
              className="w-[75px] contrast-200"
            />
          </Link>
          <Link
            href="/"
            className="ml-3 font-semibold text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700"
          >
            <span className="block md:inline">Behavior Analysis &</span>
            <span className="block">Therapy Partners</span>
          </Link>
        </div>

        {/* Desktop Navigation (Right - 3 Links Per Row) */}
        <div className="hidden md:grid grid-rows-2 grid-cols-3 gap-x-9 gap-y-3 text-lg text-2xl text-center">
          {navItems.flat().map((item, index) => {
            const linkPath =
              item === "Home"
                ? "/"
                : `/${item
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace("legal / privacy", "legal-notice")}`;
            const isActive = pathname === linkPath;
            return (
              <Link key={index} href={linkPath}>
                <Button
                  variant="ghost"
                  className={`py-3 transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-600 text-xl text-white"
                      : "hover:bg-blue-600 text-xl hover:text-white"
                  }`}
                >
                  {item}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Button variant="ghost" className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          {isOpen && (
            <div className="absolute left-0 top-full w-full bg-white shadow-lg p-2 flex flex-col gap-4 border-r border-gray-200">
              {navItems.flat().map((item) => {
                const linkPath =
                  item === "Home"
                    ? "/"
                    : `/${item
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace("legal/privacy", "legal-notice")}`;
                const isActive = pathname === linkPath;
                return (
                  <Link key={item} href={linkPath}>
                    <Button
                      variant="ghost"
                      className={`w-full text-right px-5 py-3 ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "hover:bg-blue-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Button>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
