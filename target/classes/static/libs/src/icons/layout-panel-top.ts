import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const LayoutPanelTop: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '7', x: '3', y: '3', rx: '1' }],
    ['rect', { width: '7', height: '7', x: '3', y: '14', rx: '1' }],
    ['rect', { width: '7', height: '7', x: '14', y: '14', rx: '1' }],
  ],
];

export default LayoutPanelTop;
