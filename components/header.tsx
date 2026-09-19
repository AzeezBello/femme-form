"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SocialLinks } from "./social-links";
import logo from "@/public/images/femme-form-logo.jpg";

const links = [
  { href: "/collections", label: "Collections" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="Femme Form"
            width={44}
            height={44}
            priority
            className="h-10 w-10 md:h-11 md:w-11 object-cover rounded-full ring-1 ring-[var(--line)]"
          />
          <span className="text-sm tracking-[.18em] font-semibold serif">FEMME FORM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors hover:text-[var(--accent)] ${active ? "text-[var(--accent)]" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <SocialLinks />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-1"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] bg-[var(--background)]">
          <nav className="container flex flex-col gap-5 py-6 text-xs uppercase tracking-widest">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <SocialLinks className="pt-2" />
          </nav>
        </div>
      )}
    </header>
  );
}
