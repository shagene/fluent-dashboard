import React from "react";
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

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Dashboard",
        url: "/",
        icon: "Home",
        key: "dashboard",
      },
      {
        name: "Holders",
        url: "/holders",
        icon: "ReminderPerson",
        key: "holders",
      },
      {
        name: "Reporting",
        url: "/reporting",
        icon: "ReportLibrary",
        key: "reporting",
      },
      {
        name: "Work Request",
        url: "/work-request",
        icon: "BranchPullRequest",
        key: "workrequest",
      },
      {
        name: "Tools",
        url: "/tools",
        icon: "DeveloperTools",
        key: "tools",
      },
      {
        name: "FileShare",
        url: "/fileshare",
        icon: "TextDocumentShared",
        key: "fileshare",
      },
    ],
  },
];

const NavRail = () => {
  const theme = useTheme();
  const location = useLocation();
  const getStyles: IStyleFunctionOrObject<INavStyleProps, INavStyles> = {
    root: {
      backgroundColor: theme.palette.neutralQuaternary,
      color: theme.palette.neutralPrimary,
      height: "100%",
      width: "15.625rem",
      boxSizing: "border-box",
      overflowY: "auto",
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
          color: "inherit", // Ensure icon color remains consistent on hover
        },
      },
    },
  };

  const onRenderLink = (link: any) => {
    const iconStyle = { color: theme.palette.neutralPrimary };

    switch (link.icon) {
      case "Home":
        return (
          <span style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginLeft: "0.5rem" }}>{link.name}</span>
          </span>
        );
      case "Settings":
        return (
          <span style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginLeft: "0.5rem" }}>{link.name}</span>
          </span>
        );
        break;
      default:
        break;
    }
    return (
      <span style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginLeft: "0.5rem" }}>{link.name}</span>
      </span>
    );
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
      onRenderLink={onRenderLink}
    />
  );
};

export default NavRail;
