import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownLeftFromCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M2 12a10 10 0 1 1 10 10' }],
    ['path', { d: 'm2 22 10-10' }],
    ['path', { d: 'M8 22H2v-6' }],
  ],
];

export default ArrowDownLeftFromCircle;
