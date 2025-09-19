'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Bold, Italic, List, ListOrdered, Link2, Redo, Undo } from 'lucide-react';
import { useCallback } from 'react';

// The Toolbar component remains the same
const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        if (url === null) return;
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    const buttonClass = (type, options = {}) => 
        `p-2 rounded-md transition-colors ${
            editor.isActive(type, options) 
                ? 'bg-iit-blue text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
        }`;

    return (
        <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-100 border-b border-gray-300 rounded-t-md">
            <button onClick={() => editor.chain().focus().toggleBold().run()} className={buttonClass('bold')}><Bold size={16} /></button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()} className={buttonClass('italic')}><Italic size={16} /></button>
            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={buttonClass('bulletList')}><List size={16} /></button>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={buttonClass('orderedList')}><ListOrdered size={16} /></button>
            <button onClick={setLink} className={buttonClass('link')}><Link2 size={16} /></button>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <button onClick={() => editor.chain().focus().undo().run()}><Undo size={16} /></button>
            <button onClick={() => editor.chain().focus().redo().run()}><Redo size={16} /></button>
        </div>
    );
};

// --- The Main Editor Component ---
const TiptapEditor = ({ content, onChange }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3] },
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                HTMLAttributes: {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
            }),
        ],
        content: content || '',
        // --- ADD THIS LINE AS PER THE ERROR MESSAGE ---
        immediatelyRender: false, 
        // ---------------------------------------------
        editorProps: {
            attributes: {
                class: 'prose prose-sm max-w-none p-4 bg-white rounded-b-md border border-t-0 border-gray-300 focus:outline-none min-h-[150px]',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;