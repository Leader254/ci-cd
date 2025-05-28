import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Home Page</h1>
        <p>Welcome to our site!</p>
      </header>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <section>
        <p>This is the main content area of the home page.</p>
      </section>
    </main>
  );
}
