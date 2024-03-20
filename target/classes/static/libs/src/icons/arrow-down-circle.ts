import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M12 8v8' }],
    ['path', { d: 'm8 12 4 4 4-4' }],
  ],
];

export default ArrowDownCircle;
