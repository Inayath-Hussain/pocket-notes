import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/navbar'

function App() {

  return (
    <div className='app-layout'>

      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* <Route path={} /> */}
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
