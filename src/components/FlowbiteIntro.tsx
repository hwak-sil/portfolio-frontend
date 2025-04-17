export const FlowbiteIntro = () => {
    return (
      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <img
            className="w-40 h-40 rounded-full shadow-lg"
            src="https://placehold.co/150x150"
            alt="profile"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">이확실</h1>
            <p className="mb-4 text-lg">
              프론트엔드와 백엔드의 경계를 넘나드는 개발자. 다양한 사용자 경험을 고민하고, 기능을 깔끔하게 구현하는 데에 집중합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">React</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">Spring Boot</span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">MySQL</span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded text-sm">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
    export default FlowbiteIntro;