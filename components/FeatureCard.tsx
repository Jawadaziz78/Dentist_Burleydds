import Link from "next/link";

type FeatureCardProps = {
  title: string;
  body: string;
  cta: string;
  href?: string;
};

export default function FeatureCard({
  title,
  body,
  cta,
  href = "#",
}: FeatureCardProps) {
  return (
    <article className="card">
      <h3 className="font-serif text-2xl font-semibold text-[color:var(--text-dark)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-dark)]/80">
        {body}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-gold)] transition hover:text-[color:var(--text-dark)]"
      >
        {cta}
        <ArrowIcon />
      </Link>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
