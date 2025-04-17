import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Comment } from '../../types/Comment';
import api from "../../api/axiosInstance";

const CommentSection = ({ postId }: { postId: number }) => {

  const { userid } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    const res = await api.get(`/comments/${postId}`);
    setComments(res.data);
    console.log(res.data)
  };

  const submitComment = async () => {
    await api.post('/comments', {
      postId,
      writer: userid,
      content: newComment,
    });
    setNewComment('');
    fetchComments();
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h3>💬 댓글</h3>
      <ul>
        {comments.map((c, idx) => (
          <li key={idx}>
            <strong>{c.nickname}</strong>: {c.content} <small>({c.createdAt})</small>
          </li>
        ))}
      </ul>
      <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
      <button onClick={submitComment}>댓글 작성</button>
    </div>
  );
};

export default CommentSection;