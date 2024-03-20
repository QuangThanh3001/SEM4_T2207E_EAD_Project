import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ChevronLeftCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'm14 16-4-4 4-4' }],
  ],
];

export default ChevronLeftCircle;
