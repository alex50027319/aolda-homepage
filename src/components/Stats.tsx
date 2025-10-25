import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export default function Stats() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0]);
  const { ref: statsRef, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });

  const stats: StatItem[] = [
    { label: '누적 사용자', value: 12345, suffix: '명' },
    { label: '누적 프로젝트 수', value: 1234, suffix: '개' },
    { label: '누적 블로깅', value: 1234, suffix: '개' },
  ];

  useEffect(() => {
    if (!hasIntersected) return;

    const duration = 2000; // 2초
    const steps = 60; // 60프레임
    const stepDuration = duration / steps;

    const animateCounters = () => {
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters(stats.map(stat => 
          Math.floor(stat.value * progress)
        ));

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(stats.map(stat => stat.value));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timeout = setTimeout(animateCounters, 300);
    return () => clearTimeout(timeout);
  }, [hasIntersected, stats]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col items-center gap-9">
          {/* Title */}
          <div className={`flex flex-col items-center gap-2 w-[188px] transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-12 h-0 border-t-[3px] border-gray-200"></div>
            <h2 className="text-2xl font-bold text-primary-500 text-center">
              숫자로 보는 아올다
            </h2>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid md:grid-cols-3 gap-5 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-gray-100 rounded-3xl p-6 lg:p-8 flex flex-col items-center gap-3 transition-all duration-700 hover:border-primary-200 hover:shadow-lg ${
                  hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <p className="text-base font-medium text-gray-500">{stat.label}</p>
                <p className="text-[32px] font-bold text-primary-500 text-center">
                  {formatNumber(counters[index])}{stat.suffix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



