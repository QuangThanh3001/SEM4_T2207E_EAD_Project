import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CornerLeftDown: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '14 15 9 20 4 15' }],
    ['path', { d: 'M20 4h-7a4 4 0 0 0-4 4v12' }],
  ],
];

export default CornerLeftDown;
