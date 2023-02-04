import React from 'react'
import { Stack } from '@mui/material';
import {logo} from '../utils/contents';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Navbar = () =>(
    <Stack direction='row' alignItems='center' p={2} sx={{position:'sticky',top:'0' ,background:'#000' ,justifyContent:'space-between' }}  >
        <Link style={{display:'flex',alignItems:"center"}}>
       
        <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
    </Stack>
  )


export default Navbar