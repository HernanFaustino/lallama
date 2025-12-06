'use client';
import Link from 'next/link';

const dummyPosts = [
  { slug: 'mi-primer-post', title: 'Mi Primer Post' },
  { slug: 'tutorial-tiptap', title: 'Tutorial Tiptap' },
];

export default function AdminBlogPage() {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {dummyPosts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '0.5rem' }}>
            {post.title} <Link href={`/admin/blog/${post.slug}/edit`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
