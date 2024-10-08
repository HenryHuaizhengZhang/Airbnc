import './App.css'
import { Route, Routes } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import Login from './pages/LoginPage'
import Layout from './components/Layout'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<Login />} />      
      </Route>

    </Routes>
  )
}

export default App
