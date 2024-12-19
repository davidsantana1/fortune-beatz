import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Beats from "./pages/Beats";
import Sales from "./pages/Sales";
import DynamicTitle from "./ui/DynamicTitle";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <AudioPlayerProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <DynamicTitle />
          <Routes>
            <Route element={<AppLayout />}>
              <Route
                index
                element={<Navigate replace to="dashboard" />}
              ></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="beats" element={<Beats />}></Route>
              <Route path="sales" element={<Sales />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#eefaff",
              color: "#041119",
            },
          }}
        />
      </QueryClientProvider>
    </AudioPlayerProvider>
  );
}

export default App;
