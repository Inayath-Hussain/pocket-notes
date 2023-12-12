import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import NewGroupModalContext from './context/newGroupModal.tsx'
import GroupsContextProvider from './context/groups.tsx'
import './index.css'
import './reset.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      {/* contains all the notes groups */}
      <GroupsContextProvider>

        {/* for modal display status */}
        <NewGroupModalContext>
          <App />
        </NewGroupModalContext>

      </GroupsContextProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
