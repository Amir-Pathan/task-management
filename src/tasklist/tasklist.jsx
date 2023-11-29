import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ListItemText, Paper, Typography } from "@mui/material"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import {List,ListItem,ListItemIcon} from "@mui/material"
import FormControl from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import { updateData } from "../redux/action"
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/Delete';
import PopUpModal from "../lib/modal"
import TaskAdd from "../taskadd"


function TaskList(){

  const taskList = useSelector(state=>state.state)||[]

  const [updtateOpen,setUpdateOpen] = useState(false)

  const [indx,setIndex] = useState(0)

  const [taskDetailsOpen,setTaskDetailsOpen] = useState(false)

  const dispatch = useDispatch()

  const updateComplete=(val,index)=>{

    console.log(val);

    taskList[index].isComplete=val

    dispatch(updateData(taskList))

  }

  const deleteTask =(index)=>{

    let filt = taskList.filter((i,indexx)=>{

      return index!=indexx

    })

    dispatch(updateData(filt))

  }

  const handleClose=()=>{
    setUpdateOpen(false)

    setIndex(0)
  }

  return(

    <>
    <Container sx={{marginTop:'10px'}}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
         taskList.map((i,index)=>{

          return <ListItem key={index} >
            <Checkbox 
            checked={i.isComplete}
            onChange={(e)=>updateComplete(e.target.checked,index)}
            />
            <ListItemText 
            onClick={()=>{

              setIndex(index)

              setTaskDetailsOpen(true)

            }}
            >{i.taskName}</ListItemText>
            <IconButton sx={{cursor:'pointer'}}
            onClick={()=>{

              setIndex(index)

              setUpdateOpen(true)

            }}
            >
              <EditIcon/>
            </IconButton>
            <IconButton sx={{cursor:'pointer'}}
            onClick={()=>deleteTask(index)}
            >
              <DeleteIcon/>
            </IconButton>
          </ListItem>

         })
      }
    </List>
    </Container>
    <PopUpModal open={updtateOpen}
    handleClose={()=>setUpdateOpen(false)}
    >
      <TaskAdd 
      isUpdate={true}
      data={taskList[indx]}
      handleClose={handleClose}
      index={indx}
      />
    </PopUpModal>
    <PopUpModal open={taskDetailsOpen} handleClose={()=>setTaskDetailsOpen(false)}>
      {
        taskDetailsOpen? <> <Typography>Name :{taskList[indx].taskName}</Typography>
        <Typography>Completed : {taskList[indx].isComplete?"complete":'Pending'}</Typography>
        <Typography>Priority :{taskList[indx].priority}</Typography>
        <Typography>Description :</Typography>
        <Typography>{taskList[indx].taskDescription}</Typography></>:null
      }
    </PopUpModal>
    </>

  )

}

export default TaskList