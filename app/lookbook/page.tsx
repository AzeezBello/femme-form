import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { lookbookImages } from "@/lib/lookbook-images";

export const metadata: Metadata = {
  title: "Lookbook | Femme Form Style",
  description:
    "The Femme Form visual journal — reels and photography from our latest collections.",
};

const reels = [
  "/videos/AQP5ixBz6v-AevLrOTdKk8aRWTcQUFJWer79Ypux6NEtWRDojvg7BwzG-yNs6vF54q0S_buqBJLaW83P8Fk4cGjmrWR7PoRDApUBmG0.mp4",
  "/images/AQOLNhOYmWKYMATGDwiBz2O4NyguETqDO-HSKpv5vxjPE3-KrK4djgeOaHXPdlce8gD90lfVkX05OQl7WRQUvhPBcSCsaw9DTwky7PI.mp4",
];

export default function LookbookPage() {
  return (
    <>
      <section className="container py-14 md:py-20">
        <p className="eyebrow mb-3">Visual journal</p>
        <h1 className="serif text-5xl md:text-7xl">The Lookbook</h1>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#79695d]">
          Reels and photography from our latest shoots — the Femme Form
          world, in motion and in stills.
        </p>
      </section>

      <section className="container pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {reels.map((src) => (
            <video
              key={src}
              className="aspect-[9/16] w-full max-h-[560px] bg-black object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
            >
              <source src={src} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <Gallery images={lookbookImages} />
      </section>
    </>
  );
}
