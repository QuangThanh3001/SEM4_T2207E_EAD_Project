import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PowerSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M12 7v5' }],
    ['path', { d: 'M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8' }],
  ],
];

export default PowerSquare;
