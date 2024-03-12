import { signInWithEmail } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSessionClient } from "@/app/libs/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



const LoginPage = async () => {
  const { account } = createSessionClient(cookies());
  const user = await account.get();
  if(user){
    redirect('/dashboard')
  }
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-red-400">
      <form action={signInWithEmail}>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="password" />
        <Button>Login</Button>
      </form>
    </main>
  );
};

export default LoginPage;
