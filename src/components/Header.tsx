import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/60 backdrop-blur-xl shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-[1280px] mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-[138px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-[21px] h-[21px] bg-gradient-to-br from-[#206CA5] to-[#0E76C4] rounded"></div>
            <a href="/" className="text-2xl font-bold text-primary-500" style={{ fontFamily: 'Arial, sans-serif' }}>
              Aolda
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between gap-[71px] w-[500px]">
            <a href="#about" className="text-sm font-medium text-black hover:text-primary-500 transition">
              소학회 소개
            </a>
            <a href="#service" className="text-sm font-medium text-black hover:text-primary-500 transition">
              서비스 소개
            </a>
            <a href="#guide" className="text-sm font-medium text-black hover:text-primary-500 transition">
              사용안내
            </a>
            <a href="#notice" className="text-sm font-medium text-black hover:text-primary-500 transition">
              공지사항
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#console"
              className="bg-primary-500 text-white px-4 py-3 rounded-2xl hover:bg-primary-600 transition flex items-center gap-4 text-xs font-bold"
            >
              콘솔로 이동
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-primary-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                소학회 소개
              </a>
              <a
                href="#service"
                className="text-gray-700 hover:text-primary-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                서비스 소개
              </a>
              <a
                href="#guide"
                className="text-gray-700 hover:text-primary-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                사용안내
              </a>
              <a
                href="#notice"
                className="text-gray-700 hover:text-primary-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                공지사항
              </a>
              <a
                href="#console"
                className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                콘솔로 이동
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
