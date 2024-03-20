import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PanelRightInactive: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M15 14v1' }],
    ['path', { d: 'M15 19v2' }],
    ['path', { d: 'M15 3v2' }],
    ['path', { d: 'M15 9v1' }],
  ],
];

export default PanelRightInactive;