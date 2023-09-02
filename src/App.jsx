import React, { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(0);

  const toggleMessage = () => {
 setShowMessage(showMessage++)
 
  };
console.log(Math.round(Math.random()*1000000))
  return (
    <div className='container'> 
      <h3 style={{ color: 'red' }}>Conditional Rendering Example</h3>
      <button style={{ backgroundColor: 'red' , fontSize: '25px' }} onClick={toggleMessage}>Red button</button>



    </div>
  );
}

export default App;