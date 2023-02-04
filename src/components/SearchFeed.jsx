import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box,Typography } from '@mui/material';
import {Videos} from './';
import { FetchFromApi } from '../utils/FetchFromApi';


const SearchFeed = () =>{
  
  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();
  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{
      console.log(data.items)
      setVideos(data.items)})
  },[searchTerm])

return (
  <Box p={2} sx={{overflowY:'auto',height:'100vh',flex:2}} >
  <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:"red"}}>
  search result:<span style={{color:"white"}}>{searchTerm}</span>videos
  </Typography>
  <Videos videos={videos}  />
  </Box>
  )
}
export default SearchFeed;