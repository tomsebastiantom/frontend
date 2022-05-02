import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerItems from "./main-sidebar-items";

interface SidebarProps {
  handleDrawerToggle:any;
  mobileOpen:boolean;
  container:any;
  drawerWidth:string;
}


export default function Sidebar(props: SidebarProps) {

  const { handleDrawerToggle, mobileOpen, container, drawerWidth } = props;

  return (
    <Box 
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar items"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <DrawerItems />
      </Drawer>
    </Box>
  );
}
