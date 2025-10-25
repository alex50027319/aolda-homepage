import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Button from './common/Button';

export default function CTA() {
  const { ref: ctaRef, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div ref={ctaRef} className="flex flex-col items-center gap-6">
          {/* Title */}
          <div className={`flex flex-col items-center gap-2 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-12 h-0 border-t-[3px] border-gray-200"></div>
            <h2 className="text-2xl font-bold text-primary-500 text-center leading-[1.45]">
              아올다, 이제 한번<br/>
              만나볼까요?
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col lg:flex-row items-center gap-9 transition-all duration-700 delay-300 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center gap-4">
              <p className="text-base text-primary-500 text-center leading-[1.45]">
                아올다로<br/>
                꿈을 담아내고 싶다면?
              </p>
              <Button
                variant="primary"
                size="lg"
                icon="arrow"
                iconPosition="right"
                className="w-[220px]"
                onClick={() => window.location.href = '#console'}
              >
                콘솔로 이동
              </Button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-base text-primary-500 text-center leading-[1.45]">
                아올다를<br/>
                함께 만들어가고 싶다면?
              </p>
              <Button
                variant="outline"
                size="lg"
                icon="arrow"
                iconPosition="right"
                className="w-[220px]"
                onClick={() => window.location.href = '#join'}
              >
                팀 아올다 합류하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



