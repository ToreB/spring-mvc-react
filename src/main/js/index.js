import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export function initializeApp(props) {
    ReactDOM.render(
        <App {...props} />,
        document.getElementById('app')
    );
}