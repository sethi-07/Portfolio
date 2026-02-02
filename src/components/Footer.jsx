import { ArrowUpCircle } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-secondary text-center text-foreground mt-12 pt-8 flex justify-between gap-12">
      <p>© {new Date().getFullYear()} Abhinandan Sethi. All rights reserved.</p>
      <a href="#hero" className="text-foreground underline">
        <ArrowUpCircle />
      </a>
    </footer>
  );
};

export default Footer;
