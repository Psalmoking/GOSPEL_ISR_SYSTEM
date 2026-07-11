import { Link } from "@tanstack/react-router";
import { Music4, Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gold-gradient shadow-gold">
            <Music4 className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Hallelu<span className="text-gold-gradient">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Gospel Archive
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-full px-4 py-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground [&.active]:bg-white/10 [&.active]:text-foreground"
          >
            Search
          </Link>
          <Link
            to="/genres"
            className="rounded-full px-4 py-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground [&.active]:bg-white/10 [&.active]:text-foreground"
          >
            Genres
          </Link>
          <Link
            to="/about"
            className="hidden rounded-full px-4 py-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground sm:inline-flex [&.active]:bg-white/10 [&.active]:text-foreground"
          >
            About
          </Link>
          <span className="ml-2 hidden items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted-foreground md:inline-flex">
            <Sparkles className="h-3 w-3 text-primary" />
            12 tracks indexed
          </span>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Hallelu. Songs of praise, indexed with love.</p>
        <p className="text-xs uppercase tracking-[0.25em]">Information Storage & Retrieval</p>
      </div>
    </footer>
  );
}