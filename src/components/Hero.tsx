export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-12 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Decorative circles */}
        <div className="absolute right-[200px] top-[200px] w-[439px] h-[439px] rounded-full bg-[rgba(0,146,255,0.05)]"></div>
        <div className="absolute right-[280px] top-[200px] w-[439px] h-[439px] rounded-full bg-[rgba(0,146,255,0.05)]"></div>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 relative z-10">
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-full max-w-[747px]">
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                <div className="relative rounded-3xl overflow-hidden aspect-[747/426] bg-gradient-to-br from-primary-400 to-primary-600">
                  {/* Placeholder for cloud image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" className="text-white opacity-30">
                      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  {/* Text overlay */}
                  <div className="absolute left-12 top-12 text-white font-bold text-2xl leading-[1.45] max-w-[210px]">
                    아주인의 꿈을 펼칠<br/>파란하늘 속 작은구름
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Guide Cards */}
          <div className="flex flex-col gap-8 w-full lg:w-[217px]">
            <a href="#guide" className="flex flex-col justify-between p-7 border border-gray-200 rounded-3xl hover:shadow-lg transition h-[195px] group">
              <h3 className="text-xl font-medium text-black leading-[1.45]">
                아올다,<br/>처음이신가요?
              </h3>
              <div className="flex items-center justify-end gap-3">
                <span className="text-base text-black">사용 가이드</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"/>
                </svg>
              </div>
            </a>

            <a href="#blog" className="flex flex-col justify-between p-7 border border-gray-200 rounded-3xl hover:shadow-lg transition h-[195px] group">
              <h3 className="text-xl font-medium text-black leading-[1.45]">
                저희의 활동을<br/>모아봤어요!
              </h3>
              <div className="flex items-center justify-end gap-3">
                <span className="text-base text-black">테크 블로그</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
