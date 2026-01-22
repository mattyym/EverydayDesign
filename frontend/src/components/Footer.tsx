import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          <strong>Email:</strong> <a href="mailto:everydayinteriorsbylaura@gmail.com">everydayinteriorsbylaura@gmail.com</a>{" "}
        </p>
        <nav className="footer-nav">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
