import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PlusSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M8 12h8' }],
    ['path', { d: 'M12 8v8' }],
  ],
];

export default PlusSquare;
