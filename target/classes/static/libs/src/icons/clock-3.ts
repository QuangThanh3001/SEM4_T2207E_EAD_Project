import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Clock3: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['polyline', { points: '12 6 12 12 16.5 12' }],
  ],
];

export default Clock3;
