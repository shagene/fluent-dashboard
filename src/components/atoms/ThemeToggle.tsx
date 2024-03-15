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
    theme.palette.themePrimary === "#0078d4" ? "Settings" : "Settings";

  // Define the styles for the IconButton to match the font color
  const buttonStyles = {
    icon: {
      color: theme.palette.neutralPrimary, // Use bodyText color for the icon to match the font color
      fontSize: 20, // Example size, adjust as needed
    },
    root: {
      // Additional styles for the button itself if needed
    },
    rootHovered: {
      backgroundColor: "transparent", // Adjust hover background as needed
    },
  };

  return (
    <div
      style={{
        height: "2.5rem",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        marginLeft: "1.5rem",
      }}
    >
      <IconButton
        iconProps={{ iconName }}
        title="Toggle theme"
        ariaLabel="Toggle theme"
        onClick={onToggle}
        styles={buttonStyles}
      />
    </div>
  );
};

export default ThemeToggle;
