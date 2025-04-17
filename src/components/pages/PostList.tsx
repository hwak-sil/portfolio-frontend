import { useEffect, useState  } from 'react';
import api from "../../api/axiosInstance";
import { Post } from '../../types/Post';
import { useNavigate, useParams } from 'react-router-dom';
import Button from "../common/Button";


const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false); // 에러 여부 상태 추가
  const { category } = useParams();
  const navigate = useNavigate();

  const goToWrite = () => {
    const userid = localStorage.getItem("userid");
    if (!userid) {
      alert("로그인 후 글쓰기가 가능합니다.");
      (window as any).focusLoginId?.();
    } else {
      navigate("/write");
    }
  };

  const categoryMap: { [key: string]: string } = {
    humor: "⛏️ 공사계약 목록",
    info: "💉 KCD분류 목록",
    faq: "💡  FAQ",
    qna: "💡  Q&A",

  };
  
  const catename = categoryMap[category ?? ''] || "기타";

  useEffect(() => {
    api.get<Post[]>(`/posts?category=${category}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error('API 호출 실패:', err);
        setError(true); // 에러 발생 시 상태 업데이트
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
    {/* 게시판 제목 + 글쓰기 버튼 */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold">📋 {catename} </h2>
      <Button size="sm" onClick={goToWrite}>✏️ 글쓰기</Button>
    </div>
    <div className='border-b border-zinc-300'></div>

    {/* 에러 메시지 */}
    {error && (
      <div className="text-error bg-error-content p-2 rounded">
        ⚠ 백엔드 서버가 꺼져 있어 목록을 불러올 수 없습니다.
      </div>
    )}

    {/* 게시글 목록 */}
    <ul className="divide-y divide-base-300">
      {posts.map(post => (
        <li key={post.id} className="py-3">
          <a href={`/posts/${post.id}`} className="text-sm sm:text-base md:text-lg font-semibold hover:text-blue-400">
            {post.title}
          </a>
          <p className="text-sm">조회수 {post.views}</p>
        </li>
      ))}
    </ul>
  </div>
  )
};

export default PostList;
