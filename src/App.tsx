import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/navbar'
import { homeRoute } from './route'
import HomePage from './pages/home/home'
import PageNotFound from './pages/notFound/notFound'

function App() {

  const { pathname } = useLocation();
  console.log(pathname)

  return (
    <div className='app-layout'>

      <NavBar />

      <div className={pathname === homeRoute ? "hide-page-only-mobile" : ""}>
        <Routes>
          <Route path={homeRoute} element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
