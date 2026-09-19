import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import essentialEase from "@/public/images/496482092_18310780984224521_7523538861242604782_n.jpg";
import coordEdit from "@/public/images/670484518_18581754865045612_3053517344034302838_n.jpg";
import afterHours from "@/public/images/656215118_18155853490453967_8478909705907588357_n.jpg";

export const metadata: Metadata = {
  title: "Collections | Femme Form Style",
  description:
    "Browse the Femme Form collections — Everyday Ease, the Co-ord Edit, and After Hours — refined silhouettes for every occasion.",
};

const collections = [
  {
    name: "Everyday Ease",
    desc: "Relaxed shirting and easy separates built for movement — soft cotton poplin, generous sleeves, and a fit that flatters every form. Made for the days that ask you to keep going.",
    image: essentialEase,
    reverse: false,
  },
  {
    name: "Co-ord Edit",
    desc: "Matching sets styled with intention. Bold print, considered tailoring, and a silhouette that moves as one — from studio to street without a second thought.",
    image: coordEdit,
    reverse: true,
  },
  {
    name: "After Hours",
    desc: "Statement dressing for evening. Fluid drape, sculpted shoulders, and finishes that catch the light — pieces designed to hold a room.",
    image: afterHours,
    reverse: false,
  },
];

export default function CollectionsPage() {
  return (
    <>
      <section className="container py-14 md:py-20">
        <p className="eyebrow mb-3">Curated for you</p>
        <h1 className="serif text-5xl md:text-7xl">Collections</h1>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#79695d]">
          Three edits, one philosophy — clothing that celebrates form. Every
          piece is designed with considered fabrics and a fit that flatters
          every body, from size 6 through 24.
        </p>
      </section>

      <div className="flex flex-col gap-16 pb-20 md:gap-24">
        {collections.map((c) => (
          <section key={c.name} className="container">
            <div
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                c.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Image
                src={c.image}
                alt={c.name}
                className="aspect-[4/5] w-full object-cover"
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div>
                <h2 className="serif text-3xl mb-4 sm:text-4xl">{c.name}</h2>
                <p className="max-w-md text-sm leading-7 text-[#79695d] mb-8">
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="btn"
                    href="https://www.instagram.com/femmeformstyle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire on Instagram
                  </a>
                  <Link className="btn" href="/size-guide">
                    Find my size
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-[#e9ded3] py-16">
        <div className="container flex flex-col items-center gap-5 text-center">
          <p className="eyebrow">Something for every form</p>
          <h2 className="serif text-3xl sm:text-4xl">Explore the full lookbook</h2>
          <Link className="btn" href="/lookbook">
            View lookbook
          </Link>
        </div>
      </section>
    </>
  );
}
