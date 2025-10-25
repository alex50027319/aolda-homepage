export default function ServiceIntro() {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[996px] mx-auto flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-gray-400 leading-[1.45]">
              아올다 클라우드는<br/>
              아주대학교 학생을 위한<br/>
              무료 클라우드 서비스입니다
            </h2>
          </div>

          {/* Content */}
          <div className="flex items-center gap-[34px]">
            <div className="flex-1 flex flex-col gap-9">
              <div className="bg-[#F2FAFF] rounded-3xl h-[249px]"></div>
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
            <div className="w-[245px] bg-[#F2FAFF] rounded-3xl h-full min-h-[400px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


