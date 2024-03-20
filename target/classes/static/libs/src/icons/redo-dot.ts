import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const RedoDot: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '17', r: '1' }],
    ['path', { d: 'M21 7v6h-6' }],
    ['path', { d: 'M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7' }],
  ],
];

export default RedoDot;