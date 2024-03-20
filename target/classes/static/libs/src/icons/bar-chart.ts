import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const BarChart: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['line', { x1: '12', x2: '12', y1: '20', y2: '10' }],
    ['line', { x1: '18', x2: '18', y1: '20', y2: '4' }],
    ['line', { x1: '6', x2: '6', y1: '20', y2: '16' }],
  ],
];

export default BarChart;