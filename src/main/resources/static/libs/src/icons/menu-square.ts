import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MenuSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M7 8h10' }],
    ['path', { d: 'M7 12h10' }],
    ['path', { d: 'M7 16h10' }],
  ],
];

export default MenuSquare;
