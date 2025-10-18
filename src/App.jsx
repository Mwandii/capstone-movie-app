import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import GenrePage from "./pages/GenrePage";
import GenreDetails from "./pages/GenreDetails";
import SearchResults from "./pages/SearchResults";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
            <Route path="/genrespage" element={<GenrePage />} />
            <Route path="/genrespage/:id" element={<GenreDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
