import { ReactNode } from "react";
import Footer from "../organisms/Footer/Footer";
import NavRail from "../organisms/NavRail/NavRail";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - var(--appBarHeight))`,
      }}
    >
      <div style={{ display: "flex", flexGrow: 1 }}>
        <NavRail />
        <main style={{ flexGrow: 1 }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
