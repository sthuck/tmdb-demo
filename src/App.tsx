import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { TopBar } from "./components/TopBar/TopBar";
import { ReactQueryDevtools } from "react-query/devtools";
import { SoryByProvider } from "./hooks/useSoryBy";
import { MovieView } from "./Pages/MovieView";

const queryClient = new QueryClient();
const isDev = import.meta.env.DEV;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SoryByProvider>
        <TopBar />
        <MovieView />
      </SoryByProvider>
      {isDev && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
