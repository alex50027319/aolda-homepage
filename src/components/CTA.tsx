export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Title */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-0 border-t-[3px] border-gray-200"></div>
            <h2 className="text-2xl font-bold text-primary-500 text-center leading-[1.45]">
              아올다, 이제 한번<br/>
              만나볼까요?
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-9">
            <div className="flex flex-col items-center gap-4">
              <p className="text-base text-primary-500 text-center leading-[1.45]">
                아올다로<br/>
                꿈을 담아내고 싶다면?
              </p>
              <a
                href="#console"
                className="flex items-center justify-center gap-4 px-4 py-4 bg-primary-500 rounded-2xl hover:bg-primary-600 transition w-[220px]"
              >
                <span className="text-base font-bold text-white">콘솔로 이동</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-base text-primary-500 text-center leading-[1.45]">
                아올다를<br/>
                함께 만들어가고 싶다면?
              </p>
              <a
                href="#join"
                className="flex items-center justify-center gap-4 px-4 py-4 bg-white border border-primary-500 rounded-2xl hover:bg-gray-50 transition w-[220px]"
              >
                <span className="text-base font-bold text-primary-500">팀 아올다 합류하기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


