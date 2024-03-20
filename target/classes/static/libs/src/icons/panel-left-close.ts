import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelLeftClose: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
    ['path', { d: 'M9 3v18' }],
    ['path', { d: 'm16 15-3-3 3-3' }],
  ],
];

export default PanelLeftClose;
