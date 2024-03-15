import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { useTheme } from "@fluentui/react";

interface AppBarSearchBoxProps {
  placeholder: string;
}

const AppBarSearchBox = ({ placeholder }: AppBarSearchBoxProps) => {
  const theme = useTheme();
  return (
    <SearchBox
      placeholder={placeholder}
      styles={{
        root: {
          borderRadius: "0.25rem",
          borderColor: theme.palette.neutralTertiaryAlt,
          backgroundColor: theme.palette.neutralTertiaryAlt,
          height: "2.5rem",
          width: "25rem",
        },
        iconContainer: {
          color: "#0078d4",
        },
        field: {
          color: "#0078d4",
        },
      }}
    />
  );
};

export default AppBarSearchBox;
