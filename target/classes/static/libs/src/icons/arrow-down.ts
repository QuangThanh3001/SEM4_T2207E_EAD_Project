import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDown: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 5v14' }],
    ['path', { d: 'm19 12-7 7-7-7' }],
  ],
];

export default ArrowDown;
