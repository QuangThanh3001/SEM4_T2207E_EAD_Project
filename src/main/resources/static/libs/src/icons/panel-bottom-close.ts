import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelBottomClose: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
    ['line', { x1: '3', x2: '21', y1: '15', y2: '15' }],
    ['path', { d: 'm15 8-3 3-3-3' }],
  ],
];

export default PanelBottomClose;