import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SquareSlash: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['line', { x1: '9', x2: '15', y1: '15', y2: '9' }],
  ],
];

export default SquareSlash;
