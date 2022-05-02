import { Typography, Box, Grid, AppBar, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import { Site } from '../../ts/interfaces/site';

interface Props {
  site: Site;
  toggleSiteDetails(site:Site, pageNo:number, toggle:boolean): any;
  page: number;
}

export default function SiteDetails(props:Props): JSX.Element {
  const { site, toggleSiteDetails, page } = props;
  return (
    <>
      <AppBar position="static">
        <Box sx={{ display: "flex", mx: 1, my: 2 }}>
          <Grid item xs={1}>
            <Box
              sx={{ display: "flex", mt: 3, ml: 2, justifyContent: "flex-end" }}
            >
              <IconButton
                component="a"
                onClick={() => {
                  toggleSiteDetails(site, page, false);
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Box
                component="img"
                sx={{
                  display: "flex",
                  borderRadius: "100%",
                  border: 1,
                  mt: 2,
                  mr: 1,
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
                <Typography>{`${site.title}`} </Typography>
                <Typography>{`${site.address.street}`} </Typography>
                <Typography>
                  {`${site.contacts.main.firstName} ${site.contacts.main.lastName}`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              p: 10,
              maxHeight: { xs: 50, md: 50 },
              maxWidth: { xs: 50, md: 50 },
            }}
          ></Box>
        </Grid>

        <Grid item xs={5}>
          <Box
            sx={{
              display: "flex",
              p: 2,
              gap: 2,
            }}
          >
            <PersonIcon />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography>
                {" "}
                {`${site.contacts.main.firstName} ${site.contacts.main.lastName}`}
              </Typography>
              <Typography>{`${site.contacts.main.jobTitle}`} </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              p: 2,
              gap: 2,
            }}
          >
            <PhoneIcon />
            <Typography>{`${site.contacts.main.phoneNumber}`} </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              p: 2,
              gap: 2,
            }}
          >
            <EmailIcon />
            <Typography>{`${site.contacts.main.email}`} </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              p: 2,
              gap: 2,
            }}
          >
            <RoomIcon />
            <Typography>{`${site.contacts.main.address.street}`} </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
