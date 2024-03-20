import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ParkingCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M9 17V7h4a3 3 0 0 1 0 6H9' }],
  ],
];

export default ParkingCircle;
