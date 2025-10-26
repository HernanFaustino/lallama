'use client';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div
        className={`${styles.container} ${isOpen ? styles.containerOpen : styles.containerClosed}`}
      >
        <Menu className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} />
        <nav className={[styles.nav, isOpen ? styles.navOpen : styles.navClosed].join(' ')}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Intro</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/portfolio">Portafolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.profile}>
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
