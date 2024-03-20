import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ChevronDownCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'm16 10-4 4-4-4' }],
  ],
];

export default ChevronDownCircle;
