import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Screen1() {
    const navigate = useNavigate();

    const StartClicked=()=>{
        navigate('/second');
     
    }
  return (
    <div>
        <h2  style={{ marginLeft:550, marginTop:200, color:'#add8e6'}}>Welcom to Our Website</h2>
      <button onClick={StartClicked} 
      style={{fontWeight:'bold',marginTop:100, width:200, height:50, marginLeft:600, backgroundColor:'#add8e6', borderRadius:20}}
      >Start</button>
      
    </div>
  )
}
