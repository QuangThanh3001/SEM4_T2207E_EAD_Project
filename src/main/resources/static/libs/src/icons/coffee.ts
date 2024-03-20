import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Coffee: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M17 8h1a4 4 0 1 1 0 8h-1' }],
    ['path', { d: 'M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z' }],
    ['line', { x1: '6', x2: '6', y1: '2', y2: '4' }],
    ['line', { x1: '10', x2: '10', y1: '2', y2: '4' }],
    ['line', { x1: '14', x2: '14', y1: '2', y2: '4' }],
  ],
];

export default Coffee;