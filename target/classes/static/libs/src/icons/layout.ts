import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Layout: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
    ['line', { x1: '3', x2: '21', y1: '9', y2: '9' }],
    ['line', { x1: '9', x2: '9', y1: '21', y2: '9' }],
  ],
];

export default Layout;