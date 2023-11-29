import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TaskAdd from '../taskadd';
import PopUpModal from '../lib/modal';

function TopAppBar(){

  const [open,setOpen] = React.useState(false)

  const handleClose=()=>setOpen(false)

  return(
    <>
     
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"white",color:'black'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Management
          </Typography>
          <Button variant='contained'
          onClick={()=>setOpen(true)}
          >Add Task</Button>
        </Toolbar>
      </AppBar>
      <PopUpModal open={open} handleClose={handleClose}>
        <TaskAdd isUpdate={false} handleClose={handleClose}/>
      </PopUpModal>
    </Box>

    </>
  )

}

export default TopAppBar