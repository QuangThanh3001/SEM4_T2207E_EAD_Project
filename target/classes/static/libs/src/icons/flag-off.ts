import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FlagOff: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M8 2c3 0 5 2 8 2s4-1 4-1v11' }],
    ['path', { d: 'M4 22V4' }],
    ['path', { d: 'M4 15s1-1 4-1 5 2 8 2' }],
    ['line', { x1: '2', x2: '22', y1: '2', y2: '22' }],
  ],
];

export default FlagOff;
