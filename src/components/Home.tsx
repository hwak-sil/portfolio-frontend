import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.jpg';
export const Home = () => {
    return (
      <section className="hero py-10">
        <div className="container mx-auto px-4">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={profileImage}
              className="max-w-sm max-h-50 rounded-full shadow-2xl"
              alt="profile"
            />
            <div>
              <h1 className="text-5xl font-bold">확실한 남자 이확실</h1>
              <p className="py-4 text-lg px-4">
                안녕하세요! <br/>프론트엔드와 백엔드를 모두 다루는 풀스택 개발자입니다.<br/>
                React와 Spring Boot 기반의 포트폴리오 페이지입니다.<br/>
                스타일은 tailwind에 이제 daisyui를 곁들였습니다.<br/>
              </p>
              <h1 className="text-2xl font-bold py-2">보유스킬</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                <div className="badge badge-primary w-full text-center py-2">React</div>
                <div className="badge badge-secondary w-full text-center py-2">Java</div>
                <div className="badge badge-accent w-full text-center py-2">Spring Boot</div>
                <div className="badge badge-warning w-full text-center py-2">eGovFrame</div>
                <div className="badge badge-primary w-full text-center py-2">jQuery</div>
                <div className="badge badge-secondary w-full text-center py-2">JavaScript</div>
                <div className="badge badge-info w-full text-center py-2">Database</div>
                <div className="badge badge-success w-full text-center py-2">Tailwind CSS</div>
                <div className="badge badge-error w-full text-center py-2">Websquare</div>
                <div className="badge badge-neutral w-full text-center py-2">Ajax</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Home;