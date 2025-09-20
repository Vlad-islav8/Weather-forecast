import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const PreloaderStyled = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

// Альтернативный вариант с пульсирующим кругом
const PulseLoader = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #3498db;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

// Вариант с тремя точками
const DotsLoader = styled.span`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 20px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #3498db;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  
  &::before {
    left: 8px;
    animation: dot1 0.6s infinite;
  }
  
  &::after {
    left: 32px;
    animation: dot2 0.6s infinite;
  }
  
  span {
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #3498db;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    
    &:nth-child(1) {
      left: 8px;
      animation: dot1 0.6s infinite;
    }
    
    &:nth-child(2) {
      left: 32px;
      animation: dot2 0.6s infinite;
    }
    
    &:nth-child(3) {
      left: 56px;
      animation: dot3 0.6s infinite;
    }
  }
`;

const Preloader = ({ variant = "spinner", size = "medium", color = "#3498db" }) => {
  const getSize = () => {
    switch (size) {
      case "small": return "20px";
      case "large": return "60px";
      default: return "40px";
    }
  };

  if (variant === "pulse") {
    return (
      <PulseLoader 
        style={{ 
          width: getSize(), 
          height: getSize(),
          backgroundColor: color 
        }} 
      />
    );
  }

  if (variant === "dots") {
    return (
      <DotsLoader>
        <span style={{ backgroundColor: color }} />
        <span style={{ backgroundColor: color }} />
        <span style={{ backgroundColor: color }} />
      </DotsLoader>
    );
  }

  // По умолчанию spinner
  return (
    <PreloaderStyled 
      style={{ 
        width: getSize(), 
        height: getSize(),
        borderTopColor: color 
      }} 
    />
  );
};

export default Preloader;