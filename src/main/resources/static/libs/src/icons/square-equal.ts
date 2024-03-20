import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SquareEqual: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M7 10h10' }],
    ['path', { d: 'M7 14h10' }],
  ],
];

export default SquareEqual;
