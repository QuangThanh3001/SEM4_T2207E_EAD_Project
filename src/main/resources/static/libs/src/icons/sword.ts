import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Sword: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '14.5 17.5 3 6 3 3 6 3 17.5 14.5' }],
    ['line', { x1: '13', x2: '19', y1: '19', y2: '13' }],
    ['line', { x1: '16', x2: '20', y1: '16', y2: '20' }],
    ['line', { x1: '19', x2: '21', y1: '21', y2: '19' }],
  ],
];

export default Sword;
