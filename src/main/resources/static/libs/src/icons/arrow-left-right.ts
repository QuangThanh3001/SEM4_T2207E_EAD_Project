import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowLeftRight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M8 3 4 7l4 4' }],
    ['path', { d: 'M4 7h16' }],
    ['path', { d: 'm16 21 4-4-4-4' }],
    ['path', { d: 'M20 17H4' }],
  ],
];

export default ArrowLeftRight;
