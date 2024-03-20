import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelTopInactive: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M14 9h1' }],
    ['path', { d: 'M19 9h2' }],
    ['path', { d: 'M3 9h2' }],
    ['path', { d: 'M9 9h1' }],
  ],
];

export default PanelTopInactive;