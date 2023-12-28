import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from "../src/pages/HomePage/HomePage"
import { Route, Routes } from 'react-router-dom';
import { Message } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { getProfileAction } from './Redux/auth.action';

function App() {
  const {auth}= useSelector(store=>store);
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  },[jwt])

  return (
    <div  className=''>

    <Routes>
      <Route path='/*' element={auth.user?<HomePage/>:<Authentication />} />
      <Route path='/message' element={<Message />} />
      <Route path='/login' element={<Authentication/>} />
    </Routes>
      {/* <Authentication /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
