import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MoveDiagonal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '13 5 19 5 19 11' }],
    ['polyline', { points: '11 19 5 19 5 13' }],
    ['line', { x1: '19', x2: '5', y1: '5', y2: '19' }],
  ],
];

export default MoveDiagonal;
