import db from "@/index";
import { ContactType } from "../_types/contact";
import { contactsTable } from "@/db/schema";
import {eq} from "drizzle-orm";

//DB Calls

//get all User Contacts
export const getContacts = async(userId: number) => {
    const response = await db.select().from(contactsTable).where(eq(contactsTable.userId, userId));
    return response;
}

export const getContactById = async(id: number) => {
    const response = await db.select().from(contactsTable).where(eq(contactsTable.id, id));
    return response;
}

export const createContact = async (contact: ContactType) => {

    const response = await db.insert(contactsTable).values({name: contact.name, email: contact.email, userId: contact.userId});
    console.log("new contact created!",response);
    return response;
}

export const updateContact = async (id: number, contact: ContactType) => {
    const response = await db.update(contactsTable).set(contact).where(eq(contactsTable.id, id));
    return response;
}

export const deleteContact = async (id: number) => {
    const response = await db.delete(contactsTable).where(eq(contactsTable.id, id));
    return response;
}