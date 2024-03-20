import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const RockingChair: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '3.5 2 6.5 12.5 18 12.5' }],
    ['line', { x1: '9.5', x2: '5.5', y1: '12.5', y2: '20' }],
    ['line', { x1: '15', x2: '18.5', y1: '12.5', y2: '20' }],
    ['path', { d: 'M2.75 18a13 13 0 0 0 18.5 0' }],
  ],
];

export default RockingChair;
