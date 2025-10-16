import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App;