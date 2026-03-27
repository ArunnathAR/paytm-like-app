import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import { SendMoney } from './pages/SendMoney'

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to='/login' replace />
  }

  return children
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/signup' replace />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
        <Route path='/send' element={<ProtectedRoute><SendMoney /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
