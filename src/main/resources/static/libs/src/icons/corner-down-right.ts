import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerDownRight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '15 10 20 15 15 20' }],
    ['path', { d: 'M4 4v7a4 4 0 0 0 4 4h12' }],
  ],
];

export default CornerDownRight;
