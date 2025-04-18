import React from "react";
import { Link , useNavigate  } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import api from "../../api/axiosInstance";
import Button from "../common/Button";
import useIsMobile from "../hooks/useIsMobile"
import Home from "../../assets/home.png"


const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState("");
  const nickname = localStorage.getItem("nickname");
  const isLoggedIn = !!nickname;
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);

  const isMobile = useIsMobile();
  
  // ref 초기화 이후 전역 함수 등록
  useEffect(() => {
    (window as any).focusLoginId = () => {
      idRef.current?.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 언마운트 시 제거 (선택)
    return () => {
      delete (window as any).focusLoginId;
    };
  }, []);

  const toggleMobileNav = () => {
    const userid = localStorage.getItem("userid");
    if (!userid) {
      alert("로그인 후 글쓰기가 가능합니다.");
      (window as any).focusLoginId?.();
    } else {
      navigate("/write");
    }
  };

  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post(`/auth/login`, {
        userId: id,
        password: password,
      });
      const nickname = res.data.nickname;
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userid", id);
      window.location.reload();
    } catch (err: any) {
      const msg = err.response?.data?.message || "서버 오류가 발생했습니다.";
      setErrorMsg(msg);
    }
  };
  return (
    <div>
      {/* Board 전용 Navbar */}
      <nav className="bg-neutral text-neutral-content px-4 py-3 flex justify-between items-center">
        <div className="text-sm sm:text-base md:text-lg font-bold">
          <Link to="/board"><img src={Home} className="w-10 h-10" alt="홈" /></Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4 ">
        {!isLoggedIn &&  <div><Link to="/regist" className="hover:text-orange-400 text-sm sm:text-base md:text-lg"> 회원가입</Link><div className="h-5 mt-1"></div></div>}
        
        {!isLoggedIn ? (
            <div className="flex flex-col items-end min-h-[20px]"> {/* 높이 고정 */}
              <form onSubmit={handleSubmit} className="flex gap-2 items-center flex-wrap sm:flex-nowrap w-full max-w-md">
                <input
                  ref={idRef}
                  type="text"
                  placeholder="ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="input input-sm flex-1 min-w-[80px] max-w-[100px]"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-sm flex-1 min-w-[80px] max-w-[100px]"
                  required
                />
                <Button type="submit" size="sm">로그인</Button>
              </form>
              {/* 항상 공간을 차지하도록 높이 유지 */}
              <div className="h-5 mt-1">
                {errorMsg && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}
              </div>
            </div>
          ) : (
            <>
              <span>
                안녕하세요, <strong>{nickname}</strong>님
              </span>
              <Button size="sm" onClick={() => {
                localStorage.removeItem("nickname");
                localStorage.removeItem("userid");
                window.location.reload();
              }}>
                로그아웃
              </Button>
            </>
          )}
      </div>
      <div className="md:hidden">
        <p className='text-sm sm:text-base md:text-lg'>샘플게시판</p>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileNav}>☰</button>
      </div>
      </nav>

      {/* 본문 */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export default BoardLayout;
