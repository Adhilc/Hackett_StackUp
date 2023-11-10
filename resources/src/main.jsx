import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import GlobalStateProvider from './Components/globalContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStateProvider>
        <App />
    </GlobalStateProvider>
);
