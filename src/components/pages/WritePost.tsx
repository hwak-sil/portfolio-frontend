import { useState } from 'react';
import api from "../../api/axiosInstance";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const WritePost = () => {

    const location = useLocation();
    const {id, title, content, category} = location.state || {};

    const [postTitle, setPostTitle] = useState(title || '');
    const [postContent, setPostContent] = useState(content || '');
    const [postCategory, setCategory] = useState(category || 'humor');
    const navigate = useNavigate();

    const goToList = () => {
        navigate('/category/:postCategory')
    }

  

    const handleSubmit = async () => {
        try{
            if(id){
                await api.put(`/posts/${id}`,{
                    title:postTitle, 
                    content:postContent,
                    category:postCategory,

                })
                alert('수정되었습니다.')
                navigate(`/posts/${id}`)
            }else{
                const res =  await api.post('/posts',{
                    title:postTitle, 
                    content:postContent,
                    category:postCategory,
                    writerId:localStorage.getItem("userid"),
                })
                const newPostId = res.data.id;
                alert('저장되었습니다.')
                navigate(`/posts/${newPostId}`)
            }
            
        } catch(err){
            console.error('save fail', err)
            alert('서버 오류로 저장에 실패했습니다.')
        }
    }


    return (
        <main className="max-w-3xl mx-auto p-6 bg-base-100 rounded-xl shadow-lg">
        <h2 className='text-2xl font-bold mb-6'>📋 게시글 작성</h2>
        <div className="space-y-4">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">카테고리</span>
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="select select-bordered w-full bg-base-100 text-white dark:text-black"
                    aria-label="카테고리 선택"
                >
                    <option value="humor">공사계약</option>
                    <option value="info">KCD분류</option>
                    <option value="faq">FAQ</option>
                    <option value="qna">Q&A</option>
                </select>
            </div>

            <div>
                <label className="label">
                    <span className="label-text">제목</span>
                </label>
                <input 
                    type='text' 
                    value={postTitle} 
                    onChange={(e) => setPostTitle(e.target.value)}
                    className='input input-bordered w-full'
                    required
                />
            </div>
            <div>
                <label className="label">
                    <span className="label-text">내용</span>
                </label>
                <textarea
                    placeholder='타인에게 불쾌감을 주는 글을 쓰실 경우 읽는 분이 맘이 아픕니다'
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="textarea textarea-bordered w-full"
                    rows={6}
                    required
                />
            </div>
        
            <div className="flex justify-between mt-6">
                <Button onClick={handleSubmit}>
                    저장
                </Button>
                <Button onClick={goToList}>
                    목록으로
                </Button>
            </div>
        </div>
        </main>
    );
};

export default WritePost;
