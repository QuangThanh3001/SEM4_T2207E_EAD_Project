import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SplitSquareHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3' }],
    ['path', { d: 'M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3' }],
    ['line', { x1: '12', x2: '12', y1: '4', y2: '20' }],
  ],
];

export default SplitSquareHorizontal;