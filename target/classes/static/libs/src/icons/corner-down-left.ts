import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerDownLeft: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '9 10 4 15 9 20' }],
    ['path', { d: 'M20 4v7a4 4 0 0 1-4 4H4' }],
  ],
];

export default CornerDownLeft;
