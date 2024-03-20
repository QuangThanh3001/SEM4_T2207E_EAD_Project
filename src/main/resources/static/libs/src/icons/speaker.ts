import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Speaker: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '16', height: '20', x: '4', y: '2', rx: '2', ry: '2' }],
    ['circle', { cx: '12', cy: '14', r: '4' }],
    ['line', { x1: '12', x2: '12.01', y1: '6', y2: '6' }],
  ],
];

export default Speaker;
