const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "36e0531d928532e054fc17b17da8d14e";

export const trendingMovies = async () => {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("Failed to fetch trending movies")
        return res.json();
}

export const latestMovies = async () => {
    const res = await fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}`)
    if (!res.ok) throw new Error ("Failed to fetch latest Movies")
        return res.json();
}