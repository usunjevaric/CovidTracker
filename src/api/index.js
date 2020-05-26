import axios from "axios";
const _url = "https://covid19.mathdro.id/api";

export const fetchGlobalData = async () => {
  try{
    const {
      data: { confirmed, deaths, recovered,lastUpdate },
    } = await axios.get(_url);

    return { confirmed, deaths, recovered, lastUpdate };
  }catch (e) {

  }
};

export const fetchChartData=async ()=>{
  try {
    const {data}= await axios.get(`${_url}/daily`);
    return data.map(({confirmed,deaths,reportDate})=>({confirmed:confirmed.total, deaths:deaths.total, date:reportDate}))
  }catch (e) {

  }
}