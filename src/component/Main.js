import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <Div>
        <Title>WANTED PRE-ONBOARDING</Title>
      </Div>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div = styled.div`
  margin: 1.5em 0;
`;
const Title = styled.p`
  display: flex;
  font-size: 2em;
  margin: 0.5em 0 0.5em 0;
`;

export default Main;
