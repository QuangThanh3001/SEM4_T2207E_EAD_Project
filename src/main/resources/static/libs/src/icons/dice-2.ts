import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Dice2: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
    ['path', { d: 'M15 9h.01' }],
    ['path', { d: 'M9 15h.01' }],
  ],
];

export default Dice2;
