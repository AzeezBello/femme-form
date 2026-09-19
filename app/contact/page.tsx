import type { Metadata } from "next";
import Image from "next/image";
import { Instagram } from "lucide-react";
import contactImage from "@/public/images/661158149_18384031228095280_5879843721321602774_n.jpg";

export const metadata: Metadata = {
  title: "Contact | Femme Form Style",
  description:
    "Get in touch with Femme Form Style for orders, styling questions, and collaborations.",
};

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-20">
      <div>
        <p className="eyebrow mb-3">Get in touch</p>
        <h1 className="serif text-5xl leading-tight md:text-7xl mb-6">
          Let&apos;s talk <i>form.</i>
        </h1>
        <p className="max-w-md text-sm leading-7 text-[#79695d] mb-10">
          For orders, styling questions, sizing help, or collaboration
          enquiries, the fastest way to reach us is Instagram — we&apos;re
          online there every day.
        </p>

        <a
          href="https://www.instagram.com/femmeformstyle/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 border border-[var(--foreground)] px-6 py-5 transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
        >
          <Instagram size={28} strokeWidth={1.5} />
          <span>
            <span className="block text-sm uppercase tracking-widest">
              Message us on Instagram
            </span>
            <span className="block text-xs text-[#8b796b] group-hover:text-[#cdbfb2]">
              @femmeformstyle
            </span>
          </span>
        </a>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-2">
              Sizing help
            </h2>
            <p className="text-sm leading-6 text-[#79695d]">
              Not sure of your size? Check our{" "}
              <a href="/size-guide" className="underline underline-offset-2">
                size guide
              </a>{" "}
              or ask us directly on Instagram.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-2">
              Response time
            </h2>
            <p className="text-sm leading-6 text-[#79695d]">
              We typically reply to Instagram DMs within 24 hours on business
              days.
            </p>
          </div>
        </div>
      </div>

      <Image
        src={contactImage}
        alt="Femme Form model wearing a black one-shoulder dress"
        className="hidden aspect-[4/5] w-full object-cover md:block"
        placeholder="blur"
        sizes="50vw"
      />
    </section>
  );
}
