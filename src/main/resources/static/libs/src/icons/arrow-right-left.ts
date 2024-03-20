import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowRightLeft: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'm16 3 4 4-4 4' }],
    ['path', { d: 'M20 7H4' }],
    ['path', { d: 'm8 21-4-4 4-4' }],
    ['path', { d: 'M4 17h16' }],
  ],
];

export default ArrowRightLeft;
