import React,{useState,useEffect} from 'react';

import {Box,Stack,Typography } from '@mui/material';
import {SideBar,Videos} from './';
import { FetchFromApi } from '../utils/FetchFromApi';


const Feed = () =>{
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos,setVideos]=useState([]);
  
  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{
      console.log(data.items)
      setVideos(data.items)})
  },[selectedCategory])

return (
    <Stack sx={{flexDirection:{sx:'auto',md:'row'}}}>
     <Box sx={{height:{sx:'auto', md:'93vh'},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2} }}>
    <Typography variant="body2" sx={{color:'#fff'}} >
    <SideBar 
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
    />
    <div className='copyright'>
    Copy Right 2023
    <br />
    </div>
    </Typography>
     </Box>

     <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}} >
     <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:"red"}}>
     {selectedCategory}<span style={{color:"white"}}>Videos</span>
     </Typography>
     <Videos videos={videos} />
     </Box>

    </Stack>
  )
}
export default Feed