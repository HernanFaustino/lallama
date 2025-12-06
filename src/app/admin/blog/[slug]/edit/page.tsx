'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BlogEditor from '@/components/BlogEditor/BlogEditor';

export default function EditPostPage() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Traer contenido del post desde tu API
    const fetchPost = async () => {
      // Ejemplo con dummy
      const postContent = `<h2>Contenido de ${slug}</h2>`;
      setContent(postContent);
    };
    fetchPost();
  }, [slug]);

  const handleSave = async () => {
    console.log('Guardando post editado:', content);
    // fetch a tu API route para actualizar
  };

  return (
    <div>
      <h1>Editar Post: {slug}</h1>
      <BlogEditor content={content} onChange={setContent} />
      <button onClick={handleSave} style={{ marginTop: '1rem' }}>
        Guardar cambios
      </button>
    </div>
  );
}
