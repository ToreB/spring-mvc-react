import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export function initializeApp(elementId, props) {
    ReactDOM.render(
        <App {...props} />,
        document.getElementById(elementId)
    );
}