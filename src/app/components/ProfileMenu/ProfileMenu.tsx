'use client';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User, LogIn, LogOut } from 'lucide-react';
import styles from './ProfileMenu.module.css';

export default function ProfileMenu() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = session && status === 'authenticated';

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <User size={22} />
        {session?.user?.name?.split(' ')?.[0]}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {isLoggedIn ? (
            <button className={styles.menuItem} onClick={() => signOut({ callbackUrl: '/' })}>
              <LogOut size={16} />
              Cerrar sesión
            </button>
          ) : (
            <button className={styles.menuItem} onClick={() => router.push('/login')}>
              <LogIn size={16} />
              Iniciar sesión
            </button>
          )}
        </div>
      )}
    </div>
  );
}
