import { signUpWithEmail } from "@/actions";
import { getUser } from "@/app/libs/getUser";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import Link from "next/link";

const RegisterPage = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-muted-foreground">
      <form className="flex flex-col gap-2" action={signUpWithEmail}>
        <Input type="text" name="name" placeholder="fullName" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <SubmitButton>Register</SubmitButton>
        <Link href="/login" className="underline">
          Login
        </Link>
      </form>
    </main>
  );
};

export default RegisterPage;
