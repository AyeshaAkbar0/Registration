import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Screen3() {
    const navigate = useNavigate();
    const StartClicked=()=>{
        navigate('/')
    }
  return (
    <div
    // style={{marginLeft:400, marginTop:100}}
    >
         <h2  style={{ marginLeft:450, marginTop:200, color:'#add8e6'}}>Thankyou for your information</h2>
      <button onClick={StartClicked} 
      style={{fontWeight:'bold',marginTop:100, width:200, height:50, marginLeft:600, backgroundColor:'#add8e6', borderRadius:20}}
      >Let's Start again</button>
    </div>
  )
}
