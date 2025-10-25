export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2m2-4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z M14 15h.01" />
          <path d="M7 13v-.01" />
        </svg>
      ),
      title: "유료과금 없음",
      description: "서비스 내 결제가 필요한 부가서비스가 없어요",
    },
    {
      icon: (
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3" />
          <path d="M9.7 17h4.6" />
        </svg>
      ),
      title: "인스턴스 개수제한 없음",
      description:
        "기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요",
    },
    {
      icon: (
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M21 21v-2a4 4 0 0 0-3-3.85" />
        </svg>
      ),
      title: "협업계정 수 제한 없음",
      description:
        "프로젝트 당 협업을 위해 등록할 수 있는 계정의 개수제한이 없어요",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col gap-[46px]">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <h2 className="text-2xl font-bold text-gray-400 leading-[1.45]">
                자유롭게 꿈을 펼치기 위해
                <br />
                아올다가 없앤 불편함 3가지
              </h2>
            </div>
            <p className="text-base text-gray-400 leading-[1.45]">
              아주인 모두가 자유롭게 꿈을 펼칠 수 있도록
              <br />
              아래 3가지를 없앴어요
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="flex gap-9 px-[60px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center gap-12 p-8 border-2 border-gray-200 rounded-2xl"
              >
                <div className="w-[72px] h-[72px] flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <h3 className="text-base font-bold text-primary-500">
                    {benefit.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-400 leading-[1.45]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

