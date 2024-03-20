import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerLeftUp: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '14 9 9 4 4 9' }],
    ['path', { d: 'M20 20h-7a4 4 0 0 1-4-4V4' }],
  ],
];

export default CornerLeftUp;
