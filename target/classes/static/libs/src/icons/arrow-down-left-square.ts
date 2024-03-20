import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownLeftSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm16 8-8 8' }],
    ['path', { d: 'M16 16H8V8' }],
  ],
];

export default ArrowDownLeftSquare;