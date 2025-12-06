'use client';
import BlogEditor from '@/components/BlogEditor/BlogEditor';
import { useState } from 'react';

export default function NewPostPage() {
  const [content, setContent] = useState('');

  const handleSave = async () => {
    // Aquí harías fetch a tu API route
    console.log('Guardando post:', content);
  };

  return (
    <div>
      <h1>Nuevo Post</h1>
      <BlogEditor content={content} onChange={setContent} />
      <button onClick={handleSave} style={{ marginTop: '1rem' }}>
        Guardar
      </button>
    </div>
  );
}
