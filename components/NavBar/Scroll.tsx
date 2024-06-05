"use client";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Scroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 160);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <NavBar scrolled={scrolled} isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default Scroll;
