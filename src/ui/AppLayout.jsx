import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "../features/audio-player/Player";
import TopMessage from "./TopMessage";
import { useTranslation } from "react-i18next";

function AppLayout() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      <TopMessage>{t("demoTitle")}</TopMessage>

      <div className="h-screen w-screen grid-cols-[1fr_5fr] overflow-y-scroll lg:grid">
        <Sidebar />
        <main>
          <Container>
            <Outlet />
          </Container>
          <Player />
        </main>
      </div>
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="min-h-screen bg-brand-950 p-6 md:p-14 lg:mt-0">
      {children}
    </div>
  );
}

export default AppLayout;
