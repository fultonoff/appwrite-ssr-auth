import { signInWithEmail } from "@/actions";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { getUser } from "@/app/libs/getUser";
import { SubmitButton } from "@/components/SubmitButton";
import Link from 'next/link'

const LoginPage = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-muted-foreground">
      <form action={signInWithEmail} className="flex flex-col gap-2">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="password" />
        <SubmitButton>
          Log in
        </SubmitButton>
      <Link href='/register' className="underline">Register</Link>
      </form>
    </main>
  );
};

export default LoginPage;
