export default function UseCases() {
  const cases = [
    {
      title: '아주대학교 총학생회',
      description: '총학생회 공식홈페이지 운영',
      period: '2024-1 ~ 2025-1',
    },
    {
      title: 'APIA',
      description: 'ajou.app 서비스 운영',
      period: '',
    },
    {
      title: '파란학기제',
      description: '파란학기 프로젝트 서비스 배포지원',
      period: '',
    },
    {
      title: '파란학기제',
      description: '파란학기 프로젝트 서비스 배포지원',
      period: '',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6">
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
          <div className="flex flex-col gap-12">
            {/* First Row */}
            <div className="flex gap-16 flex-wrap">
              {cases.slice(0, 4).map((useCase, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="w-[120px] h-[120px] bg-gray-100 rounded-3xl flex-shrink-0"></div>
                  <div className="flex flex-col gap-4">
                    {useCase.period && (
                      <div className="flex items-center gap-2.5">
                        <span className="text-base text-gray-400">{useCase.period.split(' ~ ')[0]}</span>
                        <span className="text-base text-gray-400">~</span>
                        <span className="text-base text-gray-400">{useCase.period.split(' ~ ')[1]}</span>
                      </div>
                    )}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-bold text-gray-400">{useCase.title}</h3>
                      <p className="text-base text-gray-400">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row (scrolling duplicate) */}
            <div className="flex justify-end gap-16 flex-wrap">
              {cases.slice(0, 4).map((useCase, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="w-[120px] h-[120px] bg-gray-100 rounded-3xl flex-shrink-0"></div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
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


