import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Comment } from '../../types/Comment';
import api from "../../api/axiosInstance";
import dayjs from 'dayjs';
import Button from '../common/Button'

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
    if(!userid){
      alert("로그인 후 등록 가능합니다.")
      return
    }
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
    <div className="mt-5 space-y-4">
      
  
      {/* 댓글 리스트 */}
      <ul className="space-y-3">
        {comments.map((c, idx) => (
          <li key={idx} className="bg-base-200 p-4 rounded-xl">
            <p className="text-sm text-gray-400 mb-1">
              <strong className="text-base-content">{c.nickname}</strong> · {dayjs(c.createdAt).format('YYYY-MM-DD HH:mm:ss')}
            </p>
            <p className="text-base">{c.content}</p>
          </li>
        ))}
      </ul>
      <div className="bg-base-100 p-6 rounded-xl shadow-lg mt-8 space-y-4">
        <h3 className="text-xl font-bold pb-2 flex items-center gap-2">💬 댓글쓰기</h3>
        {/* 댓글 입력창 */}
        <div className="flex gap-2">
          <textarea
            className="textarea textarea-bordered w-full resize-y"
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
          />
          <Button size="sm" className="btn btn-neutral self-start" onClick={submitComment}>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
  
};

export default CommentSection;