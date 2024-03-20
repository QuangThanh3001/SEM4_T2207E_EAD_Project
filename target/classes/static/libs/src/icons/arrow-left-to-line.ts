import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowLeftToLine: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M3 19V5' }],
    ['path', { d: 'm13 6-6 6 6 6' }],
    ['path', { d: 'M7 12h14' }],
  ],
];

export default ArrowLeftToLine;
