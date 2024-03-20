import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const StepForward: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['line', { x1: '6', x2: '6', y1: '4', y2: '20' }],
    ['polygon', { points: '10,4 20,12 10,20' }],
  ],
];

export default StepForward;
