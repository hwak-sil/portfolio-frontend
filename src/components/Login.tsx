import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from "../api/axiosInstance";

const Login = () => {

  const navigate = useNavigate();

  const goToRegist = () => {
    navigate('/regist')
  }

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');


  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    
        try{
            await api.post(`/auth/login`,{
                userId:id, 
                password:password,
            })
            alert('로그인되었습니다.\n 목록으로 이동합니다.')
            navigate('/posts')
        } catch(err:any){
            console.error('login fail', err)
            const msg = err.response?.data?.message || "서버 오류가 발생했습니다.";
            setErrorMsg(msg); // 예: "비밀번호가 일치하지 않습니다."
        }
    }
    

  return (
    <div>
      <h2>📋 로그인</h2>
      <form onSubmit={handleSubmit}>
      <table>
        <tbody>
            <tr>
                <th><label htmlFor="userid"></label>아이디</th>
                <td><input id="userid" type='text' value={id} onChange={(e) => setId(e.target.value)} required /></td>
            </tr>
            <tr>
                <th><label htmlFor="userpass"></label>비밀번호</th>
                <td><input id="userpass" type='password' value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
            </tr>
        </tbody>
      </table>
      
      <button type="submit" style={{color:'white', background:'grey'}}>로그인</button>
      {errorMsg && (
        <p style={{ color: "red", marginTop: "10px" }}>
          ⚠ {errorMsg}
        </p>
      )}
      </form>
      <button style={{color:'white', background:'grey'}} onClick={goToRegist}>회원가입</button>
    </div>
    
    
  );
};

export default Login;
