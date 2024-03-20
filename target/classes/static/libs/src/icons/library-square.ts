import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const LibrarySquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M7 7v10' }],
    ['path', { d: 'M11 7v10' }],
    ['path', { d: 'm15 7 2 10' }],
  ],
];

export default LibrarySquare;