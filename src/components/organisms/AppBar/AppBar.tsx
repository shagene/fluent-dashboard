import { CommandBar, ICommandBarItemProps, useTheme } from "@fluentui/react";
import ThemeToggle from "../../atoms/ThemeToggle";

interface AppBarProps {
  onToggleTheme: () => void;
}

const AppBar = ({ onToggleTheme }: AppBarProps) => {
  const theme = useTheme();

  const commandBarItems: ICommandBarItemProps[] = [];

  const commandBarFarItems = [
    {
      key: "toggleTheme",
      onRender: () => <ThemeToggle onToggle={onToggleTheme} />,
    },
  ];

  return (
    <CommandBar
      items={commandBarItems}
      farItems={commandBarFarItems}
      ariaLabel="Use left and right arrow keys to navigate between commands"
      styles={{
        root: {
          backgroundColor: theme.palette.neutralLight,
          height: "var(--appBarHeight)",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    />
  );
};

export default AppBar;
