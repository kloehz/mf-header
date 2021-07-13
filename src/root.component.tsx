import { Route, HashRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  min-height: 56px;
  padding-left: 10px;
`;

const Test = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;


const StyledButton = styled.button`
  background-color: black;
  border: 2px solid transparent;
  border-radius: 4px;
  border: black;
  color: white;
  cursor: pointer;
  font-size: 23px;
  text-align: center;
  &:hover {
    filter: opacity(0.8);
  }
`;


export default function Root(props) {
  return (
    <HashRouter>
      <Route path="/" component={App}/>
    </HashRouter>
  );
}

const App = () => {
  return (
    <Container>
      <Test to={'user'}><StyledButton>User</StyledButton></Test>
      <Test to={'body'}><StyledButton>Body</StyledButton></Test>
    </Container>
  );
}