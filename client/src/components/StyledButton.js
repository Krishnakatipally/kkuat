import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #0078d7;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005a9e;
  }
`;

export default StyledButton;
