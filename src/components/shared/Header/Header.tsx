import Link from "next/link";
import { cookies } from "next/headers";

export const Header = () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("accessToken")?.value;
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/store">Store</Link>
        </ul>
        {token ? <p>Bienvenido</p> : <Link href="/login">Login</Link>}
      </nav>
    </header>
  );
};
