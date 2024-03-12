import { createAdminClient } from "./libs/appwrite"
import { createSessionClient } from "./libs/appwrite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Button } from "../components/ui/button";
import { logout } from "@/actions";


export default async function Home() {

  const { account } = createSessionClient(cookies());
  const user = await account.get();
  
      
      return (
        <main>
          <div>
            <h1>Logged in as</h1>
            <h2>{user.$id}</h2>

            <form action={logout}>
              <Button>Log out</Button>
            </form>
          </div>
          
        </main>
      );
    

}
