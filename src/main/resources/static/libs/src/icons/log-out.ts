import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const LogOut: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' }],
    ['polyline', { points: '16 17 21 12 16 7' }],
    ['line', { x1: '21', x2: '9', y1: '12', y2: '12' }],
  ],
];

export default LogOut;
