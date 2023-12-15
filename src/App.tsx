import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import HomePage from './pages/home/home'
import PageNotFound from './pages/notFound/notFound'
import { homeRoute, groupRoute } from './route'
import NotesPage from './pages/notes/notes'
import './App.css'

function App() {

  const { pathname } = useLocation();

  return (
    <div className='app-layout'>

      <NavBar />

      {/* hides this div in mobile view when user is in homepage */}
      <div className={pathname === homeRoute ? "hide-page-only-mobile" : ""} >
        <Routes>
          <Route path={homeRoute} element={<HomePage />} />
          <Route path={groupRoute} element={<NotesPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
