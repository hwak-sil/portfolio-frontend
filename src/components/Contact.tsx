import { useState } from "react";

export const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = () => {
    const mailtoURL =
      "mailto:yhs133@gmail.com?subject=%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EB%AC%B8%EC%9D%98&body=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%2C%20%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%EB%A5%BC%20%EB%B3%B4%EA%B3%A0%20%EC%97%B0%EB%9D%BD%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A%EC%84%B1%ED%95%9C%3A%0A%EC%86%8C%EC%86%8D%2F%ED%9A%8C%EC%82%AC%3A%0A%EB%AC%B8%EC%9D%98%20%EB%82%B4%EC%9A%A9%3A%0A%0A%EA%B0%90%EC%82%AC%ED%95%A9%EB%8B%88%EB%8B%A4.";

    alert("메일 앱이 연결되어 있어야 정상 동작합니다.\n메일 앱이 없다면 복사하여 수동으로 발송해 주세요.");
    window.location.href = mailtoURL;
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("yhs133@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="px-8 py-16 text-center">
      <h2 className="text-4xl font-bold mb-10 text-center">연락처</h2>
      <p className="text-lg mb-10">
        포트폴리오를 봐주셔서 감사합니다.<br />
        아래 버튼을 통해 이메일을 보내거나 주소를 복사할 수 있습니다.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <button onClick={handleEmailClick} className="btn btn-outline btn-primary border-gray-500 dark:border-white hover:shadow-md">
          📧 이메일 보내기
        </button>
        <button onClick={handleEmailCopy} className="btn btn-outline btn-primary border-gray-500 dark:border-white hover:shadow-md">
          📋 주소 복사
        </button>
      </div>

      {/* Toast 알림 */}
      {showToast && (
        <div className="toast toast-bottom toast-end z-50">
          <div className="alert alert-success">
            <span>이메일 주소가 복사되었습니다!</span>
          </div>
        </div>
      )}

      <p className="mt-10 text-sm">
        또는 직접 연락: <br />
        <span className="font-semibold">
          010-4034-9278
        </span>
      </p>
    </section>
  );
};
