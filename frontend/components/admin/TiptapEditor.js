'use client';

import { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Bold, Italic, List, ListOrdered, Link2, Redo, Undo, Code, Eye } from 'lucide-react';
import { useCallback } from 'react';

// --- The Toolbar Component remains the same ---
const MenuBar = ({ editor, currentView, onViewChange }) => {
    if (!editor) return null;

    const setLink = useCallback(() => {
        const url = window.prompt('URL', editor.getAttributes('link').href || '');
        if (url === null) return;
        if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    const buttonClass = (type, options = {}) => `p-2 rounded-md transition-colors ${editor.isActive(type, options) ? 'bg-iit-blue text-white' : 'bg-gray-200 hover:bg-gray-300'}`;
    const viewButtonClass = (view) => `px-3 py-1.5 text-xs font-semibold rounded-md ${currentView === view ? 'bg-iit-maroon text-white' : 'bg-gray-200 hover:bg-gray-300'}`;

    return (
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-gray-100 border-b border-gray-300 rounded-t-md">
            <div className="flex flex-wrap items-center gap-2">
                <button disabled={currentView === 'text'} onClick={() => editor.chain().focus().toggleBold().run()} className={buttonClass('bold')}><Bold size={16} /></button>
                <button disabled={currentView === 'text'} onClick={() => editor.chain().focus().toggleItalic().run()} className={buttonClass('italic')}><Italic size={16} /></button>
                <button disabled={currentView === 'text'} onClick={() => editor.chain().focus().toggleBulletList().run()} className={buttonClass('bulletList')}><List size={16} /></button>
                <button disabled={currentView === 'text'} onClick={() => editor.chain().focus().toggleOrderedList().run()} className={buttonClass('orderedList')}><ListOrdered size={16} /></button>
                <button disabled={currentView === 'text'} onClick={setLink} className={buttonClass('link')}><Link2 size={16} /></button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button disabled={currentView === 'text'} onClick={() => editor.chain().focus().undo().run()}><Undo size={16} /></button>
                <button disabled={currentView === 'text'} onClick={() => editor.chain().focus().redo().run()}><Redo size={16} /></button>
            </div>
            <div className="flex items-center gap-1">
                <button onClick={() => onViewChange('visual')} className={viewButtonClass('visual')}><Eye size={14} className="inline mr-1"/>Visual</button>
                <button onClick={() => onViewChange('text')} className={viewButtonClass('text')}><Code size={14} className="inline mr-1"/>Text</button>
            </div>
        </div>
    );
};


// --- The Main Editor Component (with improved logic) ---
const AdvancedTiptapEditor = ({ content, onChange }) => {
    const [view, setView] = useState('visual');

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' } }),
        ],
        content: content || '',
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-sm max-w-none p-4 bg-white rounded-b-md border border-t-0 border-gray-300 focus:outline-none min-h-[150px]',
            },
        },
        onUpdate: ({ editor }) => {
            // When in visual mode, update the parent state
            if (view === 'visual') {
                onChange(editor.getHTML());
            }
        },
    });

    // NEW: Effect to sync editor when content prop changes from parent
    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content, false); // Update editor without re-triggering onUpdate
        }
    }, [content, editor]);

    const handleViewChange = (newView) => {
        if (view === 'text' && newView === 'visual') {
            // When switching from Text to Visual, ensure the editor has the latest raw HTML
            // The `content` prop already holds the latest value from the textarea
            if (editor && content !== editor.getHTML()) {
                editor.commands.setContent(content, false);
            }
        }
        setView(newView);
    };

    return (
        <div>
            <MenuBar editor={editor} currentView={view} onViewChange={handleViewChange} />
            {view === 'visual' ? (
                <EditorContent editor={editor} />
            ) : (
                <textarea
                    className="w-full p-4 font-mono text-sm bg-gray-800 text-green-400 rounded-b-md border border-t-0 border-gray-300 focus:outline-none min-h-[150px] resize-y"
                    value={content}
                    // The onChange for the textarea now directly updates the parent state
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
};

export default AdvancedTiptapEditor;