import { Typography, Box, Grid, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Site } from '../../ts/interfaces/site';

interface Props {
  site: Site;
  toggleSiteDetails(site:Site, pageNo:number, toggle:boolean): any;
  page: number;
}
export default function SiteListItem(props:Props) {
  const { site, toggleSiteDetails, page } = props;
  return (
    <Box sx={{ display: "flex", p: 2, border: 1 }}>
      <Grid container>
        <Grid item xs={2}>
          <Box
            component="img"
            sx={{
              display: "flex",
              borderRadius: "100%",
              border: 1,
              maxHeight: { xs: 50, md: 50 },
              maxWidth: { xs: 50, md: 50 },
            }}
            alt="Site Image"
            src={site.images[0]}
          />
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>{site.title} </Typography>
            <Typography>{`${site.address.street}`} </Typography>
            <Typography>
              {`${site.contacts.main.firstName} ${site.contacts.main.lastName}`}{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              component="a"
              onClick={() => {
                toggleSiteDetails(site, page, true);
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
