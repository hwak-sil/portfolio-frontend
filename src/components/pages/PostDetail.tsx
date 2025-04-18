import { useEffect, useState } from 'react';
import api from "../../api/axiosInstance";
import { Post } from '../../types/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import dayjs from 'dayjs';
import CommentSection from './CommentSection';
import Button from '../common/Button';



const PostDetail = () => {
  const [post, setPosts] = useState<Post | null>(null);
  const [error, setError] = useState(false); // 에러 여부 상태 추가
  const navigate = useNavigate();

  const {id} = useParams()
  const { userid } = useAuth();

  const goToList = () => {
    navigate(`/category/${post?.category}`)
  }

  const handleDelete  = async () => {
    try{
        await api.delete(`/posts/${id}`)
        alert('삭제되었습니다.\n 목록으로 이동합니다.')
        navigate('/posts')
    } catch(err){
        console.error('delete fail', err)
        alert('서버 오류로 삭제에 실패했습니다.')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 조회수 먼저 증가
        await api.put(`/posts/${id}/view`);
        // 그 다음 게시글 가져오기 (조회수 반영됨)
        const res = await api.get(`/posts/${id}`);
        setPosts(res.data);
      } catch (err) {
        console.error('조회 오류', err);
        setError(true);
      }
    };
    fetchData();
  }, [id]);


  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-xl shadow-lg space-y-6">
      {/* 제목 */}
      <h2 className="text-2xl font-bold">{post?.title}</h2>
  
      {/* 메타 정보 */}
      <p className="text-sm text-gray-400">
        작성자: {post?.nickname} &nbsp;|&nbsp; 
        등록일: {post?.createdAt && dayjs(post.createdAt).format('YYYY-MM-DD HH:mm:ss')} &nbsp;|&nbsp;
        조회수: {post?.views}
      </p>
  
      {/* 에러 메시지 */}
      {error && (
        <p className="text-red-500 font-medium">
          ⚠ 백엔드 서버가 꺼져 있어 내용을 불러올 수 없습니다.
        </p>
      )}
  
      {/* 본문 내용 */}
      <div className="prose dark:prose-invert">
        <p>{post?.content}</p>
      </div>

      <div className="bg-base-200 p-4 rounded-lg shadow-sm flex justify-between items-center text-sm">
        <button className="btn btn-sm btn-outline">← 이전글</button>
        <button className="btn btn-sm btn-secondary" onClick={goToList}>목록으로</button>
        {post && post.writerId === userid && (
          <>
            <Button
              onClick={() =>
                navigate('/write', {
                  state: {
                    id: post.id,
                    title: post.title,
                    content: post.content,
                  },
                })
              }
            >
              수정
            </Button>
            <Button onClick={handleDelete}>
              삭제
            </Button>
          </>
        )}
        <button className="btn btn-sm btn-outline">다음글 →</button>
        
      </div>
      <div className='border-b border-zinc-300'></div>
  
      {/* 댓글 섹션 */}
      <div className="bg-base-100 p-6 rounded-xl shadow-md space-y-4">
      <div className="badge badge-neutral text-sm w-full">댓글 : 7개</div>
        {post && <CommentSection postId={post.id} />}
      </div>
      
  
    </div>
  );
};

export default PostDetail;
