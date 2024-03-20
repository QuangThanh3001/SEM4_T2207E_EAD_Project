import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Disc2: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['circle', { cx: '12', cy: '12', r: '4' }],
    ['path', { d: 'M12 12h.01' }],
  ],
];

export default Disc2;
