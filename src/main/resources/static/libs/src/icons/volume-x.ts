import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const VolumeX: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' }],
    ['line', { x1: '22', x2: '16', y1: '9', y2: '15' }],
    ['line', { x1: '16', x2: '22', y1: '9', y2: '15' }],
  ],
];

export default VolumeX;
