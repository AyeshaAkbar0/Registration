
import './App.css';
import Screen1 from './Screen1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   
      <Router>
        <Routes>
    
          <Route path='/' element={<Screen1/>} />
          <Route path='/second' element={<Screen2></Screen2>}/>
          <Route path='/third' element={<Screen3></Screen3>}/>
       
        </Routes>
      </Router>
     

      
      
  );
}

export default App;
