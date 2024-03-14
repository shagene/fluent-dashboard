import { IconButton, useTheme } from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
interface ThemeToggleProps {
  onToggle: () => void;
}

initializeIcons();

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  const theme = useTheme();
  // Determine the icon name based on the theme
  const iconName =
    theme.palette.themePrimary === "#0078d4" ? "Sunny" : "ClearNight";

  // Define the styles for the IconButton
  const buttonStyles = {
    icon: {
      color: theme.palette.themeDarkAlt, // Adjust this color as needed for visibility
      fontSize: 20, // Example size, adjust as needed
    },
    root: {
      // Additional styles for the button itself if needed
    },
    rootHovered: {
      backgroundColor: theme.palette.neutralLighter, // Adjust hover background as needed
    },
  };

  return (
    <IconButton
      iconProps={{ iconName }}
      title="Toggle theme"
      ariaLabel="Toggle theme"
      onClick={onToggle}
      styles={buttonStyles}
    />
  );
};

export default ThemeToggle;
