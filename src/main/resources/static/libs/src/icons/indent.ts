import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Indent: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '3 8 7 12 3 16' }],
    ['line', { x1: '21', x2: '11', y1: '12', y2: '12' }],
    ['line', { x1: '21', x2: '11', y1: '6', y2: '6' }],
    ['line', { x1: '21', x2: '11', y1: '18', y2: '18' }],
  ],
];

export default Indent;
