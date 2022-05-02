import { Box } from "@mui/material";
import SiteListItem from "./site-listitem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Site } from '../../ts/interfaces/site';

interface Props{
  sites: Site[];
  toggleSiteDetails(site:Site, pageNo:number, toggle:boolean): any;
  page: number;
  pageSize: number;
  handleChange: any;
}


export default function SiteList( props:Props) {
  const { page, pageSize, handleChange, sites, toggleSiteDetails } = props;
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {sites.map((site:Site) => (
        <SiteListItem
          key={site.id}
          site={site}
          toggleSiteDetails={toggleSiteDetails}
          page={page}
        />
      ))}
      <Stack spacing={2}>
        <Pagination count={pageSize} page={page} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
