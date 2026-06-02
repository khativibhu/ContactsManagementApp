"use server";  //because we are creating server actions here in this file
import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { getSession } from "../_lib/cookie";
import { ContactType } from "../_types/contact";

export const createContactAction = async(prevState: any,formData: FormData) => {
   
    if(!formData) return { error: `Form data is missing` };

    const user = await getSession(); //get loggedin user

    const newContact: ContactType = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      userId: user?.id,
    };

    try{
      await createContact(newContact);  //API call
      revalidatePath("/contact");
      return { success: true };
    }
    catch(error){
       console.log("Error creating contact : ", error);
       return { error: "Failed to create contact" };
    }

}

export const updateContactAction = async(prevState: any,formData: FormData) => {
    
    const id = formData.get("id") as string;

    const user = await getSession(); //get loggedin user

    const updatedContact: ContactType = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      userId: user?.id,
    };

    try{
      await updateContact(id, updatedContact);  //API call
      revalidatePath("/contact");
      return { success: true };
    }
    catch(error){
       console.log("Error updating contact : ", error);
       return { error: "Failed to update contact" };
    }

}

export const deleteContactAction = async(prevState: any,formData: FormData) => {

  const id = formData.get("id") as string;

  try{
    await deleteContact(id); //delete Contact API call
    revalidatePath("/contact");  //revalidates the cache as maybe the contact got cached and is still in cache after deleting it
    return { success: true }; 
   }
  catch(error){
    console.log("Error deleting contact : ", error);
    return { error: "Failed to delete contact" };
  }

}