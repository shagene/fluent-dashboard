import {
  Nav,
  useTheme,
  IStyleFunctionOrObject,
  INavStyleProps,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { useLocation } from "react-router-dom";

initializeIcons();

const NavRail = () => {
  const theme = useTheme();
  const location = useLocation();

  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: "Dashboard",
          url: "/",
          iconProps: {
            iconName: "Home",
            styles: {
              root: { fontSize: 20, color: theme.palette.neutralPrimary },
            },
          },
          key: "dashboard",
        },
        {
          name: "Holders",
          url: "/holders",
          iconProps: {
            iconName: "ReminderPerson",
            styles: {
              root: { fontSize: 20, color: theme.palette.neutralPrimary },
            },
          },
          key: "holders",
        },
        {
          name: "Reporting",
          url: "/reporting",
          iconProps: {
            iconName: "ReportLibrary",
            styles: {
              root: { fontSize: 20, color: theme.palette.neutralPrimary },
            },
          },
          key: "reporting",
        },
        {
          name: "Work Request",
          url: "/work-request",
          iconProps: {
            iconName: "BranchPullRequest",
            styles: {
              root: { fontSize: 20, color: theme.palette.neutralPrimary },
            },
          },
          key: "workrequest",
        },
        {
          name: "Tools",
          url: "/tools",
          iconProps: {
            iconName: "DeveloperTools",
            styles: {
              root: { fontSize: 20, color: theme.palette.neutralPrimary },
            },
          },
          key: "tools",
        },
        {
          name: "FileShare",
          url: "/fileshare",
          iconProps: {
            iconName: "TextDocumentShared",
            styles: {
              root: { fontSize: 20, color: theme.palette.neutralPrimary },
            },
          },
          key: "fileshare",
        },
      ],
    },
  ];

  const getStyles: IStyleFunctionOrObject<INavStyleProps, INavStyles> = {
    root: {
      backgroundColor: theme.palette.neutralQuaternary,
      color: theme.palette.neutralPrimary,
      height: "100%",
      width: "15.625rem",
      boxSizing: "border-box",
      overflowY: "auto",
      paddingLeft: "1rem",
      paddingTop: "1rem",
    },
    navItem: {
      isSelected: {
        backgroundColor: "transparent",
      },
    },
    link: {
      selectors: {
        "&:hover": {
          backgroundColor: "transparent",
          textDecoration: "none",
        },
        "&:hover .ms-Button": {
          backgroundColor: "transparent",
        },
        "&:hover .ms-Icon": {
          color: "inherit",
        },
      },
    },
  };

  return (
    <Nav
      groups={navLinkGroups}
      selectedKey={
        navLinkGroups
          .flatMap((group) => group.links)
          .find((link) => link.url === location.pathname)?.key
      }
      styles={getStyles}
    />
  );
};

export default NavRail;
