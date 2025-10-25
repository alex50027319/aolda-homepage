import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Footer() {
  const { ref: footerRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <footer className="bg-primary-900 text-white py-12 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Indicator */}
        <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[18px] h-1 bg-primary-500 rounded-t-2xl"></div>
        
        <div ref={footerRef} className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Logo and Description */}
          <div className={`flex flex-col gap-1.5 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-[31px] h-[31px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#206CA5] to-[#0E76C4] rounded"></div>
              </div>
              <h3 className="text-[32px] font-bold" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.024' }}>
                Aolda
              </h3>
            </div>
            <div className="flex items-center pl-[40px]">
              <p className="text-xs font-light">교내 클라우드 인프라 개발/운영 소학회</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-col gap-1.5 transition-all duration-700 delay-300 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xs font-light">경기도 수원시 영통구 원천동 월드컵로 206 아주대학교</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span className="text-xs font-light">회장 이나현</span>
              <div className="hidden sm:block w-px h-1 bg-white"></div>
              <span className="text-xs font-light">부회장 이나현</span>
              <div className="hidden sm:block w-px h-1 bg-white"></div>
              <span className="text-xs font-light">총무 김화균</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-6 border-t border-primary-800 text-center transition-all duration-700 delay-500 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xs text-primary-300">
            © 2024 AOLDA. Made with ❤️ by AOLDA Team
          </p>
        </div>
      </div>
    </footer>
  );
}
