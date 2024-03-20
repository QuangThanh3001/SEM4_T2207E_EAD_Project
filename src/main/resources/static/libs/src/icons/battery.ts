import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Battery: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '16', height: '10', x: '2', y: '7', rx: '2', ry: '2' }],
    ['line', { x1: '22', x2: '22', y1: '11', y2: '13' }],
  ],
];

export default Battery;
