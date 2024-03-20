import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Terminal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '4 17 10 11 4 5' }],
    ['line', { x1: '12', x2: '20', y1: '19', y2: '19' }],
  ],
];

export default Terminal;
