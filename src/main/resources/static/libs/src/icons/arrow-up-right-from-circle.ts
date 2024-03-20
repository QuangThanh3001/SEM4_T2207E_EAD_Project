import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowUpRightFromCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M22 12A10 10 0 1 1 12 2' }],
    ['path', { d: 'M22 2 12 12' }],
    ['path', { d: 'M16 2h6v6' }],
  ],
];

export default ArrowUpRightFromCircle;
