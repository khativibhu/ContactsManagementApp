import RegisterForm from '@/app/_components/RegisterForm'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
  return (
 <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <RegisterForm/>
      <p className="mt-4 text-center">If you have already registered?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
      </p>
      </div>
  )
}
