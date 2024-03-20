import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MoveLeft: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M6 8L2 12L6 16' }],
    ['path', { d: 'M2 12H22' }],
  ],
];

export default MoveLeft;
