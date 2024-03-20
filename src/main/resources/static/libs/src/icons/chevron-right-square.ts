import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ChevronRightSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm10 8 4 4-4 4' }],
  ],
];

export default ChevronRightSquare;
