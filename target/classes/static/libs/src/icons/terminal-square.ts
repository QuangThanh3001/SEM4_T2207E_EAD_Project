import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const TerminalSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'm7 11 2-2-2-2' }],
    ['path', { d: 'M11 13h4' }],
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
  ],
];

export default TerminalSquare;
