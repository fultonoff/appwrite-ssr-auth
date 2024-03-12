import { logout } from '@/actions';
import { createSessionClient } from '@/app/libs/appwrite';
import { Button } from '@/components/ui/button';
import { cookies } from 'next/headers';

const page = async() => {
    const { account } = createSessionClient(cookies());
  const user = await account.get();

  
  return (
    <main>
        <div>
            <h1>Logged in as</h1>
            <h2>{user.$id}</h2>
            <p>{user.email}</p>

            <form action={logout}>
              <Button>Log out</Button>
            </form>
          </div>
    </main>
  )
}

export default page