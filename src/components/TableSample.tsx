import Regist from '../assets/board-reg.png';
import BoardList from '../assets/board-list.png';
import BoardWrite from '../assets/board-write.png';

const TableSamplePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* 페이지 제목 */}
      <h1 className="text-4xl font-bold text-center mb-6">📝 게시판 샘플 소개</h1>

      {/* 설명 */}
      <p className="text-lg text-center max-w-2xl mx-auto">
        이 게시판 샘플은 <strong>React + Spring Boot</strong> 기반으로 구현된 CRUD 게시판입니다.<br/>
        로그인 여부에 따라 작성, 수정, 삭제 권한이 다르게 동작하며, <br/>카테고리별 분류도 가능합니다.
      </p>

      {/* 미리보기 이미지 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <img src={Regist} alt="회원가입" className="rounded-lg shadow" />
        <img src={BoardList} alt="게시글 목록" className="rounded-lg shadow" />
        <img src={BoardWrite} alt="게시글 작성" className="rounded-lg shadow" />
      </div>

      {/* 이동 버튼 */}
      <div className="flex justify-center my-8">
        <a
          href="/board"
          className="btn btn-primary btn-lg"
        >
          🔗 게시판 샘플 사용해보기
        </a>
      </div>
    </div>
  );
};

export default TableSamplePage;
