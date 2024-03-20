import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ChevronDownSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm16 10-4 4-4-4' }],
  ],
];

export default ChevronDownSquare;
