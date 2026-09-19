import { Instagram } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/femmeformstyle/",
    Icon: Instagram,
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="opacity-80 transition hover:opacity-100"
        >
          <Icon size={18} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
