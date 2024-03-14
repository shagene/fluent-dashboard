import { ReactNode } from "react";
import Footer from "../organisms/Footer/Footer";
import NavRail from "../organisms/NavRail/NavRail";
import { useTheme } from "@fluentui/react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
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
        <main
          style={{ flexGrow: 1, backgroundColor: theme.palette.neutralLighter }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
