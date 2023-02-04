import axios from "axios";
const Base_Url="https://youtube-v31.p.rapidapi.com";
const options = {
    params: {part: 'snippet', videoId: 'M7FIvfx5J10',maxResults:60},
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const FetchFromApi= async(url)=>{
   const{data}= await axios.get(`${Base_Url}/${url}`,options);
   //console.log(data)
    return data;
  }