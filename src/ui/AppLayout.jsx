import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="h-screen w-screen grid-cols-[1fr_5fr] overflow-x-hidden lg:grid">
      <Sidebar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="bg-brand-975 min-h-screen p-12 md:p-14">{children}</div>
  );
}

export default AppLayout;
