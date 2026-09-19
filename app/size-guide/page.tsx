import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import sizeChart from "@/public/images/742045829_18366635290224521_2089633384226496250_n.jpg";

export const metadata: Metadata = {
  title: "Size Guide | Femme Form Style",
  description:
    "Femme Form size chart and measuring guide — find your fit across sizes 6 to 24.",
};

const steps = [
  {
    title: "Bust",
    desc: "Measure around the fullest part of your bust, keeping the tape level and comfortably loose.",
  },
  {
    title: "Waist",
    desc: "Measure around your natural waistline — the narrowest part of your torso, just above the belly button.",
  },
  {
    title: "Hip",
    desc: "Measure around the fullest part of your hips, roughly 20cm below your natural waistline.",
  },
];

export default function SizeGuidePage() {
  return (
    <>
      <section className="container py-14 md:py-20">
        <p className="eyebrow mb-3">Find your fit</p>
        <h1 className="serif text-5xl md:text-7xl">Size Guide</h1>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#79695d]">
          Every Femme Form piece is cut across sizes 6 through 24. Use the
          chart below alongside our measuring guide to find your best fit —
          all measurements are in inches.
        </p>
      </section>

      <section className="container grid gap-10 pb-20 md:grid-cols-[minmax(0,1fr)_320px] md:gap-16">
        <div className="bg-white/40 p-2 sm:p-4">
          <Image
            src={sizeChart}
            alt="Femme Form size chart, sizes 6 to 24 with bust, waist and hip measurements in inches"
            className="w-full object-contain"
            placeholder="blur"
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        </div>

        <div>
          <h2 className="serif text-2xl mb-6">How to measure</h2>
          <ol className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="serif text-xl text-[var(--accent)]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#79695d]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-6 text-[#79695d]">
            Between sizes, or unsure of your fit? Reach out and our team will
            help you choose.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="btn"
              href="https://www.instagram.com/femmeformstyle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on Instagram
            </a>
            <Link className="btn" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
