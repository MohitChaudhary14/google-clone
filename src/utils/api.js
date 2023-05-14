import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";


const params ={
    // key:'AIzaSyAjLR3Ew2qcgW4SdOAs0u3J8pPzAzP-BY4',
    key:"AIzaSyAIBFIvlRt5jChggX20nuR6gJbQMDt6M64",
    // cx:"e4d6d06e270f84703"
    cx:"a626ea8eceb304446"
}

export const fetchDataFromApi = async (payload) => {
 const {data} = await axios.get(BASE_URL,{
    params: {...params,...payload}
 })
 return data;
};
