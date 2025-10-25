import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Icon from './common/Icon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export default function Benefits() {
  const { ref: benefitsRef, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  const benefits: Benefit[] = [
    {
      icon: "monitor",
      title: "유료과금 없음",
      description: "서비스 내 결제가 필요한 부가서비스가 없어요",
    },
    {
      icon: "sun",
      title: "인스턴스 개수제한 없음",
      description: "기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요",
    },
    {
      icon: "users",
      title: "협업계정 수 제한 없음",
      description: "프로젝트 당 협업을 위해 등록할 수 있는 계정의 개수제한이 없어요",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col gap-[46px]">
          {/* Header */}
          <div className={`flex flex-col gap-6 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
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
          <div ref={benefitsRef} className="flex flex-col lg:flex-row gap-9 px-0 lg:px-[60px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex-1 flex flex-col items-center gap-12 p-8 border-2 border-gray-200 rounded-2xl transition-all duration-700 hover:border-primary-200 hover:shadow-lg ${
                  hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-[72px] h-[72px] flex items-center justify-center text-primary-500 bg-primary-50 rounded-2xl">
                  <Icon name={benefit.icon} size={36} />
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


