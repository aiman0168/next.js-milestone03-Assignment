'use client'
import { useState } from 'react';
interface Comment {
  author: string;
  content: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      setComments((prev) => [...prev, newComment]);
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="author"
          value={newComment.author}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="border p-2 w-full mb-2"
        />
        <textarea
          name="content"
          value={newComment.content}
          onChange={handleInputChange}
          placeholder="Your Comment"
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="px-6 py-3 inline-block text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-base hover:bg-gradient-to-l">Submit Comment</button>
      </form>

      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border-t py-2">
              <strong>{comment.author}</strong>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-600'>No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;