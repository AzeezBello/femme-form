import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/661158149_18384031228095280_5879843721321602774_n.jpg";
import essentialEase from "@/public/images/496482092_18310780984224521_7523538861242604782_n.jpg";
import coordEdit from "@/public/images/670484518_18581754865045612_3053517344034302838_n.jpg";
import afterHours from "@/public/images/656215118_18155853490453967_8478909705907588357_n.jpg";
import storyImage from "@/public/images/497450601_18310877986224521_8787273456432235706_n.jpg";
import look1 from "@/public/images/496622233_18310878001224521_7746391967842179370_n.jpg";
import look2 from "@/public/images/496713838_18310878004224521_8345152502910605864_n.jpg";
import look3 from "@/public/images/496758246_18310877968224521_2943273859881815921_n.jpg";
import look4 from "@/public/images/496822935_18310780963224521_6019494413750083983_n.jpg";

const collections = [
  {
    name: "Everyday Ease",
    desc: "Relaxed staples for effortless days",
    image: essentialEase,
  },
  {
    name: "Co-ord Edit",
    desc: "Matching sets, styled with intention",
    image: coordEdit,
  },
  {
    name: "After Hours",
    desc: "Statement pieces for evening",
    image: afterHours,
  },
];

const preview = [look1, look2, look3, look4];

export default function Home() {
  return (
    <>
      <section id="top" className="container grid items-center gap-10 py-8 md:grid-cols-2 md:gap-8 md:py-16">
        <div>
          <p className="eyebrow mb-5">The new expression of femininity</p>
          <h1 className="serif text-5xl leading-[.95] mb-7 sm:text-6xl md:text-8xl">
            Form meets
            <br />
            <i>elegance.</i>
          </h1>
          <p className="max-w-md text-sm leading-7 text-[#79695d] mb-8">
            Thoughtfully curated clothing for the woman who finds confidence in
            simplicity, softness, and impeccable form.
          </p>
          <Link className="btn" href="/collections">
            Explore collection
          </Link>
        </div>
        <div className="relative">
          <Image
            src={heroImage}
            alt="Femme Form model wearing a black one-shoulder dress"
            className="w-full aspect-[4/5] object-cover"
            placeholder="blur"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute bottom-4 left-4 bg-[#f8f4ef]/90 px-4 py-3">
            <p className="eyebrow">Femme Form / 001</p>
          </div>
        </div>
      </section>

      <section id="collections" className="container py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-3">Curated for you</p>
            <h2 className="serif text-4xl">Featured collections</h2>
          </div>
          <span className="hidden text-xs text-[#8b796b] sm:inline">01 — 03</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {collections.map((c) => (
            <Link key={c.name} href="/collections" className="group block">
              <div className="mb-4 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                  placeholder="blur"
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="serif text-2xl mb-1">{c.name}</h3>
              <p className="text-sm text-[#8b796b]">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[#e9ded3] py-20">
        <div className="container grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <Image
            src={storyImage}
            alt="Detail of a Femme Form garment"
            className="w-full aspect-[4/3] object-cover"
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div>
            <p className="eyebrow mb-4">The Femme Form philosophy</p>
            <h2 className="serif text-4xl leading-tight mb-6 sm:text-5xl">
              Less, but
              <br />
              <i>meaningful.</i>
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#79695d] mb-8">
              We believe style is found in the details: considered fabrics,
              flattering form, and pieces that live beyond a season. Femme
              Form Style is an invitation to dress with intention.
            </p>
            <Link className="btn" href="/about">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section id="lookbook" className="container py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-3">Visual journal</p>
            <h2 className="serif text-4xl">The lookbook</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {preview.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Lookbook preview ${i + 1}`}
              className="aspect-[3/4] w-full object-cover"
              placeholder="blur"
              sizes="(min-width: 768px) 25vw, 50vw"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link className="btn" href="/lookbook">
            View full lookbook
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-[#302923] py-20 text-[#f8f4ef]">
        <div className="container text-center">
          <p className="eyebrow mb-4">Stay in the know</p>
          <h2 className="serif text-4xl mb-5 sm:text-5xl">A softer way to style.</h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-[#cdbfb2]">
            Follow our latest collections and stories on Instagram, or reach
            out — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="btn btn-light"
              href="https://www.instagram.com/femmeformstyle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow @femmeformstyle
            </a>
            <Link className="btn btn-light" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
