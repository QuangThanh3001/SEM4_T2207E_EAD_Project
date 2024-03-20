import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowLeftSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm12 8-4 4 4 4' }],
    ['path', { d: 'M16 12H8' }],
  ],
];

export default ArrowLeftSquare;
