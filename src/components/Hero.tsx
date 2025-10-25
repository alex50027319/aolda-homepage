import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Icon from './common/Icon';

export default function Hero() {
  const { ref: heroRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="home" className="pt-32 pb-12 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Decorative circles with animation */}
        <div className={`absolute right-[200px] top-[200px] w-[439px] h-[439px] rounded-full bg-[rgba(0,146,255,0.05)] transition-all duration-1000 ${
          hasIntersected ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`absolute right-[280px] top-[200px] w-[439px] h-[439px] rounded-full bg-[rgba(0,146,255,0.05)] transition-all duration-1000 delay-300 ${
          hasIntersected ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
        
        <div ref={heroRef} className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Content */}
          <div className={`lg:w-1/2 relative z-10 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-full max-w-[747px] group">
                <div className="absolute inset-0 bg-black/20 rounded-3xl transition-all duration-300 group-hover:bg-black/30"></div>
                <div className="relative rounded-3xl overflow-hidden aspect-[747/426] bg-gradient-to-br from-primary-400 to-primary-600 transition-transform duration-300 group-hover:scale-105">
                  {/* Placeholder for cloud image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon 
                      name="cloud" 
                      size={200} 
                      className="text-white opacity-30 animate-pulse"
                    />
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
          <div className={`flex flex-col gap-8 w-full lg:w-[217px] transition-all duration-700 delay-300 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="#guide" 
              className="flex flex-col justify-between p-7 border border-gray-200 rounded-3xl hover:shadow-lg hover:border-primary-200 transition-all duration-300 h-[195px] group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="아올다 사용 가이드 보기"
            >
              <h3 className="text-xl font-medium text-black leading-[1.45] group-hover:text-primary-600 transition-colors">
                아올다,<br/>처음이신가요?
              </h3>
              <div className="flex items-center justify-end gap-3">
                <span className="text-base text-black group-hover:text-primary-600 transition-colors">사용 가이드</span>
                <Icon name="arrow" size={24} className="text-primary-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a 
              href="#blog" 
              className="flex flex-col justify-between p-7 border border-gray-200 rounded-3xl hover:shadow-lg hover:border-primary-200 transition-all duration-300 h-[195px] group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="아올다 테크 블로그 보기"
            >
              <h3 className="text-xl font-medium text-black leading-[1.45] group-hover:text-primary-600 transition-colors">
                저희의 활동을<br/>모아봤어요!
              </h3>
              <div className="flex items-center justify-end gap-3">
                <span className="text-base text-black group-hover:text-primary-600 transition-colors">테크 블로그</span>
                <Icon name="arrow" size={24} className="text-primary-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
