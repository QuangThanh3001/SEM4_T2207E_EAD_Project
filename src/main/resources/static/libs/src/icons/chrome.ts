import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Chrome: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['circle', { cx: '12', cy: '12', r: '4' }],
    ['line', { x1: '21.17', x2: '12', y1: '8', y2: '8' }],
    ['line', { x1: '3.95', x2: '8.54', y1: '6.06', y2: '14' }],
    ['line', { x1: '10.88', x2: '15.46', y1: '21.94', y2: '14' }],
  ],
];

export default Chrome;
