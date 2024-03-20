import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MoveDiagonal2: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '5 11 5 5 11 5' }],
    ['polyline', { points: '19 13 19 19 13 19' }],
    ['line', { x1: '5', x2: '19', y1: '5', y2: '19' }],
  ],
];

export default MoveDiagonal2;