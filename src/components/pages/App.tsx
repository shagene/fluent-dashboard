import "./App.css";
import { lightTheme, darkTheme } from "../../themes/themes";
import MainLayout from "../templates/MainLayout";
import { ThemeProvider } from "@fluentui/react";
import { useEffect, useState } from "react";
import AppBar from "../organisms/AppBar/AppBar";

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
      <AppBar onToggleTheme={toggleTheme} />
      <MainLayout>
        {/* Your page content goes here */}
        Page Content
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
