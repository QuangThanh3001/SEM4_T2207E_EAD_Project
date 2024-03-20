import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SeparatorHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['line', { x1: '3', x2: '21', y1: '12', y2: '12' }],
    ['polyline', { points: '8 8 12 4 16 8' }],
    ['polyline', { points: '16 16 12 20 8 16' }],
  ],
];

export default SeparatorHorizontal;
