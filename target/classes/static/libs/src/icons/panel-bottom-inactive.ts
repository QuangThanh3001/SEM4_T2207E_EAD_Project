import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelBottomInactive: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M14 15h1' }],
    ['path', { d: 'M19 15h2' }],
    ['path', { d: 'M3 15h2' }],
    ['path', { d: 'M9 15h1' }],
  ],
];

export default PanelBottomInactive;
