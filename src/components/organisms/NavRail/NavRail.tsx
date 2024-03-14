import {
  Nav,
  useTheme,
  IStyleFunctionOrObject,
  INavStyleProps,
  INavStyles,
} from "@fluentui/react";

const navLinkGroups = [
  {
    links: [
      {
        name: "Home",
        url: "",
      },
    ],
  },
];

const NavRail = () => {
  const theme = useTheme();
  const getStyles: IStyleFunctionOrObject<INavStyleProps, INavStyles> = {
    root: {
      backgroundColor: theme.palette.neutralQuaternaryAlt,
      color: theme.palette.neutralPrimary,
      height: "100%",
      width: "16rem",
      boxSizing: "border-box",
      overflowY: "auto",
    },
  };

  return <Nav groups={navLinkGroups} selectedKey="key1" styles={getStyles} />;
};

export default NavRail;