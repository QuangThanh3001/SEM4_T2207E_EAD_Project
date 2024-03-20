import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M12 8v8' }],
    ['path', { d: 'm8 12 4 4 4-4' }],
  ],
];

export default ArrowDownSquare;
