import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowRightSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M8 12h8' }],
    ['path', { d: 'm12 16 4-4-4-4' }],
  ],
];

export default ArrowRightSquare;
