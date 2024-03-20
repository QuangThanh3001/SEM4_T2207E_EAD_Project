import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Grid2x2: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M3 12h18' }],
    ['path', { d: 'M12 3v18' }],
  ],
];

export default Grid2x2;
