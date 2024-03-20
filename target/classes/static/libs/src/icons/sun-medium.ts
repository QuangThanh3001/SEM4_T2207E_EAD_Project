import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SunMedium: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '4' }],
    ['path', { d: 'M12 3v1' }],
    ['path', { d: 'M12 20v1' }],
    ['path', { d: 'M3 12h1' }],
    ['path', { d: 'M20 12h1' }],
    ['path', { d: 'm18.364 5.636-.707.707' }],
    ['path', { d: 'm6.343 17.657-.707.707' }],
    ['path', { d: 'm5.636 5.636.707.707' }],
    ['path', { d: 'm17.657 17.657.707.707' }],
  ],
];

export default SunMedium;
