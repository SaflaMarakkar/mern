import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
           
            <AppBar >
                <Toolbar variant="dense">

                    <Typography>
                        EMPLOYEE APP
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/add'>
                            <Button variant="contained" color='success'>ADD</Button>
                        </Link> &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/view'>
                            <Button variant="contained" color='success'>VIEW</Button>
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                             
                    </Typography>
                </Toolbar>
            </AppBar>
            <br /><br /><br />
        </div>
    )
}

export default Navbar
    
