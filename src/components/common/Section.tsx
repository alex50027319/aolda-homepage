import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'white' | 'gray' | 'primary';
}

export default function Section({ 
  id, 
  className = '', 
  children, 
  background = 'white' 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  return (
    <section 
      id={id}
      className={`py-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
