import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Flag: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' }],
    ['line', { x1: '4', x2: '4', y1: '22', y2: '15' }],
  ],
];

export default Flag;
