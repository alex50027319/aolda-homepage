// 애니메이션 관련 상수
export const ANIMATION_DURATION = {
  FAST: 300,
  NORMAL: 500,
  SLOW: 700,
  VERY_SLOW: 1000,
} as const;

export const ANIMATION_DELAY = {
  NONE: 0,
  SHORT: 150,
  MEDIUM: 300,
  LONG: 500,
} as const;

// 색상 상수
export const COLORS = {
  PRIMARY: {
    50: '#f2faff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0E76C4',
    600: '#0c62a3',
    700: '#0a4d82',
    800: '#083961',
    900: '#061c2c',
  },
  GRAY: {
    100: '#F2F2F2',
    200: '#EAEAEA',
    400: '#AAAAAA',
    500: '#9F9F9F',
  },
  RED: {
    500: '#D10003',
  },
} as const;

// 브레이크포인트
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
} as const;
