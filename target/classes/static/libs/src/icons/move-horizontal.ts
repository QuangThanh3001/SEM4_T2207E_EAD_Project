import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MoveHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '18 8 22 12 18 16' }],
    ['polyline', { points: '6 8 2 12 6 16' }],
    ['line', { x1: '2', x2: '22', y1: '12', y2: '12' }],
  ],
];

export default MoveHorizontal;
