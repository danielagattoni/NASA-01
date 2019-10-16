import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { ThemeProvider, Button, styled } from 'fannypack';

const StyledApp = styled.div`
  text-align: center;
`
const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const AppLogo = styled.img`
  height: 40vmin;
`

const AppLink = styled.a`
  color: #09d3ac;
`



function App() {
  return (
    <ThemeProvider>
      <StyledApp>
        <StyledHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            hack NASA test 01.
          </p>
        <Button palette="primary">
          Hello world!
        </Button>

          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </StyledHeader>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
