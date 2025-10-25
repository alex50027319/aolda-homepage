export default function Stats() {
  const stats = [
    { label: '누적 사용자', value: '12,345명' },
    { label: '누적 프로젝트 수', value: '1,234개' },
    { label: '누적 블로깅', value: '1,234개' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col items-center gap-9">
          {/* Title */}
          <div className="flex flex-col items-center gap-2 w-[188px]">
            <div className="w-12 h-0 border-t-[3px] border-gray-200"></div>
            <h2 className="text-2xl font-bold text-primary-500 text-center">
              숫자로 보는 아올다
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-5 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-3xl p-6 lg:p-8 flex flex-col items-center gap-3"
              >
                <p className="text-base font-medium text-gray-500">{stat.label}</p>
                <p className="text-[32px] font-bold text-primary-500 text-right">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


