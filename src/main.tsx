import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './reset.css'
import NewGroupModalContext from './context/newGroupModal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NewGroupModalContext>
      <App />
    </NewGroupModalContext>
  </React.StrictMode>,
)
