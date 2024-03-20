import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelLeftOpen: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
    ['path', { d: 'M9 3v18' }],
    ['path', { d: 'm14 9 3 3-3 3' }],
  ],
];

export default PanelLeftOpen;
