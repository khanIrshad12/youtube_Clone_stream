import {useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import { Stack,Typography,Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import { FetchFromApi } from '../utils/FetchFromApi';
import { Videos } from './';

const VideoDetails = () => {
  const {id}=useParams();
  const [videoDetail,setVideoDetail]=useState([]);
  const [video,setVideo]=useState(null)
  useEffect(()=>{
  FetchFromApi(`videos?part=snippet,staticstics&id=${id}`)
  .then(data=> setVideoDetail(data.items[0]));

  FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  .then((data)=>setVideo(data.items))
  },[id]);
 

  if(!videoDetail?.snippet) return 'Loading...'
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail;

  return (
    <Box minHeight='95vh' sx={{background:{xs:'100%'}}}>
      <Stack direction={{xs:'column',md:'row'}}>
      <Box flex={1}>
      <Box sx={{width:'100%',position:'sticky',top:'86px',background:'#000'}}>
        <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls />
        <Typography color='#fff' varient='h4' fontWeight='bold' p={2} >
        {title}
        </Typography>
        <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2} >
        <Link to={`/channel/${channelId}`}>
        <Typography color='#fff' varient={{sm:'subtitle1',md:'h6'}}>
          {channelTitle}
          <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}} />
        </Typography>
        </Link>
        <Stack direction='row' gap='20px' textAlign='center'>
        <Typography varient='body1' sx={{opacity:'0.7'}}>
          {parseInt(viewCount).toLocaleString()}views
        </Typography>
        <Typography varient='body1' sx={{opacity:'0.7'}}>
          {parseInt(likeCount).toLocaleString()}Likes
        </Typography>

        </Stack>
        </Stack>
      </Box>
      </Box>
      <Box px={1} py={{xs:5,md:1}} justifyContent='center' alignItems='center'>
        <Videos videos={video} direction='column' />
      </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetails