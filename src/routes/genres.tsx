import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { GENRES, TRACKS } from "@/lib/tracks";

export const Route = createFileRoute("/genres")({
  head: () => ({
    meta: [
      { title: "Browse Genres — Hallelu Gospel Archive" },
      { name: "description", content: "Explore the gospel archive by genre — from choir classics to Afro gospel and modern worship." },
      { property: "og:title", content: "Browse Genres — Hallelu Gospel Archive" },
      { property: "og:description", content: "Explore the gospel archive by genre." },
    ],
  }),
  component: GenresPage,
});

const PALETTE = [
  "from-[oklch(0.55_0.22_295)] to-[oklch(0.72_0.2_55)]",
  "from-[oklch(0.65_0.22_250)] to-[oklch(0.55_0.22_295)]",
  "from-[oklch(0.7_0.2_15)] to-[oklch(0.82_0.17_85)]",
  "from-[oklch(0.72_0.17_160)] to-[oklch(0.65_0.22_250)]",
  "from-[oklch(0.82_0.17_85)] to-[oklch(0.7_0.2_15)]",
  "from-[oklch(0.55_0.22_295)] to-[oklch(0.72_0.17_160)]",
];

function GenresPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] backdrop-blur">
            Genre Index
          </span>
          <h1 className="mt-6 font-display text-5xl font-black sm:text-6xl">
            Every <span className="text-gold-gradient">flavor</span> of praise.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-foreground/80">
            Traditional choirs, Afro gospel, modern worship — jump straight into the
            corner of the archive that speaks to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GENRES.map((genre, i) => {
            const count = TRACKS.filter((t) => t.genre === genre).length;
            const sample = TRACKS.find((t) => t.genre === genre);
            return (
              <Link
                key={genre}
                to="/"
                search={{ genre }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${PALETTE[i % PALETTE.length]} p-6 shadow-glow transition hover:-translate-y-1`}
              >
                {sample && (
                  <img
                    src={sample.image}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay transition group-hover:opacity-30"
                  />
                )}
                <div className="relative">
                  <p className="text-xs uppercase tracking-widest text-white/70">Genre</p>
                  <h3 className="mt-2 font-display text-3xl font-black text-white">{genre}</h3>
                  <p className="mt-3 text-sm text-white/85">
                    {count} song{count === 1 ? "" : "s"} in the archive
                  </p>
                  <span className="mt-6 inline-flex rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}