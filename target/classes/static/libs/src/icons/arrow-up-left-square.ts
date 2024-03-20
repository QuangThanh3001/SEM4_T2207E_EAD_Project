import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowUpLeftSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M8 16V8h8' }],
    ['path', { d: 'M16 16 8 8' }],
  ],
];

export default ArrowUpLeftSquare;
