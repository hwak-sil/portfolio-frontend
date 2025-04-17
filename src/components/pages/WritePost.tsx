import { useState } from 'react';
import api from "../../api/axiosInstance";
import { useLocation, useNavigate } from 'react-router-dom';

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
        <div>
        <h2>📋 게시글 작성</h2>
        <table>
            <tbody>
                <tr>
                    <th>카테고리</th>
                    <td>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="humor">유머</option>
                            <option value="info">정보</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td><input type='text' value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td><textarea placeholder='자유롭게 내용을 입력하세요' value={postContent} onChange={(e) => setPostContent(e.target.value)}/></td>
                </tr>
            </tbody>
        </table>
        <button style={{color:'white', background:'grey'}} onClick={handleSubmit}>저장</button>
        <button style={{color:'white', background:'grey'}} onClick={goToList}>목록으로</button>
        </div>
    );
};

export default WritePost;
