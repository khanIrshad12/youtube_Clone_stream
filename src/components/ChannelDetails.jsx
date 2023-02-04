import { Box} from "@mui/material"
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import {Videos,ChannelCard} from './';
import { FetchFromApi } from "../utils/FetchFromApi";

const ChannelDetails = () => {
  const [channelDetail,setChannaldetail]=useState(null);
  const [video,setVideo]=useState([])
  const {id}=useParams();
  console.log(channelDetail,video)
  useEffect(()=>{
    FetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannaldetail(data.items[0]));

    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideo(data.items))
  
  },[id]);

  

  return (
    <Box minHeight='95vh'>
    <Box>
    <div 
    style={{background:" #7F7FD5",  /* fallback for old browsers */
background:' -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',  /* Chrome 10-25, Safari 5.1-6 */
background:' linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)' ,
height:'350px',
zIndex:10
}}
    />
    <ChannelCard channelDetail={channelDetail} marginTop='-113px' />
    </Box>
    <Box display='flex' p={2}  >
    <Box sx={{mr:{sm:'100px'}}} />
    <Videos videos={video}/>
    
    </Box>
    </Box>
  )
}

export default ChannelDetails