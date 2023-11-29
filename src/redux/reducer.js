import { DATA } from "./createAction";



const initial =[]

function reducer(state=initial,action){

  switch(action.type){

    case DATA:{
      return{
        state:action.payload
      }
    }
    default:{
      return state
    }

  }

}

export default reducer