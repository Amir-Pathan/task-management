import { DATA } from "./createAction";


export function setData(payload){

  return{
    type:DATA,
    payload:payload
  }

}


export function getData(){

  let tasks=localStorage.getItem('tasks')

  return dispatch=>{

  

  if(tasks===null){

    localStorage.setItem('tasks',JSON.stringify([]))

    dispatch(setData([]))


  }else{

    dispatch(setData(JSON.parse(tasks)))

  }

}


}

export function updateData(data){

  localStorage.setItem('tasks',JSON.stringify(data))

  return dispatch=>{

    dispatch(setData(data))

  }

}
