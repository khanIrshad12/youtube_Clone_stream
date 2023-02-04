import React from 'react'
import { useState } from 'react';
import { Paper,IconButton } from '@mui/material';
import {Search} from '@mui/icons-material'
import { useNavigate} from 'react-router-dom';

const SearchBar = () =>{
  const [searchTerm, setSearchTerm] = useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
    
  }

return(
   <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius:20,border:'1px solid #e3e3e3' , boxShadow:'none',pl:2,mr:{sm:5}}}>
   <input className='search-bar' value={searchTerm} placeHolder='Search...' onChange={(e)=>setSearchTerm(e.target.value)}  />
   <IconButton type="submit" sx={{color:'red',p:'10px'}}>
   <Search/>
   </IconButton>
   
   </Paper>

  )}


export default SearchBar