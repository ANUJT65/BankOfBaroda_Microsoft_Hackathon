import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const NewApplicationMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
    handleClose(); // Close the menu after navigating
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
            backgroundColor: '#FF5B2E',
            padding: '8px 16px',
            fontWeight: 'bold',
            color: 'white',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#e54b1b', // Darker shade on hover
            },
        }}
      >
        + New Application
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNavigation('/DashboardPL')}>Personal Loan</MenuItem>
        <MenuItem onClick={handleNavigation('/Dashboard')}>Business Loan</MenuItem>
      </Menu>
    </div>
  );
};

export default NewApplicationMenu;
