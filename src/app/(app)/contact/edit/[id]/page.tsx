import ContactForm from '@/app/_components/ContactForm'
import { updateContactAction } from '@/app/actions/contact'
import { getContactById } from '@/app/db/contact';
import React, { use } from 'react'

export default function EditContactPage( {params}: {params: Promise<{id: string}> } ) {
  const {id} = use(params);
  const contact = use(getContactById(Number(id)) );

  return (
     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
             <h1 className="text-2xl fontbold mb-6">Edit Contact</h1>
             <ContactForm action={updateContactAction} contact={contact} />   {/*passing action with contact that you want to edit*/}
          </div>
  )
}
