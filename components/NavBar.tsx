import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <Link className={styles.nav} href="/">
        Home
      </Link>
      <Link className={styles.nav} href="/about">
        About Us
      </Link>
    </>
  );
}
