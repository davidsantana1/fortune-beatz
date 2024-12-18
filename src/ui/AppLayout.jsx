import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "./Player";

function AppLayout() {
  return (
    <div className="h-screen w-screen grid-cols-[1fr_5fr] overflow-x-hidden lg:grid">
      <Sidebar />
      <main>
        <Container>
          <Outlet />
        </Container>
        <Player />
      </main>
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="min-h-screen bg-brand-975 p-10 md:p-14">{children}</div>
  );
}

export default AppLayout;
