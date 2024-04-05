
import './App.css';
import Screen1 from './Screen1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import 'bootstrap/dist/css/bootstrap.min.css';
import Screen5 from './Screen5';
import ImageToggle from './extra2';
import Screen3plus from './Screen3plus';

function App() {
  return (
   
      <Router>
        <Routes>
    
          <Route path='/' element={<Screen1/>} />
          <Route path='/second' element={<Screen2></Screen2>}/>
          {/* <Route path='/third' element={<App1></App1>}/> */}
          <Route path='/forth' element={<Screen4></Screen4>}/>
          <Route path='fifth' element={<Screen5></Screen5>} />
          <Route path ="image" element={<Screen3></Screen3>} />
          <Route path='privacy' element={<Screen3plus></Screen3plus>}/>
       
        </Routes>
      </Router>
     

      
      
  );
}

export default App;
