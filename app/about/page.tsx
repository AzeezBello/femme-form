import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import storyImage from "@/public/images/497450601_18310877986224521_8787273456432235706_n.jpg";
import detailImage from "@/public/images/656215118_18155853490453967_8478909705907588357_n.jpg";

export const metadata: Metadata = {
  title: "Our Story | Femme Form Style",
  description:
    "Femme Form is an invitation to dress with intention — refined silhouettes, considered fabrics, and a fit for every form.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container py-14 md:py-20">
        <p className="eyebrow mb-3">The Femme Form philosophy</p>
        <h1 className="serif text-5xl leading-tight md:text-7xl">
          Less, but <i>meaningful.</i>
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#79695d]">
          We believe style is found in the details: considered fabrics,
          flattering form, and pieces that live beyond a season.
        </p>
      </section>

      <section className="container grid items-center gap-10 pb-20 md:grid-cols-2 md:gap-12">
        <Image
          src={storyImage}
          alt="Detail of a Femme Form garment"
          className="w-full aspect-[4/3] object-cover"
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div>
          <p className="eyebrow mb-4">Where it started</p>
          <h2 className="serif text-3xl mb-6 sm:text-4xl">Dressing with intention</h2>
          <p className="max-w-md text-sm leading-7 text-[#79695d] mb-4">
            Femme Form Style began with a simple question: why should
            confident, well-made clothing stop at a single size range? Every
            piece we design is built from size 6 through 24, without
            compromising on cut, drape, or detail.
          </p>
          <p className="max-w-md text-sm leading-7 text-[#79695d]">
            From relaxed everyday shirting to fluid evening silhouettes, our
            pieces are made to move with you — considered, quietly luxurious,
            and built to last beyond a season.
          </p>
        </div>
      </section>

      <section className="bg-[#e9ded3] py-20">
        <div className="container grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-4">Form, first</p>
            <h2 className="serif text-3xl mb-6 sm:text-4xl">
              Cut for real bodies
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#79695d] mb-8">
              Fit is the foundation of everything we make. Each style is
              graded thoughtfully across our full size range and reviewed on
              real bodies before it ever reaches you.
            </p>
            <Link className="btn" href="/size-guide">
              View our size guide
            </Link>
          </div>
          <Image
            src={detailImage}
            alt="Femme Form evening silhouette"
            className="order-1 w-full aspect-[4/5] object-cover md:order-2"
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="container py-20 text-center">
        <p className="eyebrow mb-4">Come say hello</p>
        <h2 className="serif text-3xl mb-6 sm:text-4xl">
          We&apos;d love to dress you next.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="btn" href="/collections">
            Shop the collections
          </Link>
          <Link className="btn" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
