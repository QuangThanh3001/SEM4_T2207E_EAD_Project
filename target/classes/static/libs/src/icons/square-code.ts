import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SquareCode: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm10 10-2 2 2 2' }],
    ['path', { d: 'm14 14 2-2-2-2' }],
  ],
];

export default SquareCode;
