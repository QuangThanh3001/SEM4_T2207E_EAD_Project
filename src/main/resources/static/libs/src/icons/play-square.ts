import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PlaySquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm9 8 6 4-6 4Z' }],
  ],
];

export default PlaySquare;
