import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowRight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M5 12h14' }],
    ['path', { d: 'm12 5 7 7-7 7' }],
  ],
];

export default ArrowRight;
