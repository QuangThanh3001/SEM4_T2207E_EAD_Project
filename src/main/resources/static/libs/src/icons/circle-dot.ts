import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CircleDot: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['circle', { cx: '12', cy: '12', r: '1' }],
  ],
];

export default CircleDot;
