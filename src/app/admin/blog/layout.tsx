'use client';
import Link from 'next/link';

export default function AdminBlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 200, padding: '1rem', borderRight: '1px solid #eee' }}>
        <h2>Admin Blog</h2>
        <nav>
          <ul>
            <li>
              <Link href="/admin/blog">Posts</Link>
            </li>
            <li>
              <Link href="/admin/blog/new">Nuevo Post</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>{children}</main>
    </div>
  );
}
