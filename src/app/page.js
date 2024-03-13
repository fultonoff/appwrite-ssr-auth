
import { Button } from "../components/ui/button";
import { logout } from "@/actions";
import { getUser } from "./libs/getUser";
import Link from 'next/link'


export default async function Home() {
  

  const user = await getUser()
 
if(user){

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

}else{
  return(
    <div>
      <Link href='/login' className="underline">Log in</Link>
      <Link href='/login' className="underline">Register</Link>
    </div>
  )
}
   
  
 

}
