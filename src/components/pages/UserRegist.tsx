import { useState } from 'react';
import api from "../../api/axiosInstance";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../common/Button';

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
            window.location.href = "/board";
            
        } catch(err){
            console.error('save fail', err)
            alert('서버 오류로 사용자등록을 실패했습니다.')
        }
    }

    return (
        <main className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow-lg">
        <h2 className='text-2xl font-bold mb-6'>📋 회원가입</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
            <label className="label">
                <span className="label-text">아이디</span>
            </label>
            <div className="flex gap-2">
                <input
                type="text"
                value={id}
                onChange={(e) => {
                    setId(e.target.value);
                    setIdChecked(false);
                }}
                required
                className="input input-bordered w-full"
                />
                <Button type="button" onClick={idCheck}>
                중복확인
                </Button>
            </div>
            {errorMsg && (
                <p
                className={`text-sm mt-1 ${
                    isIdAvailable ? "text-green-500" : "text-red-500"
                }`}
                >
                {errorMsg}
                </p>
            )}
            </div>

            {/* 닉네임 */}
            <div>
            <label className="label">
                <span className="label-text">닉네임</span>
            </label>
            <input
                type="text"
                value={nickname}
                onChange={(e) => setNickName(e.target.value)}
                required
                className="input input-bordered w-full"
            />
            </div>

            {/* 패스워드 */}
            <div>
            <label className="label">
                <span className="label-text">패스워드</span>
            </label>
            <input
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
                className="input input-bordered w-full"
            />
            </div>

            {/* 패스워드 확인 */}
            <div>
            <label className="label">
                <span className="label-text">패스워드 확인</span>
            </label>
            <input
                type="password"
                value={passwordCheck}
                onChange={(e) => handlePasswordCheck(e.target.value)}
                required
                className="input input-bordered w-full"
            />
            {!passwordMatch && (
                <p className="text-red-500 text-sm mt-1">{passErrMsg}</p>
            )}
            </div>

            {/* 버튼 */}
            <div className="flex justify-between mt-6">
            <Button type="submit" >
                회원가입
            </Button>
            <Button type="button"  onClick={goToHome}>
                취소
            </Button>
            </div>
        </form>
        </main>
    );
}

export default regist;