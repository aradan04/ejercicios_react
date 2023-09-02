import React, { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    if (!showMessage) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };
console.log(Math.round(Math.random()*1000000))
  return (
    <div> 
      <h3 style={{ color: 'red' }}>Conditional Rendering Example</h3>
      <button style={{ backgroundColor: 'red' , fontSize: '25px' }} onClick={toggleMessage}>Red button</button>

      {showMessage ?  
        <p style={{ color: 'blue', fontSize: '40px'}} >True</p> : <p style={{ color: 'green', fontSize: '30px' }}> False </p> /*3 .-(condicion)? verdadero : falso*/
      }

      {showMessage ? /*4.-condicion showmessage*/
        <p>second message</p> : <div> </div>
      }
    </div>
  );
}

export default App;