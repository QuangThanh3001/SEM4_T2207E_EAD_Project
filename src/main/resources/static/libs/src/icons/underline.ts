import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Underline: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M6 4v6a6 6 0 0 0 12 0V4' }],
    ['line', { x1: '4', x2: '20', y1: '20', y2: '20' }],
  ],
];

export default Underline;
