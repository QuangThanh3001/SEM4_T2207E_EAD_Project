import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowRightToLine: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M17 12H3' }],
    ['path', { d: 'm11 18 6-6-6-6' }],
    ['path', { d: 'M21 5v14' }],
  ],
];

export default ArrowRightToLine;
