import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerRightUp: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '10 9 15 4 20 9' }],
    ['path', { d: 'M4 20h7a4 4 0 0 0 4-4V4' }],
  ],
];

export default CornerRightUp;
