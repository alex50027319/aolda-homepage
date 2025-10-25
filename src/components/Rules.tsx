import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Icon from './common/Icon';

interface Rule {
  icon: string;
  title: string;
  description: string;
}

export default function Rules() {
  const { ref: rulesRef, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  const rules: Rule[] = [
    {
      icon: 'document',
      title: '상업적 사용 금지',
      description: '아주대학교 SW사업단 정책에 따라, \n아올다 클라우드를 이용해 상업적 성격의 서비스를 운용할 수 없어요',
    },
    {
      icon: 'user',
      title: '계정대여 금지',
      description: '아주대학교 SW사업단 정책에 따라,\n아주대학교 구성원이 아닌 외부인은 \n아올다 클라우드를 사용할 수 없어요',
    },
    {
      icon: 'lock',
      title: '인프라 무단조작 금지',
      description: '아올다 클라우드는 팔달관 334호에서 실제 물리서버를 볼 수 있지만,\n 보다 안정적인 운영을 위해\n조작행위는 금지해요',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className={`flex flex-col gap-6 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-stretch gap-2.5">
              <h2 className="text-2xl font-bold text-gray-400 leading-[1.45]">
                자유롭게 꿈을 펼치기 위해<br/>
                모두 함께하는 약속 3가지
              </h2>
            </div>
            <p className="text-base text-gray-400 leading-[1.45] max-w-[590px]">
              아주인 모두가 자유롭게 꿈을 펼칠 수 있도록<br/>
              아래 3가지는 반드시 지켜주세요!
            </p>
          </div>

          {/* Rules Grid */}
          <div ref={rulesRef} className="flex flex-col lg:flex-row gap-9 px-0 lg:px-[60px]">
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`flex-1 flex flex-col items-center gap-12 p-8 border-2 border-gray-200 rounded-2xl transition-all duration-700 hover:border-red-200 hover:shadow-lg ${
                  hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-[72px] h-[72px] flex items-center justify-center text-red-500 bg-red-50 rounded-2xl">
                  <Icon name={rule.icon} size={36} />
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <h3 className="text-base font-bold text-red-500">{rule.title}</h3>
                  <p className="text-xs font-medium text-gray-400 whitespace-pre-line leading-[1.45]">
                    {rule.description}
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



