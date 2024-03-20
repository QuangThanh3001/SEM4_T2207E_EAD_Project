import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownRightSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm8 8 8 8' }],
    ['path', { d: 'M16 8v8H8' }],
  ],
];

export default ArrowDownRightSquare;