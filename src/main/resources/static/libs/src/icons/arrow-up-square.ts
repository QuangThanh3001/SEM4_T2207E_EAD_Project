import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowUpSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm16 12-4-4-4 4' }],
    ['path', { d: 'M12 16V8' }],
  ],
];

export default ArrowUpSquare;
