import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Clock8: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['polyline', { points: '12 6 12 12 8 14' }],
  ],
];

export default Clock8;
