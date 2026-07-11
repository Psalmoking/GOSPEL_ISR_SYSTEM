import { Link } from "@tanstack/react-router";
import type { Track } from "@/lib/tracks";
import { Clock3, Disc3 } from "lucide-react";

export function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      to="/track/$id"
      params={{ id: String(track.id) }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card-gradient shadow-glow transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={track.image}
          alt={`${track.title} by ${track.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow-gold">
          {track.genre}
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-[11px] text-foreground backdrop-blur">
          <Clock3 className="h-3 w-3" />
          {track.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-bold leading-tight text-foreground group-hover:text-gold-gradient">
          {track.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          by <span className="text-foreground">{track.author}</span> · {track.year}
        </p>
        <p className="mt-2 line-clamp-3 text-sm italic text-muted-foreground/90">
          “{track.lyrics_snippet}”
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Disc3 className="h-3.5 w-3.5 text-accent" />
          <span className="truncate">{track.album}</span>
        </div>
      </div>
    </Link>
  );
}