import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowUpCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'm16 12-4-4-4 4' }],
    ['path', { d: 'M12 16V8' }],
  ],
];

export default ArrowUpCircle;
