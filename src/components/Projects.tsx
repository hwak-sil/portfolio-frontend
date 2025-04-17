import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const projects = [
    {
      title: "통계청 보건분류 통합관리시스템(3차)",
      duration: "2024.04 ~ 2024.12",
      stack: ["Spring Boot", "jQuery", "전자정부프레임워크", "Oracle", "Java"],
      description:
        "보건분류 통합관리시스템 개발 3차년도 사업\n" +
        "- 현장시험 및 설문조사 서비스 개발\n" +
        "- 관리자가 시험과 설문을 게시하고, 참여자가 응답\n" +
        "- 관리자 화면에서 참여내역 및 설문 결과 확인 기능 구현",
    },
    {
      title: "통계청 보건분류 통합관리시스템(2차)",
      duration: "2023.06 ~ 2023.11",
      stack: ["Spring Boot", "jQuery", "전자정부프레임워크", "Oracle", "Java"],
      description:
        "보건분류 통합관리시스템 개발 2차년도 사업\n" +
        "- KCD 8차 개정 시스템\n" +
        "- 분류표/대조표/용어관리 시스템\n" +
        "- 현장시험 관련 컨설팅 및 UI 개발",
    },
    {
      title: "우송대학교 대학정보시스템 UI 전환",
      duration: "2022.08 ~ 2023.03",
      stack: ["WebSquare 5.0", "전자정부프레임워크", "Java"],
      description:
        "대학정보시스템 UI 전환 사업\n" +
        "- WebSquare 2.0 시스템을 WebSquare 5.0으로 리뉴얼\n" +
        "- 전자정부프레임워크와의 호환성 고려한 개선작업",
    },
    {
        title: "나라장터 시스템 운영위탁",
        duration: "2021-04 ~ 2022-02",
        stack: ["전자정부프레임워크", "Java", "jQuery"],
        description:
          "조달청 나라장터 시스템 중 공사업무 고도화\n" +
          "- 입찰 업무 중 공사 업역 및 대업종화  관련 입찰 업무 개발\n" +
          "- 기존 시스템 및 차세대 시스템 팀과 협업 진행",
      },
      {
        title: "한국 고용정보원 UI.UX 개선 사업",
        duration: "2020-09 ~ 2021-03",
        stack: ["전자정부프레임워크", "Java", "JavaScript"],
        description:
          "고용보험 홈페이지(현고용24)UI.UX개선 사업\n" +
          "- 고용보험 관련 서비스의 간소화에 맞춰 UI.UX개선 진행\n" +
          "- 웹, 앱 디자인 전면 개편 및 신청 프로세스 간소화 적용",
      },
      {
        title: "대법원 가족증명서 고도화 사업",
        duration: "2020-01 ~ 2020-08",
        stack: ["전자정부프레임워크", "Java", "JavaScript"],
        description:
          "전자가족관계등록 시스템 고도화 사업\n" +
          "- AS-IS 시스템 구조를 개선하여 TO-BE 모델 기반의 가족관계등록시스템으로 고도화"
      },
      {
        title: "요르단 전자조달 시스템 사후관리",
        duration: "2019-01 ~ 2019-12",
        stack: ["전자정부프레임워크", "Java", "JavaScript"],
        description:
          "요르단 전자 조달 시스템 1차 구축 이후 사후 관리\n" +
          "- 1차 구축(입찰시스템)이후 프로세스 추가\n" +
          "- 계약 및 검가검수까지 나머지 프로세스 개발",
      },
      {
        title: "나라장터 운영위탁",
        duration: "2011-03 ~ 2019-01",
        stack: ["전자정부프레임워크", "Java", "JavaScript"],
        description:
          "물품 업무 및 종합쇼핑몰 유지관리\n" +
          "- 물품 계약부터 지급/결산까지 업무 담당\n" +
          "- 종합쇼핑몰 운영 및 시스템 개선 담당",
      },
  ];
  
  const badgeClassMap: Record<string, string> = {
    "Java": "badge-secondary",
    "React": "badge-primary",
    "Spring Boot": "badge-accent",
    "Oracle": "badge-info",
    "Tailwind CSS": "badge-success",
    "전자정부프레임워크": "badge-warning",
    "WebSquare 5.0": "badge-error",
    "Ajax": "badge-neutral",
    "jQuery": "badge-primary",
    "JavaScript": "badge-secondary",
  };

  
  
  export const Projects = () => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
        const allSkills = Array.from(new Set(projects.flatMap(p => p.stack)));
    return (
      <section className="py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">프로젝트</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
            {allSkills.map((skill) => (
                <button
                key={skill}
                onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
                className={`badge cursor-pointer transition ${
                    skill === selectedSkill
                    ? badgeClassMap[skill] ?? "badge-primary"
                    : `${badgeClassMap[skill] ?? "badge-outline"} badge-outline`
                }`}
                >
                {skill}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {projects
    .filter((p) => !selectedSkill || p.stack.includes(selectedSkill))
    .map((p) => (
      <div key={p.title} className="p-6 rounded-xl shadow-md space-y-2 border border-soild">
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="text-sm">{p.duration}</p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((tech, i) => (
            <span key={i} className={`badge ${badgeClassMap[tech] ?? "badge-outline"}`}>
              {tech}
            </span>
          ))}
        </div>
        <p className="whitespace-pre-line text-sm">{p.description}</p>
      </div>
    ))}
</div>
      </section>
    );
  };
  