import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { ProtectedRoute } from './components/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'
import AttendeDasboard from './pages/AttendeDasboard'
import ExibitorDasborad from './pages/ExibitorDasborad'
import User from './components/User'
import Staff from './pages/Staff'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin' element={<ProtectedRoute role="admin">
          <AdminDashboard />
        </ProtectedRoute>} />

        <Route path='/attende' element={<ProtectedRoute role="attende">
          <AttendeDasboard />
        </ProtectedRoute>}>
          <Route path='user' element={<User />} />
          <Route path='staff' element={<Staff />} />
        </Route>


        <Route path='/exhibitor' element={<ProtectedRoute role="exhibitor">
          <ExibitorDasborad />
        </ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
