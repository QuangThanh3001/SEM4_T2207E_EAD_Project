import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ParkingSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M9 17V7h4a3 3 0 0 1 0 6H9' }],
  ],
];

export default ParkingSquare;
