import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Disc: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['circle', { cx: '12', cy: '12', r: '2' }],
  ],
];

export default Disc;
