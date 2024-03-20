import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowUpRight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M7 7h10v10' }],
    ['path', { d: 'M7 17 17 7' }],
  ],
];

export default ArrowUpRight;
