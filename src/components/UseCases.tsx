import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface UseCase {
  title: string;
  description: string;
  period?: string;
  logo?: string;
}

export default function UseCases() {
  const { ref: casesRef, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  const cases: UseCase[] = [
    {
      title: '아주대학교 총학생회',
      description: '총학생회 공식홈페이지 운영',
      period: '2024-1 ~ 2025-1',
    },
    {
      title: 'APIA',
      description: 'ajou.app 서비스 운영',
    },
    {
      title: '파란학기제',
      description: '파란학기 프로젝트 서비스 배포지원',
    },
    {
      title: '학생회',
      description: '다양한 학생회 서비스 운영',
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
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-400 leading-[1.45]">
                이미 많은 곳에서 사용되고 있는<br/>
                아올다 클라우드
              </h2>
            </div>
            <p className="text-base text-gray-400 leading-[1.45] max-w-[590px]">
              아올다 클라우드는 아주대학교 대/내외적으로 사용되는<br/>
              다양한 서비스를 안정적으로 운영하기 위해 이곳저곳에서 사용되고 있어요
            </p>
          </div>

          {/* Cases Grid */}
          <div ref={casesRef} className="flex flex-col gap-12">
            {/* First Row */}
            <div className="flex gap-16 flex-wrap justify-center lg:justify-start">
              {cases.map((useCase, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-8 transition-all duration-700 hover:scale-105 ${
                    hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-[120px] h-[120px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex-shrink-0 flex items-center justify-center shadow-sm">
                    <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {useCase.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {useCase.period && (
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {useCase.period.split(' ~ ')[0]}
                        </span>
                        <span className="text-sm text-gray-400">~</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {useCase.period.split(' ~ ')[1]}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-gray-400">{useCase.title}</h3>
                      <p className="text-base text-gray-400">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



