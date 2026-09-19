import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./social-links";
import logo from "@/public/images/femme-form-logo.jpg";

const links = [
  { href: "/collections", label: "Collections" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "Our Story" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#302923] text-[#f8f4ef]">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Femme Form"
            width={40}
            height={40}
            className="h-10 w-10 object-cover rounded-full ring-1 ring-white/20"
          />
          <div>
            <p className="serif text-lg">Femme Form</p>
            <p className="text-xs text-[#cdbfb2]">Minimal luxury, thoughtfully styled.</p>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-[#cdbfb2]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <SocialLinks className="text-[#f8f4ef]" />
      </div>

      <div className="container flex flex-col-reverse gap-2 border-t border-white/10 py-6 text-xs text-[#a9998c] md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Femme Form Style. All rights reserved.</span>
        <span>Designed for the woman who finds confidence in her form.</span>
      </div>
    </footer>
  );
}
