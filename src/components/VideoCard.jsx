import {Link} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle} from '../utils/contents'


function VideoCard({video:{id:{videoId},snippet}}) {
    
  return (
    <Card sx={{width:{xs:'100%',sm:'358px',md:'320px'},boxShadow:'none',borderRadius:0}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia 
    image={snippet?.thumbnails?.high?.url} 
    alt={snippet?.title}
    sx={{width:{
      xs:'100%', sm:'358px',md:'320px'
    },height:180}}
    />
    </Link>
    <CardContent sx={{hight:'106px',backgroundColor:'#1e1e1e'}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <Typography variant='subtitle1' color='#fff' fontWeight="bold">
    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
    </Typography>
    </Link>
    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl} >
    <Typography variant='subtitle2' color='gray' fontWeight="bold">
    {snippet?.channelTitle || demoChannelTitle}
    <CheckCircle sx={{ml:'5px', fontSize:12 }}/>
    </Typography>
    </Link>
    </CardContent>

        
    </Card>
  )
}

export default VideoCard