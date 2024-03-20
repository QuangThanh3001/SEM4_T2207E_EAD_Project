import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ChevronUpCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'm8 14 4-4 4 4' }],
  ],
];

export default ChevronUpCircle;
