import { createTheme } from "@fluentui/react";

export const lightTheme = createTheme({
  palette: {
    themePrimary: "#0078d4",
    themeLighterAlt: "#eff6fc",
    themeLighter: "#deecf9",
    themeLight: "#c7e0f4",
    themeTertiary: "#71afe5",
    themeSecondary: "#2b88d8",
    themeDarkAlt: "#106ebe",
    themeDark: "#005a9e",
    themeDarker: "#004578",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#E8E8E8", // Body & Footer
    neutralLight: "#F4F4F4", // AppBar
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#FFF", // NavRail
    neutralTertiaryAlt: "#c8c6c4", // AppBar Inputs
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
});

export const darkTheme = createTheme({
  palette: {
    themePrimary: "#0078d4",
    themeLighterAlt: "#f3f9fd",
    themeLighter: "#d0e7f8",
    themeLight: "#a9d3f2",
    themeTertiary: "#5ca9e5",
    themeSecondary: "#1d7fda",
    themeDarkAlt: "#006cbe",
    themeDark: "#005ba1",
    themeDarker: "#004377",
    neutralLighterAlt: "#282828",
    neutralLighter: "#0D0F11", // Body & Footer
    neutralLight: "#191D23", // AppBar
    neutralQuaternaryAlt: "#FFF",
    neutralQuaternary: "#20242A", // NavRail
    neutralTertiaryAlt: "#32393F", // AppBar Inputs
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#1f1f1f",
  },
});
