import React  from "react";

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'



const Nav = () =>{

    return(
        <AppBar>
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr:2 }}
            >
            <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow:1}}>
                Profile
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">My Profile</Button>
            <Button color="inherit">Find Connections</Button>
            <Button color="inherit">Sign Out</Button>
        </Toolbar>
        </AppBar>

    );
};

export default Nav;