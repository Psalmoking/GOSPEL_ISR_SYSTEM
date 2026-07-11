import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock3, Disc3, Music2, User2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { TrackCard } from "@/components/track-card";
import { getTrack, relatedTracks, type Track } from "@/lib/tracks";

export const Route = createFileRoute("/track/$id")({
  loader: ({ params }) => {
    const track = getTrack(Number(params.id));
    if (!track) throw notFound();
    const rel = relatedTracks(track);
    return { track, related: rel };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Track not found — Hallelu" }, { name: "robots", content: "noindex" }] };
    }
    const { track } = loaderData;
    const title = `${track.title} — ${track.author} | Hallelu`;
    const desc = `${track.title} by ${track.author} (${track.year}). Lyrics, album details, and related gospel songs.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: track.image },
        { name: "twitter:image", content: track.image },
      ],
    };
  },
  component: TrackDetailsPage,
  errorComponent: ({ error, reset }) => <TrackError message={error.message} reset={reset} />,
  notFoundComponent: TrackNotFound,
});

function TrackDetailsPage() {
  const { track, related } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero header */}
      <section className="relative overflow-hidden">
        <img
          src={track.image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30 blur-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-widest text-foreground/80 transition hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to search
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gold-gradient opacity-60 blur-2xl" />
              <img
                src={track.image}
                alt={`${track.title} cover art`}
                className="relative aspect-square w-full rounded-3xl border border-white/20 object-cover shadow-glow"
              />
            </div>

            <div className="flex flex-col justify-end">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground shadow-gold">
                {track.genre}
              </span>
              <h1 className="mt-4 font-display text-5xl font-black leading-[0.95] sm:text-6xl">
                {track.title}
              </h1>
              <p className="mt-3 text-lg text-foreground/85">
                by{" "}
                <Link
                  to="/"
                  search={{ q: track.author }}
                  className="text-gold-gradient hover:underline"
                >
                  {track.author}
                </Link>
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                <Meta icon={<Disc3 className="h-4 w-4" />} label="Album" value={track.album} />
                <Meta icon={<CalendarDays className="h-4 w-4" />} label="Released" value={track.release_date} />
                <Meta icon={<Clock3 className="h-4 w-4" />} label="Duration" value={track.duration} />
                <Meta icon={<User2 className="h-4 w-4" />} label="Year" value={String(track.year)} />
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <article className="rounded-3xl border border-white/10 bg-card-gradient p-8 shadow-glow sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary/60">
                <Music2 className="h-5 w-5 text-primary" />
              </span>
              <h2 className="font-display text-2xl font-bold">Full Lyrics</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Read every verse the way it was sung — line breaks preserved.
            </p>
            <div className="mt-6 max-h-none whitespace-pre-wrap font-display text-lg leading-relaxed text-foreground/95">
              {track.full_lyrics}
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-card-gradient p-6">
              <h3 className="font-display text-lg font-bold">Signature line</h3>
              <p className="mt-3 text-sm italic text-muted-foreground">“{track.lyrics_snippet}”</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-card-gradient p-6">
              <h3 className="font-display text-lg font-bold">Explore</h3>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <Link
                  to="/"
                  search={{ genre: track.genre }}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary transition hover:bg-primary/20"
                >
                  More {track.genre}
                </Link>
                <Link
                  to="/"
                  search={{ q: track.author }}
                  className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-accent-foreground transition hover:bg-accent/20"
                >
                  More by {track.author}
                </Link>
                <Link
                  to="/genres"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-foreground/80 transition hover:border-primary/40 hover:text-primary"
                >
                  All genres
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                You may also love
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Hand-picked from the same genre and artists.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((t: Track) => (
              <TrackCard key={t.id} track={t} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </div>
      <div className="mt-1 truncate text-sm font-semibold text-foreground">{value}</div>
    </div>
  );
}

function TrackNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <h1 className="font-display text-5xl font-black text-gold-gradient">404</h1>
        <h2 className="mt-3 font-display text-2xl font-bold">Song not in the archive</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We couldn't locate that record. Try searching by title or lyric instead.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold"
        >
          Back to search
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function TrackError({ message, reset }: { message: string; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold">Something went off-key</h2>
        <p className="mt-2 text-sm text-muted-foreground">{message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold"
        >
          Try again
        </button>
      </div>
      <SiteFooter />
    </div>
  );
}