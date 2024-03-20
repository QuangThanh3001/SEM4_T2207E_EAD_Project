import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelLeftInactive: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M9 14v1' }],
    ['path', { d: 'M9 19v2' }],
    ['path', { d: 'M9 3v2' }],
    ['path', { d: 'M9 9v1' }],
  ],
];

export default PanelLeftInactive;