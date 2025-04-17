import { useState } from 'react';
import api from "../../api/axiosInstance";
import { useLocation, useNavigate } from 'react-router-dom';

const regist = () => {


    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickName] = useState("");
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home')
    }


    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false); // 비교 결과

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setPasswordMatch(value === passwordCheck); // 비교!
        if(value === passwordCheck){
            setPassErrorMsg("")
        }else{
            setPassErrorMsg("❌ 패스워드를 확인하세요")
        }
        
    };
      
    const handlePasswordCheck = (value: string) => {
        setPasswordCheck(value);
        setPasswordMatch(password === value); // 비교!
        setPassErrorMsg("")
        if(value === passwordCheck){
            setPassErrorMsg("")
        }else{
            setPassErrorMsg("❌ 패스워드를 확인하세요")
        }
    };

    const [errorMsg, setErrorMsg] = useState("");
    const [isIdAvailable, setIsIdAvailable] = useState(false);
    const [idChecked, setIdChecked] = useState(false);
    const [passErrMsg, setPassErrorMsg] = useState("");
    

    const idCheck = async () => {
        if(id === ''){
            setIsIdAvailable(false)
            setErrorMsg("❌ 아이디를 입력해주세요."); 
            return
        }
        try{
            await api.get('/register/check',{
                params:{ userId:id}
            })

            setIsIdAvailable(true)
            setIdChecked(true)
            setErrorMsg("✅ 등록 가능한 아이디입니다.");
        } catch(err : any){
            console.error('save fail', err)
            setIsIdAvailable(false)
            setErrorMsg("❌ " + err?.response?.data?.message); 
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if(!idChecked){
            alert("중복확인 버튼을 눌러주세요");
            return
        }
        if(!passwordCheck){
            alert("패스워드와 패스워드확인이 맞지 않습니다.");
            return
        }

        try{
            await api.post('/register/new',{
                userid:id,
                password: password,
                nickname: nickname,
            })
            alert('회원가입되었습니다.')
            localStorage.setItem("nickname", nickname);
            localStorage.setItem("userid", id);
            window.location.href = "/";
            
        } catch(err){
            console.error('save fail', err)
            alert('서버 오류로 사용자등록을 실패했습니다.')
        }
    }

    return (
        <div>
        <h2>📋 회원가입</h2>
        <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <th>아이디</th>
                    <td><input type='text' value={id} onChange={(e) => {setId(e.target.value); setIdChecked(false);}} required/>
                        <button type="button" style={{color:'white', background:'grey'}} onClick={idCheck} >중복확인</button>
                        {errorMsg && (
                            <p style={{ 
                                color: isIdAvailable === true ? 'green' : 'red', 
                                marginTop: '5px' 
                              }}>
                                {errorMsg}
                              </p>
                        )}
                    </td>
                </tr>
                <tr>
                    <th>닉네임</th>
                    <td><input type='text' value={nickname} onChange={(e) => setNickName(e.target.value)} required /></td>
                </tr>
                <tr>
                    <th>패스워드</th>
                    <td><input type='text' value={password} onChange={(e) => handlePasswordChange(e.target.value)} required /></td>
                </tr>
                <tr>
                    <th>패스워드확인</th>
                    <td><input type='password' value={passwordCheck} onChange={(e) => handlePasswordCheck(e.target.value)} required />
                    {!passwordMatch && (
                        <p style={{ color: 'red', marginTop: '5px' }}>
                            {passErrMsg}
                        </p>
                    )}
                    </td>
                </tr>
            </tbody>
        </table>
        
        <button type="submit" style={{color:'white', background:'grey'}} >저장</button>
        </form>
        <button style={{color:'white', background:'grey'}} onClick={goToHome}>취소</button>
        </div>
    );
}

export default regist;