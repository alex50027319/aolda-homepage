import { useState, useEffect } from 'react';
import Button from './common/Button';
import Icon from './common/Icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '#about', label: '소학회 소개' },
    { href: '#service', label: '서비스 소개' },
    { href: '#guide', label: '사용안내' },
    { href: '#notice', label: '공지사항' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-white/60 backdrop-blur-xl shadow-sm'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-[138px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-[21px] h-[21px] bg-gradient-to-br from-[#206CA5] to-[#0E76C4] rounded"></div>
            <a 
              href="/" 
              className="text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors" 
              style={{ fontFamily: 'Arial, sans-serif' }}
              aria-label="Aolda 홈페이지로 이동"
            >
              Aolda
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between gap-[71px] w-[500px]">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-black hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block font-bold">
            <Button
              variant="primary"
              size="sm"
              icon="arrow"
              iconPosition="right"
              className="text-xs"
              onClick={() => window.location.href = '#console'}
            >
              콘솔로 이동
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-500 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
          >
            <Icon 
              name={isMenuOpen ? 'close' : 'menu'} 
              size={24}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="mt-4"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = '#console';
              }}
            >
              콘솔로 이동
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
