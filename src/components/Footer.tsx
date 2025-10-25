export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Indicator */}
        <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[18px] h-1 bg-primary-500 rounded-t-2xl"></div>
        
        <div className="flex justify-between items-start">
          {/* Logo and Description */}
          <div className="flex flex-col gap-1.5">
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
          <div className="flex flex-col gap-1.5">
            <p className="text-xs font-light">경기도 수원시 영통구 원천동 월드컵로 206 아주대학교</p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-light">회장 이나현</span>
              <div className="w-px h-1 bg-white"></div>
              <span className="text-xs font-light">부회장 이나현</span>
              <div className="w-px h-1 bg-white"></div>
              <span className="text-xs font-light">총무 김화균</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
