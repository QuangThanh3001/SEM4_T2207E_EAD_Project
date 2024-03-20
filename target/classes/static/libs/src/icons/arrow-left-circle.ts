import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowLeftCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M16 12H8' }],
    ['path', { d: 'm12 8-4 4 4 4' }],
  ],
];

export default ArrowLeftCircle;
