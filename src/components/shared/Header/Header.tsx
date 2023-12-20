import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/store">Store</Link>
        </ul>
      </nav>
    </header>
  );
};
