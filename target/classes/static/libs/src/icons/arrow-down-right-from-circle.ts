import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownRightFromCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 22a10 10 0 1 1 10-10' }],
    ['path', { d: 'M22 22 12 12' }],
    ['path', { d: 'M22 16v6h-6' }],
  ],
];

export default ArrowDownRightFromCircle;
