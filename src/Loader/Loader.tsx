import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #000000, #3b3b3b);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: ${fadeIn} 0.3s ease-in;
  z-index: 9999;
`;

const Content = styled.div`
  text-align: center;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Loader = () => {
  return (
    <LoaderStyled>
      <Content>
        <Spinner />
        <Message>Жди, приложение пытается выяснить где ты живешь...</Message>
      </Content>
    </LoaderStyled>
  );
};

export default Loader;