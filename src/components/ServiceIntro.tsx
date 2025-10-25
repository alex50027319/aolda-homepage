import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Icon from './common/Icon';

export default function ServiceIntro() {
  const { ref: introRef, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="service" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col gap-6">
          {/* Title */}
          <div className={`flex flex-col gap-3 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold text-gray-400 leading-[1.45]">
              아올다 클라우드는<br/>
              아주대학교 학생을 위한<br/>
              무료 클라우드 서비스입니다
            </h2>
          </div>

          {/* Content */}
          <div ref={introRef} className="flex flex-col lg:flex-row items-center gap-[34px]">
            <div className={`flex-1 flex flex-col gap-9 transition-all duration-700 delay-300 ${
              hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl h-[249px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-primary-300/20"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <Icon name="cloud" size={80} className="text-primary-500" />
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-primary-600">아올다 클라우드</h3>
                    <p className="text-sm text-primary-500">무료 클라우드 서비스</p>
                  </div>
                </div>
              </div>
              <div className="text-base text-gray-400 leading-[1.45]">
                <p>
                  개발자를 꿈꾸는 대학생에게 클라우드는 프로젝트를 위해 꼭 필요한 서비스입니다.<br/>
                  하지만 비용이 만만치 않고, 무료용량은 너무 작습니다.<br/>
                  관련 비용을 학교에서 지원해주지만, 써야 할 보고서는 늘어나고 챙겨야 할 증빙자료도 많아집니다.
                </p>
                <p className="mt-4">
                  아올다 클라우드는 이런 문제를 해결하기 위해 2022년부터 시작된<br/>
                  아주대학교 학생들을 위한 클라우드 서비스입니다.
                </p>
              </div>
            </div>
            <div className={`w-full lg:w-[245px] bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl h-[400px] flex items-center justify-center transition-all duration-700 delay-500 ${
              hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center">
                <Icon name="users" size={60} className="text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary-600 mb-2">학생들을 위한</h3>
                <p className="text-sm text-primary-500">무료 클라우드 서비스</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



