import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Clock1: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['polyline', { points: '12 6 12 12 14.5 8' }],
  ],
];

export default Clock1;
