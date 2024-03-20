import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerUpLeft: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '9 14 4 9 9 4' }],
    ['path', { d: 'M20 20v-7a4 4 0 0 0-4-4H4' }],
  ],
];

export default CornerUpLeft;
