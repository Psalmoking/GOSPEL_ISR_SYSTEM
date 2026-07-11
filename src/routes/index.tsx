import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, Sparkles, Music2, X } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { TrackCard } from "@/components/track-card";
import { fetchSearch, GENRES, type Track } from "@/lib/tracks";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : undefined,
    genre: typeof search.genre === "string" ? search.genre : undefined,
  }),
  component: HomePage,
});

function HomePage() {
  const initial = Route.useSearch();
  const [query, setQuery] = useState(initial.q ?? "");
  const [genre, setGenre] = useState<string>(initial.genre ?? "all");
  const [results, setResults] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchSearch({ q: query, genre }).then((data) => {
      if (!cancelled) {
        setResults(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [query, genre]);

  const suggestions = useMemo(
    () => ["Amazing Grace", "Sinach", "chains", "Kirk Franklin", "praise"],
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Information Storage & Retrieval
          </span>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] sm:text-7xl">
            The <span className="text-gold-gradient">Gospel</span>
            <br />
            you were searching for.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg">
            Search a vibrant archive of hymns, worship anthems, and choir favorites — by
            title, artist, or a lyric you can't stop humming.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-white/15 bg-background/60 p-2 shadow-glow backdrop-blur-xl sm:grid-cols-[minmax(0,1fr)_auto_auto]">
              <div className="flex min-w-0 items-center gap-3 pl-3">
                <Search className="h-5 w-5 shrink-0 text-primary" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search titles, artists, or lyrics…"
                  className="min-w-0 flex-1 bg-transparent py-3 text-base text-foreground outline-none placeholder:text-muted-foreground"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="rounded-full p-1 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="hidden items-center gap-2 border-l border-white/10 pl-2 sm:flex">
                <SlidersHorizontal className="h-4 w-4 text-accent" />
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="rounded-xl bg-transparent py-2 pr-2 text-sm text-foreground outline-none"
                >
                  <option value="all" className="bg-background">
                    All genres
                  </option>
                  {GENRES.map((g) => (
                    <option key={g} value={g} className="bg-background">
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <button className="rounded-xl bg-gold-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110">
                Search
              </button>
            </div>

            {/* mobile genre */}
            <div className="mt-3 flex items-center gap-2 sm:hidden">
              <SlidersHorizontal className="h-4 w-4 text-accent" />
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-background/60 px-3 py-2 text-sm text-foreground outline-none"
              >
                <option value="all">All genres</option>
                {GENRES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-foreground/70">
              <span className="uppercase tracking-widest">Try:</span>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-primary/40 hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6">
        <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {query ? (
                <>
                  Results for <span className="text-gold-gradient">“{query}”</span>
                </>
              ) : genre !== "all" ? (
                <>
                  Songs in <span className="text-gold-gradient">{genre}</span>
                </>
              ) : (
                <>Every song in the archive</>
              )}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {loading ? "Retrieving records…" : `${results.length} record${results.length === 1 ? "" : "s"} found`}
            </p>
          </div>
          <Link
            to="/genres"
            className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-foreground/80 transition hover:border-primary/40 hover:text-primary"
          >
            Browse genres
          </Link>
        </div>

        {loading ? (
          <LoadingGrid />
        ) : results.length === 0 ? (
          <EmptyState onReset={() => { setQuery(""); setGenre("all"); }} />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((t) => (
              <TrackCard key={t.id} track={t} />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-[380px] animate-pulse rounded-3xl border border-white/10 bg-card-gradient"
        />
      ))}
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-card-gradient p-10 text-center shadow-glow">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient shadow-gold">
        <Music2 className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold">No songs matched</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Try a different lyric or clear your filters to see the whole archive.
      </p>
      <button
        onClick={onReset}
        className="mt-6 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold"
      >
        Reset search
      </button>
    </div>
  );
}
