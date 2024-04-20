import React, { useState,useEffect } from 'react';
import './style.css'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import notesLogo from '../../Images/noteLogo.png'

const CustomAvatar = ({ name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName,setUserName]=useState('');
  useEffect(()=>{
        const user=localStorage.getItem('userName')
        setUserName(user);
  },[])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    console.log("menu items"); 
    handleClose();
  };

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

  return (
    <div className='navbarContainer'>
        <Box>
            <img src={notesLogo} alt="notes app logo"  className='notesLogo'/>
        </Box>
        <Box>
      <Avatar onClick={handleClick} style={{cursor:'pointer',backgroundColor:'#F0B27A'}}>{firstLetter}</Avatar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick()}>Profile</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Logout</MenuItem>
      </Menu>
      </Box>
    </div>
  );
};

export default CustomAvatar;
