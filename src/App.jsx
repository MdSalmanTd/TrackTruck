import { Routes, Route } from 'react-router-dom'

import { Dashboard, AddTrip, AllTrips, EditTrip } from './_root/pages'

import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import Login from './_auth/forms/LoginForm'
import Register from './_auth/forms/RegisterForm'

import './global.css'

const App = () => {


  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public/Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Protected routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-trip' element={<AddTrip />} />
          <Route path='/all-trips' element={<AllTrips />} />
          <Route path='/edit-trip/:id' element={<EditTrip />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App