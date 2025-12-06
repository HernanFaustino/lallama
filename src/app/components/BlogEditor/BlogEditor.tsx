'use client';

import { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Heading from '@tiptap/extension-heading';
import BlogEditorToolbar from '../BlogEditorToolbar/BlogEditorToolbar';
import { SimpleEditor } from '../tiptap-templates/simple/simple-editor';

interface BlogEditorProps {
  content?: string;
  onChange?: (html: string) => void;
}

export default function BlogEditor({ content = '', onChange }: BlogEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: true }),
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  // Actualiza contenido cuando se recibe uno externo (editar post)
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div style={{ width: 600 }} className="blogEditorContainer">
      <SimpleEditor />
    </div>
  );
}
