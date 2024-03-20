import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ChevronRightCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'm10 8 4 4-4 4' }],
  ],
];

export default ChevronRightCircle;
