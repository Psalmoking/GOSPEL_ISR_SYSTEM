import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Database, Search, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hallelu — Gospel Music Archive" },
      { name: "description", content: "How Hallelu indexes and retrieves gospel music records — a modern ISR interface built for worship." },
      { property: "og:title", content: "About Hallelu — Gospel Music Archive" },
      { property: "og:description", content: "A modern Information Storage & Retrieval interface for gospel music." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          About the archive
        </span>
        <h1 className="mt-5 font-display text-5xl font-black leading-[1] sm:text-6xl">
          Praise, <span className="text-gold-gradient">indexed</span>.
        </h1>
        <p className="mt-5 text-lg text-foreground/85">
          Hallelu is an Information Storage & Retrieval interface for gospel music. Every
          record is stored in a lightweight SQLite database and served through a
          type-safe React front-end — so you can search a lyric, an artist, or an entire
          genre in a single breath.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Feature icon={<Search className="h-5 w-5" />} title="Full-text search" desc="Query titles, authors, and lyrics simultaneously." />
          <Feature icon={<Database className="h-5 w-5" />} title="Structured records" desc="Album, year, duration, and genre for every song." />
          <Feature icon={<Sparkles className="h-5 w-5" />} title="Related tracks" desc="Discover music by the same artist or genre." />
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-card-gradient p-8">
          <h2 className="font-display text-2xl font-bold">Start listening</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Head back to the search page or browse the genre index to find your next song.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/" className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold">
              Open search
            </Link>
            <Link to="/genres" className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground/90 hover:border-primary/40 hover:text-primary">
              Browse genres
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-card-gradient p-5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-primary-foreground shadow-gold">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}