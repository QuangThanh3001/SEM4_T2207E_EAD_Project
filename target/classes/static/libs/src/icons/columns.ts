import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Columns: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
    ['line', { x1: '12', x2: '12', y1: '3', y2: '21' }],
  ],
];

export default Columns;
