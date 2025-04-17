import { useEffect, useState } from 'react';
import api from "../../api/axiosInstance";
import { Post } from '../../types/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import dayjs from 'dayjs';
import CommentSection from './CommentSection';



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
        alert('서버 오류로 삭제에에 실패했습니다.')
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

    <div>
      <h2>{post?.title}</h2>
      <p>작성자 {post?.writerId} || 등록일자 {post?.createdAt && dayjs(post.createdAt).format('YYYY-MM-DD HH:mm:ss')} || 조회수  {post?.views} </p>
      {error && (
        <p style={{ color: 'red' }}>⚠ 백엔드 서버가 꺼져 있어 내용을 불러올 수 없습니다.</p>
      )}
      <h2>{post?.content}</h2>

      {post && <CommentSection postId={post.id} />}

      

      <button style={{color:'white', background:'grey'}} onClick={goToList}>목록으로</button>
      
      {post && post.writerId ===  userid && (
        <>
        <button style={{color:'white', background:'grey'}} onClick={() => navigate('/write', {
            state:{
                id:post?.id,
                title:post?.title,
                content:post?.content
            }
            })}
        >수정</button>

        <button style={{color:'white', background:'grey'}} onClick={handleDelete}>삭제</button>
        </>
      )}

    </div>
    
  );
};

export default PostDetail;
