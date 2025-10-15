import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/Homepage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Homepage/>
    </QueryClientProvider>
    </>
  )
}

export default App;