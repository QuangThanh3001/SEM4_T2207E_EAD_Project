import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CalendarRange: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', ry: '2' }],
    ['line', { x1: '16', x2: '16', y1: '2', y2: '6' }],
    ['line', { x1: '8', x2: '8', y1: '2', y2: '6' }],
    ['line', { x1: '3', x2: '21', y1: '10', y2: '10' }],
    ['path', { d: 'M17 14h-6' }],
    ['path', { d: 'M13 18H7' }],
    ['path', { d: 'M7 14h.01' }],
    ['path', { d: 'M17 18h.01' }],
  ],
];

export default CalendarRange;
