import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerRightDown: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '10 15 15 20 20 15' }],
    ['path', { d: 'M4 4h7a4 4 0 0 1 4 4v12' }],
  ],
];

export default CornerRightDown;
