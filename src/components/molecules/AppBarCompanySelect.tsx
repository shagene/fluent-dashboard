import { Dropdown } from "@fluentui/react/lib/Dropdown";
import { useTheme } from "@fluentui/react";
import React from "react";

interface AppBarCompanySelectProps {
  placeholder: string;
  options: { key: string; text: string }[];
  onChange: (event: React.FormEvent<HTMLDivElement>, item?: any) => void;
}

const AppBarCompanySelect = ({
  placeholder,
  options,
  onChange,
}: AppBarCompanySelectProps) => {
  const theme = useTheme();
  return (
    <Dropdown
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      styles={{
        dropdown: {
          borderRadius: "0.25rem",
          borderColor: "transparent", // Ensure border color is transparent
          backgroundColor: theme.palette.neutralTertiaryAlt,
          width: "13.75rem",
          borderWidth: "0px", // Set borderWidth to 0 to remove the border
        },
        title: {
          backgroundColor: theme.palette.neutralTertiaryAlt,
          height: "2.5rem", // Ensure the title height matches the dropdown height
          lineHeight: "2.5rem", // Center the text vertically
        },
        callout: {
          backgroundColor: theme.palette.neutralTertiaryAlt,
          borderColor: "transparent", // Ensure callout border color is transparent
          borderWidth: "0px", // Set callout borderWidth to 0 to remove the border
        },
      }}
    />
  );
};

export default AppBarCompanySelect;
