import { TextField, Typography,Select,MenuItem,InputLabel, TextareaAutosize, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { setData, updateData } from "../redux/action"

let initial ={
  isComplete:false,
  taskName:'',
  taskDescription:'',
  priority:'low'
}

const priroty=['low','medium','high']

function TaskAdd({isUpdate,data,handleClose,index}){



  const [task,setTask]=useState(initial)

  const [nameReq,setReq] = useState('')


  useEffect(()=>{

    if(isUpdate){

       setTask({
        isComplete:data.isComplete,
        taskName:data.taskName,
        taskDescription:data.taskDescription,
        priority:data.priority
       })

       console.log(initial)

    }

 },[])

  const handleChange=(key,val)=>{

    setTask((prev)=>({
      ...prev,
      [key]:val
    }))

  }

  const dispatch = useDispatch()

  const addData=()=>{

    if(task.taskName.length<1){

      setReq('Please Enter Task Name')

      return

    }

    setReq('')

    let taskList = localStorage.getItem('tasks')

    taskList= JSON.parse(taskList)

    if(isUpdate){

      taskList[index].taskName=task.taskName
      taskList[index].taskDescription=task.taskDescription
      taskList[index].priority=task.priority

      dispatch(updateData(taskList))


    }else{

      taskList.unshift(task)

      dispatch(updateData(taskList))
       
 
    }

    handleClose()

  }


  return(
    <>
     
     <Typography align="center">{isUpdate?'Update':"Add"} Task</Typography>
     <TextField 
     size="small"
     label="Task Name"
     fullWidth
     value={task.taskName}
     onChange={(e)=>handleChange('taskName',e.target.value)}
     />
     <p style={{color:"red"}}>{nameReq}</p>
     <InputLabel id="demo-simple-select-label">Priority</InputLabel>
     <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={task.priority}
    label="Age"
    onChange={(e)=>handleChange('priority',e.target.value)}
    fullWidth
    size="small"
  >
    {
      priroty.map((e,k)=>{

         return <MenuItem value={e} key={k}>{e}</MenuItem>

      })
    }
  </Select>
   <InputLabel>Description</InputLabel>
   <TextareaAutosize 
   sx={{width:'100%'}}
   value={task.taskDescription}
   onChange={(e)=>handleChange('taskDescription',e.target.value)}
   minRows={4}
   />

   <div style={{
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-evenly',
    marginTop:'10px'
   }}>
    <Button color="inherit" 
    onClick={handleClose}
    >Cancel</Button>
    <Button color="inherit"
    onClick={addData}
    > {isUpdate?"Update":'Add'} Task</Button>
   </div>
    </>
  )

}

export default TaskAdd