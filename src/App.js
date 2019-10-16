import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { ThemeProvider, Button, styled, css, FieldSet, InputField } from 'fannypack';
import 'typeface-roboto-mono'

const theme = {
  global: {
    fontFamily: 'Roboto Mono',
    fontSize: 20,
    base: css`
      html,
      body {
        background-color: #fff;
        color: #000;
      }
    `
  },
  palette: {
    primary: 'blue'
  },
  layout: {
    mobileBreakpoint: 520,
    tabletBreakpoint: 960
  },
  Button: {
    disabled: css`
      opacity: 0.2
    `
  },
  FieldSet: {
    base: css`
      border: 2px dashed #000;
    `,
  },
  Text: css`
    font-weight: 300;
    color: #000;
  `
}


const StyledApp = styled.div`
  text-align: center;
`
const StyledHeader = styled.header`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: #ccc;
`

const AppLogo = styled.img`
  height: 10vmin;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            hack NASA test 01.
          </p>
          <Button palette="primary">
            Hello world!
        </Button>
        </StyledHeader>
        <div>
          <FieldSet>
            <InputField name="total" label="total" />
          </FieldSet>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
