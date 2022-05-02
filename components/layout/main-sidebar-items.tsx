import Divider from "@mui/material/Divider";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import NextLink from "next/link";

export default function DrawerItems() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <NextLink href={`/`} passHref>
          <ListItem button key="0">
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary="Sites" />
          </ListItem>
        </NextLink>
      </List>
    </div>
  );
}
