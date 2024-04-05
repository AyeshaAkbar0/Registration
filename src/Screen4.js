// import React from 'react';
// import bg from './asset/page4/bg.png';
// import logo from './asset/page4/logo.png';
// import contentImage from './asset/page4/cont.png';

// export default function Screen4() {
//   return (
//     <div style={{ 
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         backgroundSize: '100% 100%',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column'
//       }}>
//       <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', width: '100%' }}>
//         <img src={logo} alt="Logo" style={{ maxWidth: '80%', height: 'auto' }} />
//       </div>
//       <img src={contentImage} alt="Content" style={{ maxWidth: '90%', height: 'auto', marginTop: '20%' }} />
//     </div>
//   );
// }
import React from 'react';
import bg from './asset/page4/bg.png';
import logo from './asset/page4/logo.png';
import contentImage from './asset/page4/cont.png';
import { useNavigate } from 'react-router-dom';

export default function Screen4() {
const navigate = useNavigate();


  const handleClick = () => {
    navigate('/fifth');
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
      <div style={{ position: 'absolute', top: "5%", left: 0, right: 0, display: 'flex', justifyContent: 'center', width: '100%' }}>
        <img src={logo} alt="Logo" style={{ maxWidth: '60%', height: 'auto' }} />
      </div>
      <div style={{ position: 'relative', maxWidth: '90%', height: 'auto', marginTop: '20%' }}>
        <img src={contentImage} alt="Content" style={{ width: '100%', height: 'auto' }} />
        <button onClick={handleClick} style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'transparent', border: 'none', width: '50%', height: '20%', cursor: 'pointer' }}></button>
      </div>
    </div>
  );
}
