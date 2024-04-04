import React,{useEffect} from 'react';
import bg from './asset/page4/bg.png';
import logo from './asset/page4/logo.png';
import contentImage from './asset/page5/pic.png';
import { useNavigate } from 'react-router-dom';

export default function Screen5() {
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        navigate('/'); // Navigate to the first screen after 10 seconds
      }, 10000); // 10000 milliseconds = 10 seconds
  
      return () => clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    }, []); // Run 
  const handleClick = () => {
    // Your onClick function logic here
    console.log('Button clicked!');
  };

  return (
    <div style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative'
      }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', width: '100%' }}>
        <img src={logo} alt="Logo" style={{ maxWidth: '80%', height: 'auto' }} />
      </div>
      <div style={{ position: 'absolute',justifyContent: 'center', maxWidth: '90%', height: 'auto', marginTop: '20%' , marginLeft:"30%"}}>
        <img src={contentImage} alt="Content" style={{ width: '60%', height: 'auto' }} />
       
      </div>
    </div>
  );
    }
