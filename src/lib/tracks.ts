export interface Track {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  image: string;
  duration: string;
  album: string;
  release_date: string;
  lyrics_snippet: string;
  full_lyrics: string;
}

// Mock dataset — stands in for the SQLite-backed /api/search endpoint.
export const TRACKS: Track[] = [
  {
    id: 1,
    title: "Goodness of God",
    author: "CeCe Winans",
    year: 2021,
    genre: "Contemporary Gospel",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop",
    duration: "4:35",
    album: "Believe For It",
    release_date: "2021-03-12",
    lyrics_snippet: "All my life You have been faithful, all my life You have been so, so good...",
    full_lyrics: "I love You, Lord\nOh, Your mercy never fails me\nAll my days, I've been held in Your hands\nFrom the moment that I wake up\nUntil I lay my head\nI will sing of the goodness of God\n\nAll my life You have been faithful\nAll my life You have been so, so good\nWith every breath that I am able\nI will sing of the goodness of God",
  },
  {
    id: 2,
    title: "Oh Happy Day",
    author: "Edwin Hawkins Singers",
    year: 1969,
    genre: "Traditional Gospel",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&auto=format&fit=crop",
    duration: "5:09",
    album: "Let Us Go Into the House of the Lord",
    release_date: "1969-04-01",
    lyrics_snippet: "Oh happy day, when Jesus washed my sins away...",
    full_lyrics: "Oh happy day (oh happy day)\nOh happy day (oh happy day)\nWhen Jesus washed (when Jesus washed)\nWhen Jesus washed (when Jesus washed)\nWhen Jesus washed (when Jesus washed)\nHe washed my sins away (oh happy day)\nOh happy day (oh happy day)\n\nHe taught me how to watch, fight and pray\nFight and pray\nAnd live rejoicing every, every day",
  },
  {
    id: 3,
    title: "Way Maker",
    author: "Sinach",
    year: 2015,
    genre: "Afro Gospel",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop",
    duration: "6:12",
    album: "Way Maker",
    release_date: "2015-11-30",
    lyrics_snippet: "You are here, moving in our midst, I worship You, I worship You...",
    full_lyrics: "You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You\n\nWay Maker, Miracle Worker, Promise Keeper\nLight in the darkness, my God, that is who You are\nWay Maker, Miracle Worker, Promise Keeper\nLight in the darkness, my God, that is who You are",
  },
  {
    id: 4,
    title: "Amazing Grace",
    author: "Mahalia Jackson",
    year: 1958,
    genre: "Traditional Gospel",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&auto=format&fit=crop",
    duration: "3:44",
    album: "Great Gettin' Up Mornin'",
    release_date: "1958-06-15",
    lyrics_snippet: "Amazing grace, how sweet the sound, that saved a wretch like me...",
    full_lyrics: "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now am found\nWas blind, but now I see\n\n'Twas grace that taught my heart to fear\nAnd grace my fears relieved\nHow precious did that grace appear\nThe hour I first believed",
  },
  {
    id: 5,
    title: "Break Every Chain",
    author: "Tasha Cobbs Leonard",
    year: 2013,
    genre: "Contemporary Gospel",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&auto=format&fit=crop",
    duration: "7:20",
    album: "Grace",
    release_date: "2013-02-05",
    lyrics_snippet: "There is power in the name of Jesus to break every chain...",
    full_lyrics: "There is power in the name of Jesus\nThere is power in the name of Jesus\nThere is power in the name of Jesus\nTo break every chain, break every chain, break every chain\n\nAll sufficient sacrifice\nSo freely given, such a price\nBought our redemption, Heaven's gates swing wide",
  },
  {
    id: 6,
    title: "Total Praise",
    author: "Richard Smallwood",
    year: 1996,
    genre: "Choir Gospel",
    image: "https://images.unsplash.com/photo-1520637736862-4d197d17c55a?w=800&auto=format&fit=crop",
    duration: "5:48",
    album: "Adoration: Live in Atlanta",
    release_date: "1996-08-20",
    lyrics_snippet: "Lord, I will lift mine eyes to the hills, knowing my help is coming from You...",
    full_lyrics: "Lord, I will lift mine eyes to the hills\nKnowing my help is coming from You\nYour peace You give me in time of the storm\n\nYou are the source of my strength\nYou are the strength of my life\nI lift my hands in total praise to You\n\nAmen, amen, amen, amen, amen, amen",
  },
  {
    id: 7,
    title: "Reckless Love",
    author: "Cory Asbury",
    year: 2017,
    genre: "Worship",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop",
    duration: "5:36",
    album: "Reckless Love",
    release_date: "2017-10-27",
    lyrics_snippet: "Oh, the overwhelming, never-ending, reckless love of God...",
    full_lyrics: "Before I spoke a word, You were singing over me\nYou have been so, so good to me\nBefore I took a breath, You breathed Your life in me\nYou have been so, so kind to me\n\nOh, the overwhelming, never-ending, reckless love of God\nOh, it chases me down, fights 'til I'm found, leaves the ninety-nine",
  },
  {
    id: 8,
    title: "Take Me to the King",
    author: "Tamela Mann",
    year: 2012,
    genre: "Contemporary Gospel",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop",
    duration: "5:22",
    album: "Best Days",
    release_date: "2012-06-05",
    lyrics_snippet: "Take me to the King, I don't have much to bring, my heart's torn in pieces...",
    full_lyrics: "Truth is I'm tired\nOptions are few\nI'm trying to pray\nBut where are You?\n\nTake me to the King\nI don't have much to bring\nMy heart's torn in pieces\nIt's my offering",
  },
  {
    id: 9,
    title: "How Great Is Our God",
    author: "Chris Tomlin",
    year: 2004,
    genre: "Worship",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&auto=format&fit=crop",
    duration: "4:58",
    album: "Arriving",
    release_date: "2004-09-21",
    lyrics_snippet: "How great is our God, sing with me, how great is our God...",
    full_lyrics: "The splendor of a King, clothed in majesty\nLet all the earth rejoice, all the earth rejoice\nHe wraps Himself in light, and darkness tries to hide\nAnd trembles at His voice, trembles at His voice\n\nHow great is our God, sing with me\nHow great is our God, and all will see\nHow great, how great is our God",
  },
  {
    id: 10,
    title: "I Smile",
    author: "Kirk Franklin",
    year: 2011,
    genre: "Urban Gospel",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop",
    duration: "5:14",
    album: "Hello Fear",
    release_date: "2011-03-22",
    lyrics_snippet: "I smile even though I hurt, see I smile, I know God is working...",
    full_lyrics: "Today's a new day, but there is no sunshine\nNothing but clouds, and it's dark in my heart\nAnd it feels like a cold night\n\nI smile, even though I hurt, see I smile\nI know God is working, so I smile\nEven though I've been here for a while\nI smile, smile, it's so hard to look up when you've been down",
  },
  {
    id: 11,
    title: "Great Are You Lord",
    author: "All Sons & Daughters",
    year: 2013,
    genre: "Worship",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop",
    duration: "5:24",
    album: "Season One",
    release_date: "2013-04-16",
    lyrics_snippet: "It's Your breath in our lungs, so we pour out our praise...",
    full_lyrics: "You give life, You are love\nYou bring light to the darkness\nYou give hope, You restore\nEvery heart that is broken\n\nGreat are You, Lord\nIt's Your breath in our lungs\nSo we pour out our praise\nWe pour out our praise\nIt's Your breath in our lungs\nSo we pour out our praise to You only",
  },
  {
    id: 12,
    title: "Nobody Greater",
    author: "VaShawn Mitchell",
    year: 2010,
    genre: "Urban Gospel",
    image: "https://images.unsplash.com/photo-1471565661762-b9dfae862dbe?w=800&auto=format&fit=crop",
    duration: "8:41",
    album: "Triumphant",
    release_date: "2010-08-31",
    lyrics_snippet: "I've searched all over, couldn't find nobody greater than You...",
    full_lyrics: "I've searched all over\nCouldn't find nobody\nI've searched high and low\nStill couldn't find nobody\n\nNobody greater, nobody greater\nNobody greater than You\nSearched all over, couldn't find nobody\nNo, nobody greater than You",
  },
];

export const GENRES = Array.from(new Set(TRACKS.map((t) => t.genre))).sort();

export interface SearchParams {
  q?: string;
  genre?: string;
}

export function searchTracks({ q, genre }: SearchParams): Track[] {
  const needle = q?.trim().toLowerCase();
  return TRACKS.filter((t) => {
    if (genre && genre !== "all" && t.genre !== genre) return false;
    if (!needle) return true;
    return (
      t.title.toLowerCase().includes(needle) ||
      t.author.toLowerCase().includes(needle) ||
      t.album.toLowerCase().includes(needle) ||
      t.lyrics_snippet.toLowerCase().includes(needle) ||
      t.full_lyrics.toLowerCase().includes(needle)
    );
  });
}

export function getTrack(id: number): Track | undefined {
  return TRACKS.find((t) => t.id === id);
}

export function relatedTracks(track: Track, limit = 4): Track[] {
  return TRACKS.filter((t) => t.id !== track.id)
    .map((t) => ({
      t,
      score:
        (t.genre === track.genre ? 3 : 0) +
        (t.author === track.author ? 5 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.t);
}

// Simulates a network call to /api/search — swap for real fetch() when
// the SQLite backend endpoint is available.
export async function fetchSearch(params: SearchParams): Promise<Track[]> {
  await new Promise((r) => setTimeout(r, 250));
  return searchTracks(params);
}