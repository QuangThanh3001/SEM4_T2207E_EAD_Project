import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Spline: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '19', cy: '5', r: '2' }],
    ['circle', { cx: '5', cy: '19', r: '2' }],
    ['path', { d: 'M5 17A12 12 0 0 1 17 5' }],
  ],
];

export default Spline;
