import { Link, useNavigate } from 'react-router-dom';
const skills = [
    {
      name: "Java",
      level: 5,
      category: "Backend",
      description: "10년 이상 실무 경험, \n전자정부프레임워크 기반 \n프로젝트 다수 참여",
    },
    {
      name: "Spring Boot",
      level: 4,
      category: "Backend",
      description: "API 개발 및 유지보수 경험, \n보안 설정 및 예외처리 경험",
    },
    {
      name: "React",
      level: 3,
      category: "Frontend",
      description: "프론트엔드까지 직접 구현\n 포트폴리오용 프로젝트 적용",
    },
    {
      name: "Database",
      category: "Backend",
      level: 3,
      description: "복잡한 JOIN 및 Procedure 경험\nAI 도구를 활용한 튜닝 경험",
    },
    {
      name: "Tailwind CSS",
      category: "Backend",
      level: 3,
      description: "반응형 UI 및 DaisyUI 적용 경험",
    },
    {
      name: "전자정부프레임워크",
      category: "Backend",
      level: 5,
      description: "10년 이상 실무 사용, \n통계청/KEIS/조달청 등 \n실 프로젝트 중심",
    },
    {
        name: "Jquery",
        category: "Frontend",
        level: 5,
        description: "5년 이상 실무 사용, \najax를 통한 비동기 서버 통신 구현",
    },
    {
        name: "java script",
        category: "Frontend",
        level: 5,
        description: "개발자 경력 초기 model1 방식 실무 경험\nJquery 일반화 전 순수 JS 활용 경험 다수",
    },
    {
        name: "websquare",
        category: "Frontend",
        level: 4,
        description: "websquare 2.0 -> websquare 5.0 전환 경험\n실무 적용에 익숙",
    },
  ];
  const StarRating = ({ level }: { level: number }) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < level ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  export const Skills = () => {
    return (
      <section className="py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 rounded-xl shadow-md border border-solid">
                <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                <StarRating level={skill.level} />
                <p className="whitespace-pre-line text-sm mt-2">{skill.description}</p>
            </div>
            ))}
        </div>
      </section>
    );
  };
  