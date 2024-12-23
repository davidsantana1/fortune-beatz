import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Beats = lazy(() => import("./pages/Beats"));
const Sales = lazy(() => import("./pages/Sales"));
const DynamicTitle = lazy(() => import("./ui/DynamicTitle"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Licenses = lazy(() => import("./pages/Licenses"));
const SpinnerFullPage = lazy(() => import("./ui/SpinnerFullPage"));

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <AudioPlayerProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <DynamicTitle />
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate replace to="dashboard" />}
                ></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="beats" element={<Beats />}></Route>
                <Route path="sales" element={<Sales />}></Route>
                <Route path="licenses" element={<Licenses />}></Route>
              </Route>
              <Route path="login" element={<Login />}></Route>
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
    </Suspense>
  );
}

export default App;
