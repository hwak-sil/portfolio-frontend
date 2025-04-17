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
              <div className="grid grid-cols-5 gap-2">
                <div className="w-30 badge badge-primary">React</div>
                <div className="w-30 badge badge-secondary">Java</div>
                <div className="w-30 badge badge-accent">Spring Boot</div>
                <div className="w-30 badge badge-warning">eGovFrame</div>
                <div className="w-30 badge badge-primary">jquery</div>
                <div className="w-30 badge badge-secondary">java script</div>
                <div className="w-30 badge badge-info">Database</div>
                <div className="w-30 badge badge-success">Tailwind CSS</div>
                <div className="w-30 badge badge-error">websquare</div>
                <div className="w-30 badge badge-neutral">ajax</div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Home;