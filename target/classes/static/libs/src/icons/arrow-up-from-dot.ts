import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowUpFromDot: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'm5 9 7-7 7 7' }],
    ['path', { d: 'M12 16V2' }],
    ['circle', { cx: '12', cy: '21', r: '1' }],
  ],
];

export default ArrowUpFromDot;
