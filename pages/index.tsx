import type { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import MainLayout from "../components/layout/main-layout";
import CssBaseline from "@mui/material/CssBaseline";
import SiteTitlebar from "../components/sites/site-titlebar";
import SiteList from "../components/sites/site-list";
import SiteDetails from "../components/sites/site-details";
import tracktikApi from "../api/api";
import { Site } from '../ts/interfaces/site';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  const [sites, setSites] = useState<Site[]>([]);
  const [paginatedSites, setPaginatedSites] = useState<Site[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1);
  const [selectedSite, setSelectedSite] = useState<Site|any>();
  const [filteredSites, setFilteredSites] = useState<Site[]>([]);
  const [siteDetailsVisiblity, setSiteDetailsVisiblity] =
    useState<boolean>(false);

  const paginateSites = (value: number) => {
    setPaginatedSites(filteredSites.slice(value * 7, (value + 1) * 7));
    setPage(value);
  };
  const setAllSites = (sites:Site[]) => {
    setFilteredSites(sites);
    setPaginatedSites(sites.slice(0, 7));
    setPageSize(Math.floor(sites.length / 7));
    setPage(1);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "all") {
      setAllSites(sites);
      return;
    }
    let allFilteredSites = sites.filter((site) =>
      site.tags.includes(event.target.value)
    );
    setFilteredSites(allFilteredSites);

    setPaginatedSites(allFilteredSites.slice(0, 7));
    setPageSize(Math.floor(allFilteredSites.length / 7));
    setPage(1);
  };
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    paginateSites(value);
  };

  const toggleSiteDetails = (site:Site, pageNo:number, toggle:boolean) => {
    if (!toggle) {
      setSiteDetailsVisiblity(false);
      paginateSites(page);
      return;
    }
    setSelectedSite(site);
    setSiteDetailsVisiblity(true);
    setPage(pageNo);
  };

  useEffect(
     () => {
      (async() => {  
      const data = await tracktikApi.get(`sites`)
      setSites(data.data);
      setAllSites(data.data);})()
    }, []);

  if (sites.length == 0) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Frontend</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />

      <main>
        {!siteDetailsVisiblity && (
          <SiteTitlebar handleTagChange={handleTagChange} />
        )}

        {!siteDetailsVisiblity && (
          <SiteList
            sites={paginatedSites}
            handleChange={handleChange}
            page={page}
            pageSize={pageSize}
            toggleSiteDetails={toggleSiteDetails}
          />
        )}
        {siteDetailsVisiblity && (
          <SiteDetails
            site={selectedSite}
            page={page}
            toggleSiteDetails={toggleSiteDetails}
          />
        )}
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
