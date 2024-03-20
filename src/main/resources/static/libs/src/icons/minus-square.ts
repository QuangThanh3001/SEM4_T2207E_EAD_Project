import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MinusSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M8 12h8' }],
  ],
];

export default MinusSquare;