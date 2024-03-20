import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M8 16V8l4 4 4-4v8' }],
  ],
];

export default MSquare;
