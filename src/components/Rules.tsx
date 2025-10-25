export default function Rules() {
  const rules = [
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3h18v18H3z M8 7h8 M8 12h8 M8 17h5"/>
        </svg>
      ),
      title: '상업적 사용 금지',
      description: '아주대학교 SW사업단 정책에 따라, \n아올다 클라우드를 이용해 상업적 성격의 서비스를 운용할 수 없어요',
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"/>
        </svg>
      ),
      title: '계정대여 금지',
      description: '아주대학교 SW사업단 정책에 따라,\n아주대학교 구성원이 아닌 외부인은 \n아올다 클라우드를 사용할 수 없어요',
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"/>
        </svg>
      ),
      title: '인프라 무단조작 금지',
      description: '아올다 클라우드는 팔달관 334호에서 실제 물리서버를 볼 수 있지만,\n 보다 안정적인 운영을 위해\n조작행위는 금지해요',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6">
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
          <div className="flex gap-9 px-[60px]">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center gap-12 p-8 border-2 border-gray-200 rounded-2xl"
              >
                <div className="w-[72px] h-[72px] flex items-center justify-center text-white">
                  {rule.icon}
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


