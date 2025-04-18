import { Link, useNavigate } from 'react-router-dom';

const experiences = [
    {
      year: "2024",
      title: "보건분류 통합관리시스템 – 2차년도에 이은 연속 투입",
      period: "2024.04 ~ 2024.12",
      description:
        "- 전년도 참여 경험 덕분에 자연스럽게 3차년도 사업에 PL로 합류\n" +
        "- 발주사와는 이미 눈빛만 봐도 통하는 사이가 되어, 의견 조율도 수월\n" +
        "- 현장시험 및 설문 기능 추가 개발 중심",
    },
    {
      year: "2023",
      title: "통계청 프로젝트 첫 진입 – 보건분류의 세계로",
      period: "2023.06 ~ 2023.11",
      description:
        "- 프리랜서로 첫 통계청 프로젝트 참여\n" +
      "- 조달청 경험치를 기반으로 무리 없이 온보딩\n" +
      "- ‘보건분류’라는 낯선 분야를 조용히 탐색하며 기반 지식 습득",
    },
    {
        year: "2022",
        title: "프리랜서 전환 후 첫 프로젝트",
        period: "2022.08 ~ 2023.03",
        description:
      "- 전환 직후 우송대 프로젝트에 긴급 투입 (기존 인력 이탈로 급히 호출됨)\n" +
      "- WebSquare는 생소했지만, 2주 만에 빠르게 익히고 현업 투입 완료\n" +
      "- 프리랜서 생활의 리듬을 조금씩 만들어가기 시작",
    },
    {
        year: "2021",
        title: "정든 회사를 떠나다 – 프리랜서를 고민하다",
        period: "2021.04 ~ 2022.01",
        description:
          "- 마지막 프로젝트에서 워라밸이 무너짐\n" +
          "- 잠시 숨을 고르며 앞으로의 방향을 고민\n" +
          "- 이 시기를 계기로 '프리랜서'라는 선택지를 진지하게 고려하게 됨",
      },
      {
        year: "2020",
        title: "두 번째 PM의 무게",
        period: "2020.09 ~ 2021.03",
        description:
            "- 디자인 개선 사업에서 소규모 팀으로 프로젝트 리드\n" +
            "- 운영사업자와 협업하여 초기 부담은 덜었으나, 결과에 대한 책임은 여전\n" +
            "- 모두가 만족하는 디자인은 없다는 교훈을 얻음\n" +
            "- 보너스로 고혈압 진단까지 획득 (헬스케어의 중요성을 절감)",
      },
      {
        year: "2020",
        title: "국내 첫 파견 – 야탑 출근기",
        period: "2020.01 ~ 2020.08",
        description:
            "- 본사 요청으로 낯선 프로젝트에 파견 투입\n" +
            "- 팀, 숙소, 시스템 모두 생소했지만 빠르게 적응\n" +
            "- 적응 완료 직후 타사업 PM으로 호출되어 아쉽게 중도 이탈",
      },
      {
        year: "2019",
        title: "국외 첫 파견 – 요르단 개발 지원사업",
        period: "2019.01 ~ 2019.12",
        description:
            "- 운영/유지보수 위주였던 기존 업무에서 벗어나고 싶어 자원한 개발사업\n" +
            "- KOICA 사업의 PM으로 요르단 현지 파견\n" +
            "- 소규모 팀으로 프로젝트 운영 (PM 포함 3인 구성)\n" +
            "- G2B 시스템에 대한 높은 이해도를 바탕으로 현지 요구사항과 기술을 매끄럽게 연결\n" +
            "- 현지 시스템 구조 특성상 오후 3시 퇴근, 관광의 혜택은 덤",
      },
      {
        year: "~2019",
        title: "개발자로서의 첫 걸음",
        period: "2011.03 ~ 2018.12",
        description:
            "- 대학 졸업 후 바로 입사, 정부청사 출근으로 야망 충전\n" +
            "- 공공기관 SI사업 전반에 대한 실무 경험 축적\n" +
            "- 형상관리, ITSM, 고객 대응까지 다양한 업무 수행\n" +
            "- 진짜 개발자란 무엇인가에 대해 매일같이 고민했던 시기",
      },
  ];
  
  export const Experience = () => {
    return (
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">경력 타임라인</h2>
        <div className="relative border-l-4 border-primary pl-10 space-y-10">
            {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                {/* ✅ 점 위치 약간 보정 */}
                <div className="absolute -left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-base-content dark:border-zinc-900" />
                <p className="text-sm">{exp.period}</p>
                <h3 className="text-lg font-bold">{exp.title}</h3>
                <p className="whitespace-pre-line text-sm">
                    {exp.description}
                </p>
                </div>
            ))}
            </div>

      </section>
    );
  };
  