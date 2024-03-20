import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Grip: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '5', r: '1' }],
    ['circle', { cx: '19', cy: '5', r: '1' }],
    ['circle', { cx: '5', cy: '5', r: '1' }],
    ['circle', { cx: '12', cy: '12', r: '1' }],
    ['circle', { cx: '19', cy: '12', r: '1' }],
    ['circle', { cx: '5', cy: '12', r: '1' }],
    ['circle', { cx: '12', cy: '19', r: '1' }],
    ['circle', { cx: '19', cy: '19', r: '1' }],
    ['circle', { cx: '5', cy: '19', r: '1' }],
  ],
];

export default Grip;
