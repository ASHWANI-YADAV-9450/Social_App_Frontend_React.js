import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from "../src/pages/HomePage/HomePage"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div  className=''>

    <Routes>
      <Route path='/*' element={<HomePage/>} />
      {/* <Route path='/message' element={<Message />} /> */}
      <Route path='/*' element={<Authentication/>} />
    </Routes>
      {/* <Authentication /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
