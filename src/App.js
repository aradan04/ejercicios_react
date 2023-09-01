import React, { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);

  const toggleMessage = () => {
    if (!showMessage) {
      setShowMessage(true);
    } else {
      setShowSecondMessage(true);
    }
  };

  return (
    <div> 
      <h3 style={{ color: 'red' }}>Conditional Rendering Example</h3>
      <button style={{ backgroundColor: 'red' , fontSize: '25px' }} onClick={toggleMessage}>Red button</button>

      {showMessage ? 
        <p>bomba en hiroshima</p> : <div> </div>
      }

      {showSecondMessage ? 
        <p>bomba en nagasaki</p> : <div> </div>
      }
    </div>
  );
}

export default App;