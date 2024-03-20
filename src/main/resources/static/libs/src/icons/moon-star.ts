import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MoonStar: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' }],
    ['path', { d: 'M19 3v4' }],
    ['path', { d: 'M21 5h-4' }],
  ],
];

export default MoonStar;
