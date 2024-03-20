import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Minimize2: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '4 14 10 14 10 20' }],
    ['polyline', { points: '20 10 14 10 14 4' }],
    ['line', { x1: '14', x2: '21', y1: '10', y2: '3' }],
    ['line', { x1: '3', x2: '10', y1: '21', y2: '14' }],
  ],
];

export default Minimize2;
