import { Typography, Grid, Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

interface Props {
  handleTagChange (event: React.ChangeEvent<HTMLSelectElement>):any ;
}
export default function SiteTitlebar(props:Props) {
  const { handleTagChange } = props;
  return (
    <>
      <AppBar position="static">
        <Box sx={{ display: "flex", mt: 3, mb: 2, justifyContent: "center" }}>
          <Typography>Sites</Typography>
        </Box>
      </AppBar>
      <Box sx={{ display: "flex", px: 1, border: 1 }}>
        <Grid container>
          <Grid item xs={10}>
            <FormControl
              sx={{
                width: "50%",
              }}
            >
              <NativeSelect
                defaultValue={"all"}
                onChange={handleTagChange}
                inputProps={{
                  name: "tags",
                  id: "tag selector",
                }}
              >
                <option value={"renovated"}>Renovated</option>
                <option value={"old"}>Old</option>
                <option value={"new"}>New</option>
                <option value={"state"}>State</option>
                <option value={"individual"}>Individual</option>

                <option value={"all"}>All Sites</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <FilterListIcon />
              <SearchIcon />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
