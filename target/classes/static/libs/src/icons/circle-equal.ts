import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CircleEqual: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M7 10h10' }],
    ['path', { d: 'M7 14h10' }],
    ['circle', { cx: '12', cy: '12', r: '10' }],
  ],
];

export default CircleEqual;
