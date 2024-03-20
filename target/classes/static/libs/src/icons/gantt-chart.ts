import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GanttChart: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M8 6h10' }],
    ['path', { d: 'M6 12h9' }],
    ['path', { d: 'M11 18h7' }],
  ],
];

export default GanttChart;
