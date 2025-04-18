import { Link} from 'react-router-dom';
import useIsMobile from "./hooks/useIsMobile"
import { ThemeToggle } from './ThemeToggle';
import Home from "../assets/home.png"

const NavBar = () => {
  const isMobile = useIsMobile();
  const toggleMobileNav = () => {
    const userid = localStorage.getItem("userid");
    if (!userid) {
      alert("로그인 후 글쓰기가 가능합니다.");
      (window as any).focusLoginId?.();
    } 
  };

  const Left = isMobile ? <div ><Link to="/board"><img src={Home} className="w-10 h-10" alt="홈" /></Link></div> : 
                              <div className="flex flex-wrap gap-6">
                                <Link to="/" className="hover:text-orange-400 text-sm sm:text-base md:text-lg">🏠 Home</Link>
                                <Link to="/skills" className="hover:text-orange-400 text-sm sm:text-base md:text-lg"> 스킬</Link>
                                <Link to="/projects" className="hover:text-orange-400 text-sm sm:text-base md:text-lg"> 프로젝트</Link>
                                <Link to="/exp" className="hover:text-orange-400 text-sm sm:text-base md:text-lg"> 경력</Link>
                                <Link to="/contact" className="hover:text-orange-400 text-sm sm:text-base md:text-lg"> 연락처</Link>
                                <Link to="/tableSample" className="hover:text-orange-400 text-sm sm:text-base md:text-lg"> 샘플페이지</Link>
                              </div>;
  const Right = isMobile ? <div>☰</div> : <div><ThemeToggle /></div>;
  const middle = isMobile ? <div><p className='text-sm sm:text-base md:text-lg'>포트폴리오</p></div> : <></>

  return (
    <nav className="bg-zinc-800 text-white flex justify-between items-center p-4 ">
          {Left}
          {middle}
          {Right}
    </nav>
  );
};

export default NavBar;
