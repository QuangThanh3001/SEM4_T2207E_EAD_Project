import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CircleDollarSign: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' }],
    ['path', { d: 'M12 18V6' }],
  ],
];

export default CircleDollarSign;