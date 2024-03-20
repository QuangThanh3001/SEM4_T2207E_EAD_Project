import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerUpRight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '15 14 20 9 15 4' }],
    ['path', { d: 'M4 20v-7a4 4 0 0 1 4-4h12' }],
  ],
];

export default CornerUpRight;
