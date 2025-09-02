import React, { useState } from 'react';
import StyledButton from './components/StyledButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Welcome to React on Azure!</h1>
      <p>Click the button to increase the count:</p>
      <StyledButton onClick={() => setCount(count + 1)}>
        Click me! Count: {count}
      </StyledButton>
    </div>
  );
}

export default App;
