import { useState } from "react";
import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Appbar from "./main-appbar";
import Sidebar from "./main-sidebar";
import PropTypes from "prop-types";

interface MainLayoutProps {
  children?: ReactNode;
  window?: any;
}

export default function MainLayout(props:MainLayoutProps) {
  const { children,window } = props;
  
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Appbar handleDrawerToggle={handleDrawerToggle} drawerWidth="240px" />

        <Sidebar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          container={container}
          drawerWidth="240px"
        />
        <Box sx={{ flexGrow: 1, mt: "55px" }}>{children}</Box>
      </Box>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
