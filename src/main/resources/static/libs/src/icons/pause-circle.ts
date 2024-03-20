import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PauseCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['line', { x1: '10', x2: '10', y1: '15', y2: '9' }],
    ['line', { x1: '14', x2: '14', y1: '15', y2: '9' }],
  ],
];

export default PauseCircle;
