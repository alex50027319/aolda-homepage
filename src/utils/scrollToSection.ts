// 부드러운 스크롤 유틸리티
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// 섹션으로 스크롤하는 함수들
export const scrollToAbout = () => scrollToSection('about');
export const scrollToService = () => scrollToSection('service');
export const scrollToGuide = () => scrollToSection('guide');
export const scrollToNotice = () => scrollToSection('notice');
export const scrollToConsole = () => scrollToSection('console');
export const scrollToJoin = () => scrollToSection('join');
