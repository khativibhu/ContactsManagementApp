import Link from 'next/link';
import React from 'react'
import LogoutButton from './LogoutButton';
import { getSession } from '../_lib/cookie';

export default async function NavBar() {
  const session = await getSession();  

  return (
    <nav className="bg-white shadow-sm">
       <div className="container mx-auto px-3 py-1.5 flex justify-between items-center">
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

          <div className="flex items-center space-x-4">
            {session? (
                <>
                   <Link href="/contact" className="hover:text-blue-600 mr-8">Contacts</Link>
                   <LogoutButton />
                </>
            ) : (
                <>
                   <Link href="/login" className="hover:text-blue-600 mr-5 mt-2 mb-2">Login</Link>
                   <Link href="/register" className="hover:text-blue-600 mt-2 mb-2" >Register</Link>
                </>
            )

            }
          </div>
        </div> 
    </nav>
  );
}
