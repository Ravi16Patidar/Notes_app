import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import notesImage from '../../Images/NotesImage.webp';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function EntryPage() {
    const [userName,setUserName]=useState('')

  
    const handleInputChange=(e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit=()=>{
        if(userName.length!=null){
            localStorage.setItem('userName',userName);
        }
    }
  return (
    <div className='container'>
        {/* /image container */}
        <div>
            <img src={notesImage} alt="notes image" className='notesImageStyle' />
        </div>
        {/* /input field container */}
        <Box
        className="inputContainer"
      sx={{
        width: 500,
        maxWidth: '100%',

      }}
    >
      <TextField fullWidth  id="fullWidth" autoComplete='off'  onChange={handleInputChange}  placeholder='Enter Your Name'/>
      <Button className='submitBtn' variant="contained" onClick={handleSubmit}><Link to='./dashboard' style={{textDecoration:'none',color:'white'}}>submit</Link></Button>
    </Box>
    </div>
  )
}

export default EntryPage