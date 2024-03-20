import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Move3d: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M5 3v16h16' }],
    ['path', { d: 'm5 19 6-6' }],
    ['path', { d: 'm2 6 3-3 3 3' }],
    ['path', { d: 'm18 16 3 3-3 3' }],
  ],
];

export default Move3d;