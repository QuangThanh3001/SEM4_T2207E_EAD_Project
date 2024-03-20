import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SkipForward: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polygon', { points: '5 4 15 12 5 20 5 4' }],
    ['line', { x1: '19', x2: '19', y1: '5', y2: '19' }],
  ],
];

export default SkipForward;
