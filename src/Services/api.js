const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "36e0531d928532e054fc17b17da8d14e";

export const trendingMovies = async () => {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("Failed to fetch trending movies")
        return res.json();
}

export const latestMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
    if (!res.ok) throw new Error ("Failed to fetch latest Movies")
        return res.json();
}

export const popularTvshows = async () => {
    const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("Failed to fetch latest tv-shows")
        return res.json();
}

export const comingSoon = async () => {
    const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("Failed to fetch coming soon movies")
        return res.json();
}

export const fetchMovieDetails = async ({ queryKey }) => {
  const [, id] = queryKey;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return res.json();
};

export const fetchMovieGenres = async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
  if (!res.ok) throw new Error("Failed to fetch movie genres")
    return res.json();
}