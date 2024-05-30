"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex justify-between px-[10%] xl:px-[14%] py-6 items-center border-b border-slate-800">
      <div>
        <Image
          src="/smart-lights-logo.svg"
          width={200}
          height={200}
          alt="smart light logo"
        />
      </div>

      <div className="hidden lg:block">
        <ul className="text-white text-lg flex lg:gap-8 xl:gap-12 items-baseline cursor-pointer">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#products">Products</Link>
          </li>
          <li>
            <Link href="#ecosystem">Software Services</Link>
          </li>
          <li>
            <Link
              href={"/login"}
              className="bg-[#3661FF] py-[12px] px-12 rounded"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden relative" ref={menuRef}>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-8 right-[-80px] bg-gray-900 text-white py-2 px-4 w-[180px] cursor-pointer">
            <ul>
              <li>
                <Link href="#home" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" onClick={toggleMenu}>
                  Software Services
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
