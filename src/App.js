import logo from './logo.svg';
import './App.css';
import TopAppBar from './appbar';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getData } from './redux/action';
import TaskList from './tasklist';

function App() {

  const dispatch= useDispatch()

  const state=useSelector((state)=>state)

  useEffect(()=>{

    dispatch(getData())

  },[])

  return (
    <div>
       <TopAppBar/>
       <TaskList/>
    </div>
  );
}

export default App;
