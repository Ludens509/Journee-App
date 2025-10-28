import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import apiService from '../../apiService/apiService.mjs';
import { useAuth } from '../../context/authContext';
import { toast } from 'react-toastify';

const PostEditView = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cookies } = useAuth();
  const { id } = useParams();
  const location = useLocation();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your blog content...',
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline',
        },
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] px-4 py-3',
      },
    },
  });

  // Prefill form if post data passed via location.state or fetch
  useEffect(() => {
    async function load() {
      if (location.state) {
        const post = location.state;
        setTitle(post.title);
        editor.commands.setContent(post.content);
        return;
      }

      if (id) {
        try {
          const post = await apiService.getPostById(id, cookies?.token);
          setTitle(post.title);
          editor.commands.setContent(post.content);
        } catch (err) {
          console.error('Failed to load post for edit', err);
        }
      }
    }

    if (editor) load();
  }, [editor, location.state, id, cookies?.token]);

  // Toolbar button component
  const MenuButton = ({ onClick, active, disabled, children, title }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-2 rounded hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors ${
        active ? 'bg-gray-300 font-bold' : ''
      }`}
    >
      {children}
    </button>
  );

  // Handle image upload
  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  // Handle link
  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl);

    if (url === null) return;

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }

    if (!editor.getText().trim()) {
      setError('Please enter some content');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const postData = {
        title: title.trim(),
        content: editor.getHTML(), // Get HTML content
        // Or use editor.getJSON() for JSON format
      };

      const response = await apiService.updatePost(id, postData, cookies.token);
      // console.log('Post updated:', response);
      toast.success('Post updated successfully!');
      // Navigate back to post details
      navigate(`/posts/${id}`, { state: response });
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err.response?.data?.message || 'Failed to create post');
      toast.error('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Your changes will be lost.')) {
      navigate(-1);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Create New Blog Post</h1>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
            >
              {loading ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Title Input */}
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog title..."
            className="w-full text-4xl font-bold border-none outline-none focus:ring-0 placeholder-gray-300"
            autoFocus
          />
        </div>

        {/* Editor Toolbar */}
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
          <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
            {/* Text Formatting */}
            <MenuButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              active={editor.isActive('bold')}
              title="Bold (Ctrl+B)"
            >
              <strong>B</strong>
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              active={editor.isActive('italic')}
              title="Italic (Ctrl+I)"
            >
              <em>I</em>
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              active={editor.isActive('underline')}
              title="Underline (Ctrl+U)"
            >
              <u>U</u>
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              active={editor.isActive('strike')}
              title="Strikethrough"
            >
              <s>S</s>
            </MenuButton>

            <div className="w-px bg-gray-300 mx-1" />

            {/* Headings */}
            <MenuButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              active={editor.isActive('heading', { level: 1 })}
              title="Heading 1"
            >
              H1
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              active={editor.isActive('heading', { level: 2 })}
              title="Heading 2"
            >
              H2
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              active={editor.isActive('heading', { level: 3 })}
              title="Heading 3"
            >
              H3
            </MenuButton>

            <div className="w-px bg-gray-300 mx-1" />

            {/* Lists */}
            <MenuButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              active={editor.isActive('bulletList')}
              title="Bullet List"
            >
              • List
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              active={editor.isActive('orderedList')}
              title="Numbered List"
            >
              1. List
            </MenuButton>

            <div className="w-px bg-gray-300 mx-1" />

            {/* Alignment */}
            <MenuButton
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              active={editor.isActive({ textAlign: 'left' })}
              title="Align Left"
            >
              ⬅
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              active={editor.isActive({ textAlign: 'center' })}
              title="Align Center"
            >
              ↔
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              active={editor.isActive({ textAlign: 'right' })}
              title="Align Right"
            >
              ➡
            </MenuButton>

            <div className="w-px bg-gray-300 mx-1" />

            {/* Quote & Code */}
            <MenuButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              active={editor.isActive('blockquote')}
              title="Quote"
            >
              "
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              active={editor.isActive('codeBlock')}
              title="Code Block"
            >
              {'</>'}
            </MenuButton>

            <div className="w-px bg-gray-300 mx-1" />

            {/* Link & Image */}
            <MenuButton
              onClick={setLink}
              active={editor.isActive('link')}
              title="Add Link"
            >
              🔗
            </MenuButton>

            <MenuButton
              onClick={addImage}
              title="Add Image"
            >
              🖼️
            </MenuButton>

            <div className="w-px bg-gray-300 mx-1" />

            {/* Undo/Redo */}
            <MenuButton
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              title="Undo (Ctrl+Z)"
            >
              ↶
            </MenuButton>

            <MenuButton
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              title="Redo (Ctrl+Y)"
            >
              ↷
            </MenuButton>
          </div>

          {/* Editor Content */}
          <EditorContent editor={editor} />
        </div>

        {/* Character count */}
        <div className="text-sm text-gray-500 text-right">
          {editor.storage.characterCount?.characters() || 0} characters
        </div>
      </form>
    </div>
  );
};

export default PostEditView;