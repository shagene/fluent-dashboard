import {
  CommandBar,
  ICommandBarItemProps,
  Image,
  Persona,
  PersonaSize,
  useTheme,
} from "@fluentui/react";
import ThemeToggle from "../../atoms/ThemeToggle";
import AppBarCompanySelect from "../../molecules/AppBarCompanySelect";
import React from "react";
import AppBarSearchBox from "../../molecules/AppBarSearchBox";

interface AppBarProps {
  onToggleTheme: () => void;
  onLogoChange: (event: React.FormEvent<HTMLDivElement>, item?: any) => void;
  logoOptions: { key: string; text: string }[];
  currentLogo: string;
}

const AppBar = ({ onToggleTheme }: AppBarProps) => {
  const theme = useTheme();
  const currentCompany = "600 x 400";
  const commandBarItems: ICommandBarItemProps[] = [
    {
      key: "companyLogo",
      onRender: () => (
        <Image
          height={"2.5rem"}
          width={"9.375rem"}
          src={"https://placehold.co/150x40"}
        />
      ),
    },
    {
      key: "currentCompany",
      onRender: () => (
        <div style={{ marginLeft: "6rem" }}>
          <Image
            height={"2.5rem"}
            width={"9rem"}
            src={"https://placehold.co/144x40"}
          />
        </div>
      ),
    },
    {
      key: "selectLogo",
      onRender: () => (
        <div style={{ marginLeft: ".75rem" }}>
          <AppBarCompanySelect
            placeholder={currentCompany}
            options={[]}
            onChange={() => {}}
          />
        </div>
      ),
    },
  ];

  const commandBarFarItems = [
    {
      key: "searchBox",
      onRender: () => <AppBarSearchBox placeholder="Search for something" />,
    },
    {
      key: "toggleTheme",
      onRender: () => <ThemeToggle onToggle={onToggleTheme} />,
    },
    {
      key: "profileIcon",
      onRender: () => (
        <div
          style={{
            height: "2.5rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginLeft: "1.5rem",
          }}
        >
          <Persona
            imageUrl="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg"
            size={PersonaSize.size32}
          />
        </div>
      ),
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
