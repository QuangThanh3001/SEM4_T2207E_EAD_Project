import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const LayoutTemplate: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '7', x: '3', y: '3', rx: '1' }],
    ['rect', { width: '9', height: '7', x: '3', y: '14', rx: '1' }],
    ['rect', { width: '5', height: '7', x: '16', y: '14', rx: '1' }],
  ],
];

export default LayoutTemplate;
