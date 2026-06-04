import { usersTable } from "@/db/schema"
import db from "@/index";
import { eq , and} from "drizzle-orm";


export const getUsersByEmailAndPassword = async( {email ,password} : {email:string, password:string} ) => {
  const [user] = await db.select().from(usersTable)
           .where(and ( eq(usersTable.email, email) ,
                        eq(usersTable.password,password) 
                     )).limit(1);    //because email is unique, so the first row match will be the actual user.

  return user;                   
}