import React from "react";
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
`

ReactDOM.render(<><App /><GlobalStyle /></>, document.getElementById('root'))