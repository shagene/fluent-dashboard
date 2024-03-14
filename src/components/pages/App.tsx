import "./App.css";
import { lightTheme, darkTheme } from "../../themes/themes";
import MainLayout from "../templates/MainLayout";
import { ThemeProvider } from "@fluentui/react";
import { useEffect, useState } from "react";
import AppBar from "../organisms/AppBar/AppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Holders from "./Holders/Holders";
import Reporting from "./Reporting/Reporting";
import WorkRequest from "./WorkRequest/WorkRequest";
import Tools from "./Tools/Tools";
import FileShare from "./FileShare/FileShare";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addListener(handleChange); // Use addListener for broader support

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider applyTo="body" theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <AppBar onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/holders" element={<Holders />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/work-request" element={<WorkRequest />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/fileshare" element={<FileShare />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
