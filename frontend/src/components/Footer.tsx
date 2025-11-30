import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          <strong>Email:</strong> <a href="mailto:lamifsud93@gmail.com">lamifsud93@gmail.com</a>{" "}
          <strong>Phone:</strong> <a href="tel:+17345364022">734-536-4022</a> &copy; 2025 Everyday Design.
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
