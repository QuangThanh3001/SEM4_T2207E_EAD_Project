import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowRightCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M8 12h8' }],
    ['path', { d: 'm12 16 4-4-4-4' }],
  ],
];

export default ArrowRightCircle;
