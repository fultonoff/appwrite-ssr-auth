
import { cookies } from "next/headers";
import { createSessionClient } from "./appwrite";

export const getUser = async ()=>{
    try {
      const { account } = createSessionClient(cookies());
      const user = await account.get();

      return user
      
    } catch (error) {
      console.log(error);
    }
  }