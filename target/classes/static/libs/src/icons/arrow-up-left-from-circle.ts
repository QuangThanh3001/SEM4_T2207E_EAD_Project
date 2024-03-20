import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowUpLeftFromCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M2 8V2h6' }],
    ['path', { d: 'm2 2 10 10' }],
    ['path', { d: 'M12 2A10 10 0 1 1 2 12' }],
  ],
];

export default ArrowUpLeftFromCircle;
