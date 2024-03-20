import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GanttChartSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M9 8h7' }],
    ['path', { d: 'M8 12h6' }],
    ['path', { d: 'M11 16h5' }],
  ],
];

export default GanttChartSquare;
