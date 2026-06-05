import Link from 'next/link';
import React from 'react'
import LogoutButton from './LogoutButton';

export default async function StaticNavBar() {

  return (
    <nav className="bg-white shadow-sm">
       <div className="container mx-auto p-3 flex justify-between items-center">
          
          <div className="flex gap-8">
           <Link href="/" className="text-xl font-bold text-blue-600">
             Contact Manager
           </Link>
            <Link href="/about" className="text-xl font-bold">
              About
            </Link>
            <Link href="/features" className="text-xl font-bold">
              Features
            </Link>
            <Link href="/statistics" className="text-xl font-bold">
              Statistics
            </Link>
          </div>

        </div> 
    </nav>
  );
}
