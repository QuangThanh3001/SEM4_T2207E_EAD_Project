import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Disc3: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M6 12c0-1.7.7-3.2 1.8-4.2' }],
    ['circle', { cx: '12', cy: '12', r: '2' }],
    ['path', { d: 'M18 12c0 1.7-.7 3.2-1.8 4.2' }],
  ],
];

export default Disc3;
