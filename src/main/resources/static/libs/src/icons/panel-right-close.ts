import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelRightClose: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
    ['line', { x1: '15', x2: '15', y1: '3', y2: '21' }],
    ['path', { d: 'm8 9 3 3-3 3' }],
  ],
];

export default PanelRightClose;