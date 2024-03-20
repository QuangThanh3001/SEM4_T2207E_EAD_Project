import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CircleSlash: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['line', { x1: '9', x2: '15', y1: '15', y2: '9' }],
    ['circle', { cx: '12', cy: '12', r: '10' }],
  ],
];

export default CircleSlash;
