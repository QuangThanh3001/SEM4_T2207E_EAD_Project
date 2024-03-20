import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownUp: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'm3 16 4 4 4-4' }],
    ['path', { d: 'M7 20V4' }],
    ['path', { d: 'm21 8-4-4-4 4' }],
    ['path', { d: 'M17 4v16' }],
  ],
];

export default ArrowDownUp;
