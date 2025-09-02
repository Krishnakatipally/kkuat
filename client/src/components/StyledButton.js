// client/src/components/StyledButton.js

import React from 'react';

const StyledButton = ({ text, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: '#6200ee',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StyledButton;
