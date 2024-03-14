import { useTheme } from "@fluentui/react";
import "./Footer.module.css";

const Footer = () => {
  const theme = useTheme();
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center", // This centers the content vertically
        justifyContent: "start", // This aligns the content to the left
        height: "var(--footerHeight)",
        backgroundColor: theme.palette.neutralLighter,
        color: theme.palette.neutralPrimary,
        paddingLeft: "1rem", // Add some padding on the left side for visual appeal
      }}
    >
      <div style={{ marginRight: "2.65rem" }}>
        Terms & Conditions | Privacy Policy
      </div>
      <div>©2024 Company Name</div>
    </footer>
  );
};

export default Footer;
