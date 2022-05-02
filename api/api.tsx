// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
const tracktikApi  = axios.create({
  baseURL: "https://tracktik-challenge.staffr.com/",
  headers: {
    "Content-type": "application/json"
  }
});

export default tracktikApi;