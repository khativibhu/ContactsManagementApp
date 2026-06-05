import db from "@/index";
import { ContactType } from "../_types/contact";
import { contactsTable } from "@/db/schema";
import {eq, gte} from "drizzle-orm";
import { revalidatePath } from "next/cache";

//DB Calls

//get all User Contacts
export const getContacts = async(userId: number) => {
    const response = await db.select().from(contactsTable).where(eq(contactsTable.userId, userId));
    return response;
}

export const getContactById = async(id: number) => {
    const [response] = await db.select().from(contactsTable).where(eq(contactsTable.id, id));
    return response;
}

export const createContact = async (contact: ContactType) => {

    const response = await db.insert(contactsTable).values({name: contact.name, email: contact.email, userId: contact.userId});
    console.log("new contact created!",response);
   // revalidatePath("/statistics");   //regenerates when new contact is created (On-demand ISR)
    return response;
}

export const updateContact = async (id: number, contact: ContactType) => {
    const response = await db.update(contactsTable).set( {...contact, updatedAt: new Date() } ).where(eq(contactsTable.id, id));
   // revalidatePath("/statistics");
    return response;
}

export const deleteContact = async (id: number) => {
    const response = await db.delete(contactsTable).where(eq(contactsTable.id, id));
    //revalidatePath("/statistics");  //On-demand ISR
    return response;
}

//for stats page
export const getAllContacts = async() => {
    const rows = await db.select().from(contactsTable);
    return rows;
} 

export const getActiveUsers = async() => {
    const rows = await db.selectDistinct( {userId: contactsTable.userId} ).from(contactsTable);
    return rows;
}

export const getContactsCreatedToday = async() => {
    const startOfToday = new Date();

    startOfToday.setHours(0,0,0,0);

    const contacts = await db.select().from(contactsTable)
                     .where(gte(contactsTable.createdAt, startOfToday));
    
    return contacts;                 
}