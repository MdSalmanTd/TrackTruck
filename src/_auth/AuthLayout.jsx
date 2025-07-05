import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AuthLayout = () => {
  const {user} = useAuth(); // Replace with actual authentication logic

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className='min-h-screen w-full flex items-center justify-center bg-black'>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout